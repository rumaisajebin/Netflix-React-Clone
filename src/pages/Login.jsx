import React ,{useState}from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]=useState('')
  const { user, login } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit=async(e)=>{
    e.preventDefault()
    setError('')

    try{
      await login(email,password)
      navigate('/')
      console.log('signed')
    }
    catch(error){
      console.log(error)
      setError(error.message)
    }


  }

  return (
    <>
      <div className="w-full h-screen">
        <img
          className="absolute hidden object-cover w-full h-full sm:block"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        />
        <div className="fixed top-0 left-0 w-full h-screen bg-black/60"></div>
        <div className="fixed z-50 w-full px-4 py-24">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign In</h1>
              {error ? <p className="p-3 my-2 bg-red-400">{error}</p>: null}
              <form onSubmit={handleSubmit} className="flex flex-col w-full py-4">
                <input onChange={(e)=>setEmail(e.target.value)}
                  className="p-3 my-2 bg-gray-700 runded"
                  type="email"
                  placeholder="Email or Phone Number"
                  autoComplete="email"
                />
                <input
                  onChange={(e)=>setPassword(e.target.value)}
                  className="p-3 my-2 bg-gray-700 runded"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <button className="py-3 my-6 font-bold bg-red-600 rounded">
                  Sign In
                </button>

                <div className="flex items-center justify-between text-sm text-gray-600">
                  <p>
                    <input className="mr-2" type="checkbox" />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
              </form>
              <p className="py-8">
                {" "}
                <span className="text-gray-600">New to Netflix </span>{" "}
                <Link to="/signup">Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default login;
