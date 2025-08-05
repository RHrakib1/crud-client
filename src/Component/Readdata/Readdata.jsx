import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Readdata() {
    const dataload = useLoaderData()
    return (
        <div>
            <h1>data: {dataload.length}</h1>
            {
                dataload.map(d => <p>{d.name}: {d.email}</p>)
            }
        </div>
    )
}
