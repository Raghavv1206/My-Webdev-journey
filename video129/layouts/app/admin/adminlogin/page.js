import React from 'react'

const page = () => {
  return (
    <div>
      Admin Login Page
      <p>feel free to login as Admin</p>
    </div>
  )
}

export default page

// or Dynamic metadata
export async function generateMetadata({ params }) {
  return {
    title: 'AdminLogin Facebook - Connect with friends and the world around you',
  }
}