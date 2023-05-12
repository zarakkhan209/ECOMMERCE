import React, { useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const empty = {
      email: "",
      password: ""
    }
    // state for handle the login inputs
  
    const [handle, setHandle] = useState(empty)
  
    const loginHandler = (e) => {
      const { name, value } = e.target;
      setHandle({ ...handle, [name]: value })
      console.log(handle)
    }
  
  
  
    //function for login
    const loginApi = async () => {
      if (handle.email == "" || handle.password == "") {
        alert("Please Enter the Fields First")
      } else {
        let record = await fetch("http://localhost:8000/user/login", {
          method: "POST",
          headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify(handle)
        })
        record = await record.json()
        if (record.message == "Login Successfully") {
          // store id in SessionStorage
          sessionStorage.setItem("userId", record.LoginUser._id)
          sessionStorage.setItem("userEmail", record.LoginUser.email)
          // sessionStorage.setItem("userPassword",record.LoginUser.email)
          let adminemail = sessionStorage.getItem("userEmail")
          // let adminPassword = sessionStorage.getItem("userPassword")
          if (adminemail == "admin@gmail.com") {
  
            alert("Admin Login Successfully")
            navigate("/add")
          } else {
            alert("Login Successfully")
            navigate("/")
          }
  
  
        } else {
          alert("Username and Password is invalid")
        }
      }
    }
  return (
    <>
    <section className=" bg-white dark:bg-gray-900">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Log-In</h2>
      <form onSubmit={(e) => { e.preventDefault() }}>
          <div>
          <label className='mb-4 text-4xl tracking-tight text-center text-gray-900 dark:text-white' htmlFor="name">Email</label>
        <input className='form-control' type="email" onChange={loginHandler} id="name" name='email' required />
          </div>
          <div>
          <label className='mb-4 text-4xl tracking-tight text-center text-gray-900 dark:text-white' htmlFor="password">Password:</label>
        <input className='form-control' type="password" onChange={loginHandler} id="password" name='password' required />
          </div>
          <button onClick={loginApi} type="submit" className="py-3 px-5 text-2xl font-medium text-center text-white rounded-lg bg-teal-700 sm:w-fit hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">LogIn</button>
      </form>
  </div>
</section>
      
    </>
  )
}

export default Login 
