 "use client"
 import React from 'react'
 import { usePathname } from 'next/navigation'
 
 const Navbar = () => {

    const pathname = usePathname();
   return (
    <>
     <div>
       Navbar
     </div>
     <div>you are inside {pathname}</div>
</>
   )
 }
 
 export default Navbar
 