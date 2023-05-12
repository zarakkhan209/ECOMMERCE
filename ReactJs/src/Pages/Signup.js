import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState([]);
  // const [errorMsg, setErrorMsg] = useState(false);
  const navigage = useNavigate();

  const saveData = async(e) =>{
    // if(!name || !email || !password){
    //   setErrorMsg(true)
    //   return false
    // }
    e.preventDefault();
    let abcd = await fetch("http://localhost:8000/user",{
      method: 'POST',
      body: JSON.stringify({name, email, password}),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    abcd = await abcd.json();
    setData(abcd);
    navigage('/login')
  }

  return (
    <>
    <section className=" bg-white dark:bg-gray-900">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Sign-Up</h2>
      <form action="#" className="space-y-8">
          <div>
          <label className='mb-4 text-4xl tracking-tight text-center text-gray-900 dark:text-white' htmlFor="name">Name:</label>
        <input className='form-control' type="text" required  id="name" name="name" onChange={(e)=>setName(e.target.value)}/>
          </div>
          <div>
          <label className='mb-4 text-4xl tracking-tight text-center text-gray-900 dark:text-white' htmlFor="email">Email:</label>
        <input className='form-control' type="email" id="email" name="email" required onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div>
          <label className='mb-4 text-4xl tracking-tight text-center text-gray-900 dark:text-white' htmlFor="password">Password:</label>
        <input className='form-control' type="text" id="password" name="email" required onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <button onClick={saveData} type="submit" className="py-3 px-5 text-2xl font-medium text-center text-white rounded-lg bg-teal-700 sm:w-fit hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">Register</button>
      </form>
  </div>
</section>
      
    </>
  )
}

export default SignUp 
