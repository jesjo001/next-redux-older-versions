import React, { useState } from 'react'
import style from '../styles/login.module.css'
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useLoginMutation } from '../redux/features/auth/authApiSlice';
import { setCredentials } from '../redux/features/auth/authSlice';
import { loginErrorHandler} from '../utils/errorHandler';
import { toast } from 'react-toastify';

function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const router = useRouter();

  const loginNewUser = async (e) => {
    e.preventDefault();
    try {
     
      const response = await login({ email, password}).unwrap()
      dispatch(setCredentials({ response, email  }))

      if (response?.accessToken) {
        toast.success("Successfully logged in");
        router.push("/dashboard/home");
      }
    } catch (err) {
      let errorMessage = loginErrorHandler(err);
      toast.error(errorMessage);
    }
  };


  return (
    
    <div className={style.container}>
        <form className={style.form}>
            <h1 className={style.title}>Login</h1>
            <div className={style.inputContainer}>
                <label className={style.label}>Username</label>
                <input className={style.input} type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Username" />
            </div>
            <div className={style.inputContainer}>
                <label className={style.label}>Password</label>
                <input className={style.input} type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            </div>
            <div className={style.buttonContainer}>
                <button className={style.button} onClick={(e) => loginNewUser(e)} >Login</button>

            </div>
            </form>
    </div>
  )
}

export default login