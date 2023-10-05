
const Login = () => {
  const handleLogin = e =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password );
  }
  return (
    <div>
      <div className="mx-auto w-1/2">
        <h2 className="text-3xl mb-8">This is Login</h2>
        <form onSubmit={handleLogin}>
          <input className="w-3/4 px-2 py-2 mb-2 text-2xl rounded-xl" type="email" name="email" placeholder="Email" />
          <br />
          <input className="w-3/4 px-2 py-2 mb-2 text-2xl rounded-xl" type="password" name="password" placeholder="Password" />
          <br />
          <input className="btn btn-primary w-3/4 px-2 py-2 mb-2 text-2xl" type="submit" value="submit" />
        </form>
      </div>
    </div>
  );
};

export default Login;