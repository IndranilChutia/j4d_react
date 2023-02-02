import React, { useEffect } from 'react'
import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function LandingPage() {

    useEffect(()=>{
        document.title = 'Home';
    });

    
    return (
        <Container className='d-flex justify-content-center align-items-center vh-100'>
            <Button variant="dark" className='m-4'><Link to={'/signup'} className="text-decoration-none text-white">Sign Up</Link></Button>
            <Button variant="dark" className='m-4'><Link to={'/login'} className="text-decoration-none text-white">Login</Link></Button>
            
        </Container>
    
  )
}

export default LandingPage