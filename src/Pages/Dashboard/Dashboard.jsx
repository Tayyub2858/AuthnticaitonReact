import React from 'react'
import "./Style.css"
import { TypeAnimation } from 'react-type-animation'
const Dashboard = () => {
    const nameStorege = localStorage.getItem('name')
    return (
        <div className='dashboard'>
            <h1 style={{textAlign:'center',marginTop:'40px'}}>Welcome to {nameStorege}</h1>
            <TypeAnimation
                sequence={[
                    'Hello, welcome to the Weborik Hub', // Text to display
                    1000, // Waits for 1 second
                    'Feel free to explore more.', // Another text
                    2000, // Waits for 2 seconds
                    'This is cool, right?', // And another text

                ]}
                wrapper="span" 
                cursor={true}
                repeat={Infinity} 
                style={{ fontSize: '2em', display: 'inline-block' }} 
            />
        </div>
    )
}

export default Dashboard
