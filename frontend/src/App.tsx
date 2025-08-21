import { Eye, EyeClosed } from "lucide-react"
import { useState } from "react"

const API_URL = "http://localhost:5000" // Update if your backend uses a different URL

const App = () => {
  const [isLoginMode, setIsLoginMode] = useState(false) // false=signup, true=login
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setMessage("")
    const endpoint = isLoginMode ? "/login" : "/signup"
    try {
      const res = await fetch(API_URL + endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: email, password }),
      })
      const data = await res.json()
      if (data.success) {
        setMessage(data.message)
      } else {
        setError(data.message)
      }
    } catch {
      setError("Server error. Please try again later.")
    }
    setLoading(false)
  }

  const toggleMode = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsLoginMode((prev) => !prev)
    setError("")
    setMessage("")
  }

  return (
    <div className="bg-gradient-to-bl from-indigo-400 to bg-indigo-300 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-10 max-w-[55rem] w-full max-h-[60%] h-full flex flex-col gap-4 items-center justify-center">
        <div className="text-center flex flex-col gap-2 mx-5 mb-5">
          <h1 className="text-3xl text-indigo-500">{isLoginMode ? "Login" : "Signup"}</h1>
          <span className="text-gray-400">{isLoginMode ? "Welcome back!" : "Join the community today!"}</span>
        </div>

        <div className="flex flex-col gap-4 w-full items-center justify-center">
          <div className="flex gap-2 w-[50%] items-center justify-center drop-shadow-2xl shadow-lg rounded-2xl p-2 px-10 hover:scale-105 transition-all duration-200 ease-out cursor-pointer font-sans"
            onClick={() => alert('Google OAuth not implemented yet!')}>
            <img src="https://static.vecteezy.com/system/resources/previews/022/613/027/non_2x/google-icon-logo-symbol-free-png.png" alt="" width={30} />
            <h1>Use Google Account</h1>
          </div>

          <span className="text-gray-400 text-lg">or</span>

          <div className="flex flex-col gap-9 w-full items-center justify-center">
            <form className="flex flex-col gap-6 w-full items-center justify-center" onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="abc@gmail.com"
                className="outline-none border-b py-2 px-1 w-[50%]"
                required
              />
              <div className="flex gap-2 w-full items-center justify-center">
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Password..."
                  className="outline-none border-b py-2 px-1 w-[50%] z-50 translate-x-3.5"
                  required
                  minLength={8}
                />
                <span
                  className="relative right-[3%] cursor-pointer z-50"
                  onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                  tabIndex={0}
                  role="button"
                  aria-label="Toggle password visibility"
                >
                  {isPasswordVisible ? <Eye /> : <EyeClosed />}
                </span>
              </div>
              <button
                type="submit"
                className="w-[50%] h-10 rounded-2xl bg-gradient-to-r from-indigo-400 to-indigo-500 hover:scale-105 transition-all duration-200 ease-out cursor-pointer text-lg drop-shadow-lg shadow-lg shadow-indigo-300"
                disabled={loading}
              >
                {loading ? "Please wait..." : (isLoginMode ? "Login" : "Sign Up")}
              </button>
              {error && <span className="text-red-500">{error}</span>}
              {message && <span className="text-green-500">{message}</span>}
            </form>
          </div>

          <div className="text-gray-400 text-lg flex gap-2">
            <span>{isLoginMode ? "New here?" : "Already a member?"}</span>
            <a href="#" className="text-gray-500" onClick={toggleMode}>
              {isLoginMode ? "Sign Up" : "Login"}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
