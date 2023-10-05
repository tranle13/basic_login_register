function Signup() {
  return (
    <div className="flex m-0">
      <div className="bg-red-300 flex flex-col">
        <h2>Register</h2>
        <form className="flex flex-col">
          <div className="flex flex-col">
            <label htmlFor="name">Full name</label>
            <input
              type="text"
              placeholder="Enter name"
              autoComplete="off"
              name="full name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              autoComplete="off"
              name="email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              autoComplete="off"
              name="password"
            />
          </div>
          <button>Register</button>
          <p>Already have an account?</p>
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
