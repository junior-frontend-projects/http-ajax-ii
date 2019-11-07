import React, {useState, useEffect} from 'react'
import api from "../utils/api";

export default function UserUpdate(props) {
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
  })

  useEffect(() => {
    api().get(`/users/${props.match.params.id}`)
      .then(result => {
        setUser(result.data)
      })
      .catch(err => {
        console.log(err)
      })
  },[props.match.params.id])

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(user)
  }
  return (
    <div>
      <h1>Update User</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={user.name} onChange={handleChange}/>
        <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange}/>
        <button type="submit">Save</button>
      </form>
    </div>
  )
}
