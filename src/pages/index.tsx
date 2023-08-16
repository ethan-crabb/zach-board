import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useContext } from 'react'
import { ArticleContext } from '@/utils/context/articles.context'
import { Article } from '@/components/layouts/Default'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const articles = useContext(ArticleContext) as Array<Article>
    console.log(articles)
    return (
        <div>
            <>
                <h2>Articles</h2>
                <div className='flex fdc' style={{ gap: 10, marginTop: 15 }}>
                    {articles.map((a) => {
                        return (
                            <div style={{ border: "1px solid #ccc", padding: 10 }}>
                                <h3>{a.title}</h3>
                                <br />
                                <p>{a.content}</p>
                                <br />
                                <p>Posted {new Date(a.created).toDateString()}</p>
                            </div>
                        )
                    })}

                </div>
            </>
        </div>
    )
}
