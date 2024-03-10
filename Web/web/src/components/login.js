import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  }

  return (
    <div style={{ backgroundColor: 'black', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>Login to your account</h2>
      {/* <p>Don't have an account? <a href="signup.html">Sign Up Free!</a></p> */}
      <p>Login using social media to get quick access</p>
      <button>Signin with facebook</button>
      <button>Signin with twitter</button>
      <button>Signin with google</button>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor="email">Email address:</label><br />
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        /><br />
        <label htmlFor="pwd">Password:</label><br />
        <input 
          type="password" 
          id="pwd" 
          name="pwd" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        /><br />
        <input 
          type="checkbox" 
          id="remember" 
          name="remember" 
          checked={remember} 
          onChange={(e) => setRemember(e.target.checked)} 
        />
        <label htmlFor="remember"> Remember me</label><br />
        <input type="submit" value="Submit" />
      </form>
      {/* <button type='submit'>Submit</button> */}
      {/* <p><a href="reset-password.html">Forgot password?</a></p> */}
    </div>
  );
}

export default Login;