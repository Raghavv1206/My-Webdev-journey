import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setname] = useState("raghav")
  // const[form, setform] = useState({email: "", phone: ""})
  const[form, setform] = useState({})

  const handleclick = ()=>{
      alert("I am clicked")
  }
  const handlemouseover = ()=>{
      alert("I am a mouseover")
  }
  const handlechange = (e)=>{
      // setname(e.target.value)
      setform({...form, [e.target.name]:e.target.value})
      console.log(form)
  }

  
  

  return (
    <>
      <div className="button">
        <button onClick={handleclick}>Click me</button>
      </div>

      {/* <div className="red" onMouseOver={handlemouseover}>
        i am a red div
      </div> */}

      {/* <input type="text" value={name} onChange={handlechange} /> */}
      {/* <input type="text" name='email' value={form.email} onChange={handlechange} /> */}
      <input type="text" name='email' value={form.email?form.email:""} onChange={handlechange} />
      {/* <input type="text" name='phone' value={form.phone} onChange={handlechange} /> */}
      <input type="text" name='phone' value={form.phone?form.phone:""} onChange={handlechange} />
    </>
  )
}

export default App 
