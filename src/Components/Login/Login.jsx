import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase__init";
import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';




const Login = () => {
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setSuccess('');
    setError('')

    if (password.length < 6) {
      setError('Password should be at least 6 charecters or longer')
      return;
    }
    else if (!/[A-Z]/.test(password)) {
      setError('Your password should have at least one UpperCase charecters..')
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        console.log(result.user);
        setSuccess('User Create Successfully')
      })
      .catch(error => {
        console.error(error);
        setError(error.message)
      })

  }
  return (
    <div>
      <div className="mx-auto w-1/2">
        <h2 className="text-3xl mb-8">This is Login</h2>
        <form onSubmit={handleLogin}>
          <input className="w-3/4 px-2 py-2 mb-2 text-2xl rounded-xl" type="email" name="email" placeholder="Email" required />
          <br />
          <input className="w-3/4 px-2 py-2 mb-2 text-2xl rounded-xl"
            type={ showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            required />
          <span onClick={() => setShowPassword(!showPassword)}>{
            showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
          }</span>
          <br />
          <input className="btn btn-primary w-3/4 px-2 py-2 mb-2 text-2xl" type="submit" value="submit" />
        </form>
        {
          success && <p className="text-2xl text-green-800">{success}</p>
        }

        {
          error && <p className="text-2xl text-red-800">{error}</p>
        }
      </div>
    </div>
  );
};

export default Login;