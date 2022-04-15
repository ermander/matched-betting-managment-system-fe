import type { NextPage } from 'next'
import styles from '../styles/Login.module.scss'
import { AiFillFacebook, AiOutlineTwitter } from 'react-icons/ai'
import Link from 'next/link'

const Login: NextPage = () => {
  const handleLogin = (e: any) => {
    e.preventDefault()
    console.log('Login normale')
  }

  return (
    <div id={`${styles['login-page']}`}>
      <form>
        <h3>Login</h3>
        <button
          className={`${styles['social-login-buttons']} ${styles['facebook-button']}`}
          onClick={(e) => {
            e.preventDefault(), console.log('Login with facebook')
          }}
        >
          <AiFillFacebook />
          Login con Facebook
        </button>
        <button
          className={`${styles['social-login-buttons']} ${styles['twitter-button']}`}
          onClick={(e) => {
            e.preventDefault(), console.log('Login with twitter')
          }}
        >
          <AiOutlineTwitter />
          Login con Twitter
        </button>

        <h4>Login con email</h4>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit" onClick={(e) => handleLogin(e)}>
          LOGIN
        </button>
      </form>
      <div id={styles['signup-redirect']}>
        <h5>Non hai un account?</h5>
        <Link href="/signup">Iscriviti ora!</Link>
      </div>
    </div>
  )
}

export default Login
