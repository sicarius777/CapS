// Sidebar.jsx
import Navbar from 'react-bootstrap/Navbar'

import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'


export default function Sidebar() {
    return (
        <Navbar sticky='top' className='flex-column sidebar'>
            <Nav.Item>
                <Nav.Link href='/'>Home</Nav.Link>
            </Nav.Item>
            <Link to="/feed">A different way to get to FEED (no reload with this one just re-RENDER)</Link>
            <Nav.Item>
                <Nav.Link href='/feed'> Feed</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href='/users'>Users</Nav.Link>
            </Nav.Item>
        </Navbar>
    )
}
