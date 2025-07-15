import React, { useEffect } from 'react'


const Navbar = ({ color }) => {

    // case1: RUN ON EVERY RENDER
    useEffect(() => {
        alert("hey i will run on every render")
    })

    // case2: run only on first render
    useEffect(() => {
        alert("hey welcome to my page, thsi is the first render")
    }, [])

    // case3: run only when certain values change
    useEffect(() => {
        alert("hey i am running because color was changed")
    }, [color])
    

     useEffect(() => {
          alert("hey welcome to my page, thsi is the first render of app.jsx")
          return()=>{
            alert("component was unmounted")
          }
      }, [])

    return (
        <div>
            i am navbar of {color} color hehe..
        </div>
    )
}

export default Navbar
