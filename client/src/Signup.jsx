function Signup() {
  return (
    <div className="flex flex-col border-solid border-[2px] border-black rounded-lg p-10 relative gap-4 after:absolute after:w-full after:h-full after:top-3 after:left-3 after:bg-bubblegum after:rounded-lg after:z-[-1]">
      <h2 className="text-2xl font-extrabold text-center">Register</h2>
      <form className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="font-semibold">
            Full name
          </label>
          <input
            type="text"
            placeholder="Enter name"
            autoComplete="off"
            name="full name"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-semibold">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter email"
            autoComplete="off"
            name="email"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="font-semibold">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            autoComplete="off"
            name="password"
          />
        </div>
        <button className="border-solid border-[1px] border-black w-max p-2 rounded-md self-center">
          Register
        </button>
        <div className="text-xs self-center flex flex-col gap-1">
          <p>Already have an account?</p>
          <button className="underline">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
