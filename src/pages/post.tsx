"use client";
import { firestore } from '@/utils/firebase';
import { addDoc, collection, doc } from 'firebase/firestore';
import React, { useState } from 'react'

export default function Post() {
    const [content, setContent] = useState("")
    const [title, setTitle] = useState("")
    const [error, setError] = useState("")
    const [posted, setPosted] = useState(false)
    return (
        <div className='flex fdc' style={{ gap: 10 }}>
            <h2>Create a post</h2>
            <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder='Post title' />
            <textarea onChange={(e) => setContent(e.target.value)} placeholder='Post content'></textarea>
            <button style={{ width: "fit-content" }} onClick={() => {
                if (!content || !title) {
                    return setError("Enter values")
                }
                addDoc(collection(firestore, "articles"), {
                    title,
                    content,
                    created: Date.now()
                }).then(() => {
                    console.log("Posted")
                    setPosted(true)
                }).catch((err) => setError("Something went wrong"))
            }}>Post</button>
            <div style={{ color: "red" }}>
                {error}
            </div>
            {posted
                ? <div style={{ color: "green" }}>
                    Posted!
                </div>
                : <div style={{ color: "red" }}>
                    {error}
                </div>
            }
        </div>
    )
}
