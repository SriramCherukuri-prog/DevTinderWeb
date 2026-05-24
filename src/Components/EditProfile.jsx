import { useState } from "react";
import axios from "axios"
import UserCard from "./UserCard";
import { BASE_URL } from "../utils/constants";
import { useDispatch , useSelector} from "react-redux";
import { addUser } from "../utils/userSlice";
import { toast } from "react-toastify";
import { motion } from "motion/react"


const EditProfile = ({userData})=>{
    // const {firstName,lastName,photoUrl,age,gender,about} = userData
    const [firstName, setFirstName] = useState(userData.firstName)
    const [lastName, setLasttName] = useState(userData.lastName)
    const [photoUrl,setphotoUrl] = useState(userData.photoUrl)
    const [age, setAge] = useState(userData.age)
    const [gender, setGender] = useState(userData.gender)
    const [about, setAbout] = useState(userData.about)
    const [error,setError] = useState("")

    console.log(userData)
    const dispatch = useDispatch()
    const user = useSelector((store)=>store.user)
    console.log(user)
    //api call
    const saveProfile = async ()=>{

        try{
        const res = await axios.patch(BASE_URL+"/profile/edit",{firstName,lastName,photoUrl,age,gender,about},{withCredentials:true});
        //update the store with edited data
        dispatch(addUser(res?.data?.data))

        toast.success("Profile saved successfully",{
            position:"top-center",
            autoClose:2000,
           

        });


        }catch(err){
          setError(
                err?.response?.data || 
                err.message
           )
           toast.error("Failed to save profile")
        }
    }



        return( <>
           <div className="flex justify-center">
            <div className="flex justify-center relative left-[-95]  top-[-70.5px] items-center">
            <div className=" items-center card card-dash bg-base-300 w-130 top-20 ">
            <div className="card-body">
                <h2 className="text-4xl font-bold mb-8 text-white">Edit Profile</h2>
                <div >
                    <label className="form-control w-full max-w-xs my-2 ">
                        <span className="text-sm font-medium text-white">FirstName:</span>
                            <input className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/40
                            outline-none transition-all duration-300 text-white mt-2 mb-5"
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e)=>setFirstName(e.target.value)}
                            />
                     </label>
                      <label className="form-control w-full max-w-xs my-2">
                        <span className="text-sm font-medium text-white">LastName:</span>
                            <input className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/40
                            outline-none transition-all duration-300 text-white mt-2 mb-5" 
                            type="text" 
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e)=>setLasttName(e.target.value)}
                            />
                     </label>
                       <label className="form-control w-full max-w-xs my-2 ">
                        <span className="text-sm font-medium text-white">Photo URL:</span>
                            <input className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/40
                            outline-none transition-all duration-300 text-white mt-2 mb-5" 
                            type="text" 
                            placeholder="Photo URL"
                            value={photoUrl}
                            onChange={(e)=>setphotoUrl(e.target.value)}
                            />
                     </label>
                        <label className="form-control w-full max-w-xs my-2 ">
                            <span className="text-sm font-medium text-white">Age:</span>
                            <input className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/40
                            outline-none transition-all duration-300 text-white mt-2 mb-5" 
                            type="number" 
                            placeholder="Age"
                            value={age}
                            onChange={(e)=>setAge(Number(e.target.value))}
                            />
                     </label>
                      <label className="form-control w-full max-w-xs my-2">
                        <span className="text-sm font-medium text-white">Gender:</span>
                            <select className="select select-bordered w-full bg-white/5 text-white border-white/5 focus:border-violet-500
                              focus:outline-none mt-2 mb-6"
                            value={gender}
                            onChange={(e)=>setGender(e.target.value)}
                            >
                            <option value=""   disabled className="bg-slate-900 text-white">Select Gender</option>
                              <option value="male" className="bg-slate-900  text-white">Male</option>
                              <option value="female" className="bg-slate-900 text-white">Female</option>
                              <option value="others" className="bg-slate-900 text-white ">Others</option>
                            </select>
                     </label>
                        <label className="form-control w-full max-w-xs my-2">
                            <span className="text-sm font-medium text-white">About:</span>
                           <textarea className=" w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/40
                             outline-none transition-all duration-300 text-white mt-2 mb-5 resize-none"rows={4}
                             placeholder="Tell something about yourself..."
                             value={about} 
                             onChange={(e)=>setAbout(e.target.value)}>
                            </textarea> 
                     </label>
                       
                    </div>
                    <div className="card-actions pt-3 pb-3 ">
                    <motion.button className="w-full bg-violet-600 hover:bg-violet-500 transition-all duration-300 text-white font-semibold
                        text-lg py-4 rounded-xl shadow-lg hover:shadow-violet-500/40" whileHover={{scale:1.02,y: -2}} whileTap={{scale:0.98 }}
                        transition={{type:"spring", stiffness:400, damping:10}}
                        onClick={saveProfile}>Save Profile</motion.button>
                    </div>
            </div>
            </div>
            </div>
            <div className="z-10 flex justify-center items-center relative left-[70] -top-17.5 ml-28">
            <UserCard user={{firstName,lastName,photoUrl,age,gender,about}}/>
            </div>
            </div>
            </>
        )
    }


export default EditProfile