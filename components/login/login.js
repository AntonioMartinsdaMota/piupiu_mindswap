function Login() {
    function handleClick(event) {
      event.preventDefault();
      console.log("going to the dtabase");
    }
  
    return (
      <>
        <div id="login">
          <img src="https://i.ibb.co/3c94bFF/logo.png" height={75} alt="" />
          <form action="">
            <input type="email" placeholder="email" id="email" />
            <div>
              <input type="password" id="password" placeholder="password" />
            </div>
            <a href="/signup">
              <button type="button">SignUp</button>
            </a>
            <button type="submit" onClick={handleClick}>
              Login
            </button>
          </form>
        </div>
      </>
    );
  }
  
  
  export default Login;
  