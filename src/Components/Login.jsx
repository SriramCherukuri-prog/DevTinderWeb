
import { useState } from "react";
import axios from "axios"
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = ()=>{
    const [emailid, setEmailid] = useState("");
    const [password, setPassword] = useState("");
    //to add data to redux store we dispatch an action
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleLogin = async ()=>{

        try{
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
            console.error(err)
        }
    }

    return(
        <div className="flex justify-center relative">
        <div className=" items-center card card-dash bg-base-300 w-125 top-38 ">
        <div className="card-body ">
            <h2 className="card-title text-2xl pb-3">Login</h2>
            <input className="p-3 border-2 w-90 rounded-md"
             type="text"
             placeholder="Email"
             value={emailid}
             onChange={(e)=>setEmailid(e.target.value)}
            />
            <input className="p-3 border-2 w-90 rounded-md" 
             type="password" 
             placeholder="Password"
             value={password}
               onChange={(e)=>setPassword(e.target.value)}
             />
            <div className="card-actions pt-3 pb-3">
               <button className="btn btn-primary text-lg w-90 rounded-md" onClick={handleLogin}>Login</button>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Login;