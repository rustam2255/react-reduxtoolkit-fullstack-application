import { Input } from "../ui"
import {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {signUserStart, signUserSuccess, signUserFailure} from "../../slice/auth";
import AuthService from "../../service/auth";
import {ValidationError} from "../index";
import { useNavigate } from "react-router-dom";


const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch()
  const {isLoading,loggedIn} = useSelector(state => state.auth)
  const navigate = useNavigate()
  const registerHandler = async (e) => {
    e.preventDefault()
    dispatch(signUserStart())
    const user = {username: name, email, password}
    try {
      const response = await AuthService.userRegister(user)
      dispatch(signUserSuccess(response.user))
      console.log(response.user)
      navigate('/')
      
    } catch (error) {
      dispatch(signUserFailure(error.response.data.errors))
      
    }
    
  }
  useEffect(() => {
    if(loggedIn){
      navigate('/')
    }
  }, [])
 
  return (  
    <div className="text-center w-25 m-auto mt-5">
      <main className="form-signin">
        <form>
          <img className="mb-4" src="https://i.pinimg.com/originals/f0/d7/02/f0d7020a05d8739a33329948b6ba7886.png" alt="" width="100" height="100" />
          <h1 class="h3 mb-3 fw-normal">Please register</h1>
          <ValidationError />
          <Input label={'Username'} type={'text'} state={name} setState={setName} />
          <Input label={'Email'}  type ={'email'} state={email} setState={setEmail} />
          <Input label={'Password'} type={'password'} state={password} setState={setPassword} />
          <button className="w-100 btn btn-lg btn-primary mt-3" type="submit" onClick={registerHandler} disabled={isLoading} >{isLoading ? 'loading...' : 'Register'}</button>
          
        </form>
      </main>
    </div>
  )
}

export default Register