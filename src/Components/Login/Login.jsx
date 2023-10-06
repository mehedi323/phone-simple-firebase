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
    const accepted = e.target.terms.checked;
    console.log(email, password, accepted);
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
    else if(!accepted){
      setError('Please accept out terms and conditions')
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
          <input className="w-full px-2 py-2 mb-2 text-2xl rounded-xl" type="email" name="email" placeholder="Email" required />
          <br />
          <div className="relative mb-2">
            <input className="w-full px-2 py-2  text-2xl rounded-xl"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              required />
            <span className="absolute top-4 right-3" onClick={() => setShowPassword(!showPassword)}>{
              showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
            }</span>
          </div>
          <div>
            <input type="checkbox" name="terms" id="terms" />
            <label className="ml-3" htmlFor="terms">Accept Our <a href="">Tems and conditions</a></label>
          </div>
          <br />
          <input className="btn btn-primary w-full px-2 py-2 mb-2 text-2xl" type="submit" value="submit" />

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