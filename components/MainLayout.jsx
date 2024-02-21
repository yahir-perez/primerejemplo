import React from 'react'

function MainLayout({children}) {
  return (
    <div>
        <h1>Tailwind</h1>
        <hr/>
        <main>{children}</main>    
    </div>
  )
}

export default MainLayout