import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'

function App() {
    const [post, setpost] = useState([])
  
  
  
  
  useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
    .then((data) => setpost(data))
    }, [])
    



  return (
    <>
      <Navbar/>
      
      <div className="container">
      {post.map((item) =>
      <div key={post.id} className="card">
        <div className="cards">userId: {item.userId}</div>
        <div className="cards">ID: {item.id}</div>
        <div className="cards">Title: {item.title}</div>
        <div className="cards">Body: {item.body}</div>
      </div>
      )}
      </div>
    </>
  )
}

export default App
