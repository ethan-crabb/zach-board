import { auth } from '@/utils/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const router = useRouter()
    return (
        <div>
            <h2>Login</h2>
            <div>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Email' />
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' />
            </div>
            <button onClick={() => {
                signInWithEmailAndPassword(auth, email, password).then(() => {
                    router.push("/post")
                }).catch((error) => {
                    console.log(error)
                    setError("Incorrect")
                })
            }}>Login</button>
            <div style={{ marginTop: 20, color: "red" }}>
                {error}
            </div>
        </div>
    )
}
