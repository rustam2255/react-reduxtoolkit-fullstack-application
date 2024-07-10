import { Input } from "../ui"
import {useState} from 'react'
const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (  
    <div className="text-center w-25 m-auto mt-5">
      <main className="form-signin">
        <form>
          <img className="mb-4" src="https://i.pinimg.com/originals/f0/d7/02/f0d7020a05d8739a33329948b6ba7886.png" alt="" width="100" height="100" />
          <h1 class="h3 mb-3 fw-normal">Please register</h1>
          <Input label={'Username'} type={'text'} state={name} setState={setName} />
          <Input label={'Email'}  type ={'email'} state={email} setState={setEmail} />
          <Input label={'Password'} type={'password'} state={password} setState={setPassword} />
          <button className="w-100 btn btn-lg btn-primary mt-3" type="submit">Sign in</button>
          
        </form>
      </main>
    </div>
  )
}

export default Register