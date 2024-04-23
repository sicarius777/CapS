// App.jsx
import Container from 'react-bootstrap/Container'
import Header from './components/Header'
import FeedPage from './pages/FeedPage'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import SingleUserPage from './pages/SingleUserPage'
import UsersPage from './pages/UsersPage'
import WorldsPage from './pages/WorldsPage';
import { Route, Routes } from 'react-router-dom'

export default function App() {

  return (
    <Container fluid className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/register' element={<RegisterPage />}/>
        <Route path='/users' element={<UsersPage />}/>
        <Route path='/user' element={<SingleUserPage/>}/>
        <Route path='/feed' element={<FeedPage />}/>
        <Route path='/worlds' element={<WorldsPage />} />
      </Routes>



    </Container>
  )

}