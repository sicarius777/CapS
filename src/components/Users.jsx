// Users.jsx
import { useEffect, useState } from "react"
import Spinner from 'react-bootstrap/Spinner'

export default function Users() {

    const [users, setUsers ] = useState([]);

    useEffect(()=>{
        (async ()=>{
            await getUsers();
        })()
    },[])

    async function getUsers(){
        const res = await fetch('https://pw141-flask-deploy.onrender.com/user')
        if (res.ok){
            const data = await res.json();
            setUsers(data);
        } else console.error("Failed To load Users")
    }

    if( users.length === 0 ) return <Spinner />
  return (
    <div>
        { users.map((user, i ) => <p key={i}>{user.username}</p> )}
    </div>
  )
}
