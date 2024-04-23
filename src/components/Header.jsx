// Header.jsx
import { Container } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'

export default function Header() {
  return (
    <Navbar data-bs-theme='dark' className='main-heading' sticky='top'>
      <Container>
        <Navbar.Brand>Codex of Worlds</Navbar.Brand>
        
      </Container>
    </Navbar>
  )
}
