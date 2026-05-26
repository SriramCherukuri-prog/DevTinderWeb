
    import { useState } from "react";
    import axios from "axios"
    import { useDispatch } from "react-redux";
    import { addUser } from "../utils/userSlice";
    import { useNavigate } from "react-router-dom";
    import { BASE_URL } from "../utils/constants";
    import { validate } from "../utils/validation";
    import gsap from "gsap";
    import { motion } from "motion/react"

    const Login = ()=>{
        const [emailid, setEmailid] = useState("");
        const [password, setPassword] = useState("");
        const [firstName, setFirstName] = useState("");
        const [lastName, setLastName] = useState("");
        const [isLoginForm,setisLoginForm] = useState(true)
        const [error,setError] = useState("")

        //to add data to redux store we dispatch an action
        const dispatch = useDispatch()

        const navigate = useNavigate()

        const handleLogin = async ()=>{

            const validationError = validate(emailid,password)

            if(validationError){
            setError(validationError);
            return
            }

            try{
                setError("")
        
            const res = await axios.post(BASE_URL+ "/login",{
                emailid,
                password
            },{withCredentials:true}
        );
            //added user data to the store
            dispatch(addUser(res.data))
            //navigate to /feed page
            return navigate("/")
            }catch(err){
                setError(err?.response?.data?.message || "Invalid Credentials")
                console.error(err)
            }
        }

        const handleSignUp = async ()=>{
            // const SignupvalidatorError = validate(firstName,lastName,emailid,password);

            // if(SignupvalidatorError){
            // setError(SignupvalidatorError);
            // return  
            // }

            try{
            setError("")
            const res = await axios.post(BASE_URL+"/signup",{firstName,lastName,emailid,password},{withCredentials:true})
            console.log(res)
            dispatch(addUser(res?.data?.data));
            return navigate("/profile")
            }catch(err){
            setError(err?.response?.data?.message || "Invalid SignUp Data")
                console.error(err)
            }
        }

        const handleLoginandSignUp = ()=>{
            setisLoginForm(!isLoginForm)
        }

        

        return(
            <div className="min-h-screen flex justify-center items-center bg-linear-to-br from-black via-slate-950 to-black relative overflow-hidden px-4">
            <div className=" items-center card card-dash bg-base-300 w-125 border border-white/10 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/40">
            <div className="card-body ">
                <h2 className="card-title text-2xl pb-2">{isLoginForm ? "Login" : "SignUp"}</h2>
                { !isLoginForm && ( 
                <>
                <input className=" w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30
                outline-none transition-all duration-300 text-white placeholder:text-gray-500 mb-3"
                type="text"
                placeholder="FirstName"
                value={firstName}
                onChange={(e)=>setFirstName(e.target.value)}
                />
                <input className=" w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30
                outline-none transition-all duration-300 text-white placeholder:text-gray-500 mb-3"
                type="text"
                placeholder="LastName"
                value={lastName}
                onChange={(e)=>setLastName(e.target.value)}
                />
                </>
                )}
                <input className=" w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30
                outline-none transition-all duration-300 text-white placeholder:text-gray-500 mb-3"
                type="text"
                placeholder="Email"
                value={emailid}
                onChange={(e)=>setEmailid(e.target.value)}
                />
                <input className=" w-90 p-4 rounded-xl bg-white/5 border border-white/10 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30
                outline-none transition-all duration-300 text-white placeholder:text-gray-500 mb-3"
                type="password" 
                placeholder="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
                {error && (<p className="text-red-400 text-sm mb-5 text-center">{error}</p>)}
                <div className="card-actions pt-3 pb-3">
                <motion.button className="w-full bg-violet-600 hover:bg-violet-500 transition-all duration-300 text-white font-semibold
                text-lg py-4 rounded-xl shadow-lg hover:shadow-violet-500/40" whileHover={{scale:1.02,y: -2}} whileTap={{scale:0.98 }}
                transition={{type:"spring", stiffness:400, damping:10}}onClick={isLoginForm ? handleLogin : handleSignUp}>{isLoginForm ? "Login":"Sign Up"}</motion.button>
                <p className="text-center text-gray-500 text-sm mt-2 ">
                    Build connections with developers 🚀
                </p>
                </div>
                <p  className="text-center text-gray-500 text-sm mt-2 cursor-pointer" onClick={handleLoginandSignUp}>
                    {isLoginForm ? "New User? Signup here" : "Existing User? Login here"}
                </p>
            </div>
            </div>
            </div>
        )
    }

    export default Login;