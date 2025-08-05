
import { useLoaderData } from 'react-router-dom'

export default function Readdata() {
    const dataload = useLoaderData()
    const hendleclickDelete = id => {
        console.log('delete id', id)
        fetch(`http://localhost:5000/datauser/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <div>
            <h1>data: {dataload.length}</h1>
            {
                dataload.map(d => <p>{d.name}: {d.email} ---{d._id} <button onClick={() => hendleclickDelete(d._id)}>X</button></p>)
            }
        </div>
    )
}
