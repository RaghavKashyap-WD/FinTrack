import { Eye, EyeClosed } from "lucide-react"
import { useState } from "react"

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)


  return (
    <div className="bg-gradient-to-bl from-indigo-400 to bg-indigo-300 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-10 max-w-[55rem] w-full max-h-[60%] h-full flex flex-col gap-4 items-center justify-center">
        <div className="text-center flex flex-col gap-2 mx-5 mb-5">
          <h1 className="text-3xl text-indigo-500">Signup</h1>
          <span className="text-gray-400">Join the community today!</span>
        </div>

        <div className="flex flex-col gap-4 w-full items-center justify-center">
          <div className="flex gap-2 w-[50%] items-center justify-center drop-shadow-2xl shadow-lg rounded-2xl p-2 px-10 hover:scale-105 transition-all duration-200 ease-out cursor-pointer font-sans">
            <img src="https://static.vecteezy.com/system/resources/previews/022/613/027/non_2x/google-icon-logo-symbol-free-png.png" alt="" width={30} />
            <h1>Use Goggle Account</h1>
          </div>

          <span className="text-gray-400 text-lg">or</span>

          <div className="flex flex-col gap-9 w-full items-center justify-center">
            <form action="submit" name="LoginSignup" className="flex flex-col gap-6 w-full items-center justify-center">
              <input type="email" placeholder="abc@gmail.com" className="outline-none border-b py-2 px-1 w-[50%]" required />
              <div className="flex gap-2 w-full items-center justify-center">
                <input type={isPasswordVisible ? "text" : "password"} placeholder="Password..." className="outline-none border-b py-2 px-1 w-[50%] z-50 translate-x-3.5" required minLength={8} />
                <span className="relative right-[3%] cursor-pointer z-50" onClick={() => setIsPasswordVisible(!isPasswordVisible)}>{isPasswordVisible ? <Eye /> : <EyeClosed />}</span>
              </div>
              <button type="submit" className="w-[50%] h-10 rounded-2xl bg-gradient-to-r from-indigo-400 to-indigo-500 hover:scale-105 transition-all duration-200 ease-out cursor-pointer text-lg drop-shadow-lg shadow-lg shadow-indigo-300" onClick={() => setIsLoggedIn(true)}>{isLoggedIn ? "Login" : "Sign Up"}</button>
            </form>
          </div>

          <div className="text-gray-400 text-lg flex gap-2">
            <span>already a member?</span>
            <a href="#" className="text-gray-500">{isLoggedIn ? "Login" : "Sign Up"}</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
