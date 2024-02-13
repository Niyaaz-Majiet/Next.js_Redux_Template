'use client';
import styles from './page.module.css';
import { useAppDispatch } from "../redux/hooks";
import { loginUser } from '@/redux/slices/auth_slice';
import { useRouter } from 'next/navigation'
import { useEffect } from 'react';
import { getCookie } from 'cookies-next';

const HomePage = (): JSX.Element => {
  const router = useRouter()
  const dispatch = useAppDispatch();

  useEffect(()=>{
   const isLoggedIn = getCookie('loggedIn');
   if(isLoggedIn == 'true'){
    router.push('/dashboard');
   }
  },[])

  const user = {
    username: '',
    password: ''
  };

  return <div className={styles.page}>
    <div className={styles.container}>
      <label
        htmlFor='username'
      >
        Username:
        <input id='username' />
      </label>

      <label
        htmlFor='password'
      >
        Password:
        <input id='password' />
      </label>

      <button onClick={() => dispatch(loginUser(user)).then(()=> router.push('/dashboard'))}>Login</button>
    </div>
  </div>
}




export default HomePage;