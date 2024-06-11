import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const SignupForm = ({isLogin,setLoggedIn}) => {
    const navigate = useNavigate();
    const [showPassword,setShowPass] = useState(false);
    const [formData,setFormData] = useState({
      EmailId:"",
      Password:""
    })
    function clickHandler(){
        setShowPass(!showPassword);
    }
    function SubmitHandler(event){
      event.preventDefault();
      console.log(formData);
      setLoggedIn(true);
        navigate('/form')
        toast('Tera Bhai Seedhe Maut', {
            icon: '🎙️',
            style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
              },
          });
    }
    function changeHandler(event){
      
      setFormData((prevData)=>(
        {
          ...prevData,
          [event.target.name]:event.target.value
        }
      ))
    }
  return (
    <div>
      <form action="" class="flex flex-col gap-4" onSubmit={SubmitHandler}>
        <input class="p-2 mt-8 rounded-xl border" type="email" placeholder="Email" name='EmailId' value={formData.EmailId}  onChange={changeHandler}/>
        <div class="relative">
        
          <input class="p-2 rounded-xl border w-full" 
          type={showPassword === true ? ("text"):("password")} 
           placeholder="Password" value={formData.Password}
           name='Password'
           onChange={changeHandler}/>
           
          <button onClick={clickHandler}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2" viewBox="0 0 16 16">
            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
          </svg>
          </button>
          
          
          
        </div>
        <button class="bg-black rounded-xl text-white py-2 hover:scale-105 duration-300">Signup</button>
      </form>
    </div>
  )
}

export default SignupForm
