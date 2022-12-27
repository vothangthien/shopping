import Head from 'next/head'
import Link from 'next/link'
import {useState, useContext, useEffect} from 'react'
import {DataContext} from '../store/GlobalState'
import {postData} from '../utils/fetchData'
import Cookie from 'js-cookie'
import { useRouter } from 'next/router'

function Signin() {
  const initialState = { email: '', password: '' }
  const [userData, setUserData] = useState(initialState)
  const { email, password } = userData

  const {state, dispatch} = useContext(DataContext)
  const { auth } = state

  const router = useRouter()

  const handleChangeInput = e => {
    const {name, value} = e.target
    setUserData({...userData, [name]:value})
    dispatch({ type: 'NOTIFY', payload: {} })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    dispatch({ type: 'NOTIFY', payload: {loading: true} })
    const res = await postData('auth/login', userData)
    
    if(res.err) return dispatch({ type: 'NOTIFY', payload: {error: res.err} })
    dispatch({ type: 'NOTIFY', payload: {success: res.msg} })

    dispatch({ type: 'AUTH', payload: {
      token: res.access_token,
      user: res.user
    }})

    Cookie.set('refreshtoken', res.refresh_token, {
      path: 'api/auth/accessToken',
      expires: 7
    })

    localStorage.setItem('firstLogin', true)
  }

  useEffect(() => {
    if(Object.keys(auth).length !== 0) router.push("/")
  }, [auth])


  return (
    <div>
        <form className='mx-auto my-4' style={{maxWidth:'500px' }} onSubmit={handleSubmit}>
           <div className="mb-3">
             <label forhtml="exampleInputEmail1" className="form-label">Email address</label>
             <input type="email" className="form-control" id="exampleInputEmail1" 
                  name='email'value={email} onChange={handleChangeInput}></input>
           </div>


        <div className="mb-3">
         <label forhtml="exampleInputPassword1" className="form-label">Password</label>
         <input type="password" className="form-control" id="exampleInputPassword1"
           name='password'value={password} onChange={handleChangeInput}></input>
       </div>
 
        <button type="submit" className="btn btn-primary">SIGNIN</button>
        <p className='my-2' >
        You not have an account? <Link href="/Register" legacyBehavior><a style={{color: 'crimson'}}>Register Now</a></Link>
        </p>
      </form>
    </div>
  )
}

export default Signin