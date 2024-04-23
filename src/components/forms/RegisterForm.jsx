// RegisterForms.jsx
import { useState } from "react"
import Container from "react-bootstrap/Container";

export default function RegisterForm() {

  const [user, setUser] = useState({});

  console.log(user);

  async function registerUser(){
    const res = await fetch('https://pw141-flask-deploy.onrender.com/user',{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user) 
    })
    if (res.ok){
      const data = await res.json();
      console.log(data);
    } else console.error("Login Failed")
  }

  function handleRegisterFormSubmit(e) {
    e.preventDefault();

    if (user.password !== user.confirmPassword ) {
      window.alert("Passwords Must Match")
      return;
    }
    delete user.confirmPassword;
    console.log(user, 'submitted');
    console.log("submitting form");
    registerUser();
  }

  return (
    <Container>
      <h3>Register</h3>
      <form action="" onSubmit={handleRegisterFormSubmit}>
        <label htmlFor="username">username</label><br />
        <input type="text" name='username' value={user.username} onChange={(e) => { setUser({ ...user, username: e.target.value }) }} required/><br />
        <label htmlFor="email">email</label><br />
        <input type="text" name='email' value={user.email} onChange={(e) => { setUser({ ...user, email: e.target.value }) }} required/><br />
        <label htmlFor="password">password</label><br />
        <input type="password" name='password' value={user.password} onChange={(e) => { setUser({ ...user, password: e.target.value }) }} required/><br />
        <label htmlFor="confirm-password">confirm-password</label><br />
        <input type="password" name='confirm-password' onChange={(e) => { setUser({ ...user, confirmPassword: e.target.value }) }} value={user.confirmPassword} required/><br />
        <label htmlFor="first-name">first-name</label><br />
        <input type="text" name='first-name' value={user.first_name} onChange={(e) => { setUser({ ...user, first_name: e.target.value }) }} /><br />
        <label htmlFor="last-name">last-name</label><br />
        <input type="text" name='last-name' value={user.last_name} onChange={(e) => { setUser({ ...user, last_name: e.target.value }) }} /><br />

        <input type="submit" name='Register' value='Register' />
      </form>
    </Container>
  )

}

