function SignUp() {
  function register(event) {
    event.preventDefault();
    console.log("registering");
  }

  return (
    <>
      <div id="singup">
        <img src="https://i.ibb.co/3c94bFF/logo.png" height={75} alt="" />
        <form action="">
          <input type="email" placeholder="Email" id="email" /> <br />
          <input type="text" placeholder="Username" id="username" />
          <div>
            <input type="password" id="password" placeholder="password" />{" "}
            <br />
            <input
              type="confirm_password"
              id="confirm_password"
              placeholder="Confirm Password"
            />
          </div>
          <button type="submit" onClick={register}>
            Resgister
          </button>
        </form>
      </div>
    </>
  );
}

export default SignUp;
