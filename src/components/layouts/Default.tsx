import { ArticleContext } from '@/utils/context/articles.context'
import { auth, firestore } from '@/utils/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { collection, getDocs, onSnapshot, query } from 'firebase/firestore'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export interface Article {
    title: string,
    content: string,
    created: number,
    cat: string
}
export default function Default({ children }: { children: any }) {
    const [isAdmin, setIsAdmin] = useState<boolean | undefined>(undefined)
    const [articles, setArticles] = useState<Array<Article> | undefined>(undefined)
    const router = useRouter()
    useEffect(() => {
        onAuthStateChanged(auth, (usr) => {
            if (!usr) return setIsAdmin(false)
            setIsAdmin(true)
        })
        onSnapshot(collection(firestore, "articles"), (snaps) => {
            console.log(snaps)
            const parsedArticles = new Array()
            snaps.forEach((snap) => parsedArticles.push(snap.data()))
            parsedArticles.sort((a, b) => b.created - a.created)
            console.log(parsedArticles)
            setArticles(parsedArticles)
        })
    }, [])
    if (isAdmin === undefined || !articles) {
        return <p>Loading...</p>
    }
    return (
        <ArticleContext.Provider value={articles}>
            <div>
                <header className='flex aic jcsb' style={{ borderBottom: "1px solid gray", marginBottom: 20 }}>
                    <Link href={"/"}>
                        <h1>Zach's Board</h1>
                    </Link>
                    <div>
                        {isAdmin
                            ? <>
                                <button onClick={() => signOut(auth).then(() => router.push("/"))}>Logout</button>
                                <Link href={"/post"}>
                                    <button>Create new post</button>
                                </Link>
                            </>
                            : <Link href={"/login"}>
                                <button>login</button>
                            </Link>
                        }
                    </div>
                </header>
                <main>
                    {children}
                </main>
            </div>
        </ArticleContext.Provider>
    )
}
