import { useEffect, useState } from "react";
import axios from "axios"
import UserCard from "./UserCard";
import { BASE_URL } from "../utils/constants";
import { useDispatch , useSelector} from "react-redux";
import { addUser } from "../utils/userSlice";
import { toast } from "react-toastify";
import { motion } from "motion/react"


const EditProfile = ({userData})=>{
    // const {firstName,lastName,photoUrl,age,gender,about} = userData
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [photoUrl,setphotoUrl] = useState("")
    const [age, setAge] = useState("")
    const [gender, setGender] = useState("")
    const [about, setAbout] = useState("")
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
           toast.error("Failed to save profile",{
              position:"top-center",
            autoClose:2000,
           })
        }
    }

    useEffect(()=>{
        if(userData){
        setFirstName(userData.firstName || "")
        setLastName(userData.lastName || "")
        setphotoUrl(userData.photoUrl || "")
        setAge(userData.age || "")
         setGender(userData.gender || "")
        setAbout(userData.about || "")
    }
}, [userData])
        



        return (
  <>
    <div className="min-h-screen px-4 py-10">
      
      {/* MAIN CONTAINER */}
      <div
        className="max-w-7xl mx-auto
        flex flex-col xl:flex-row
        items-center justify-center
        gap-10 xl:gap-16"
      >

        {/* EDIT PROFILE CARD */}
        <div
          className="w-full max-w-2xl
          card card-dash
          bg-base-300 shadow-2xl
          border border-white/10"
        >
          <div className="card-body p-5 sm:p-8">

            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white text-center">
              Edit Profile
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {/* FIRST NAME */}
              <label className="form-control w-full">
                <span className="text-sm font-medium text-white mb-2">
                  First Name
                </span>

                <input
                  className="w-full p-3 sm:p-4 rounded-xl
                  bg-white/5 border border-white/10
                  focus:border-violet-500
                  focus:ring-2 focus:ring-violet-500/40
                  outline-none transition-all duration-300 text-white"
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </label>

              {/* LAST NAME */}
              <label className="form-control w-full">
                <span className="text-sm font-medium text-white mb-2">
                  Last Name
                </span>

                <input
                  className="w-full p-3 sm:p-4 rounded-xl
                  bg-white/5 border border-white/10
                  focus:border-violet-500
                  focus:ring-2 focus:ring-violet-500/40
                  outline-none transition-all duration-300 text-white"
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </label>

              {/* PHOTO URL */}
              <label className="form-control w-full md:col-span-2">
                <span className="text-sm font-medium text-white mb-2">
                  Photo URL
                </span>

                <input
                  className="w-full p-3 sm:p-4 rounded-xl
                  bg-white/5 border border-white/10
                  focus:border-violet-500
                  focus:ring-2 focus:ring-violet-500/40
                  outline-none transition-all duration-300 text-white"
                  type="text"
                  placeholder="Photo URL"
                  value={photoUrl}
                  onChange={(e) => setphotoUrl(e.target.value)}
                />
              </label>

              {/* AGE */}
              <label className="form-control w-full">
                <span className="text-sm font-medium text-white mb-2">
                  Age
                </span>

                <input
                  className="w-full p-3 sm:p-4 rounded-xl
                  bg-white/5 border border-white/10
                  focus:border-violet-500
                  focus:ring-2 focus:ring-violet-500/40
                  outline-none transition-all duration-300 text-white"
                  type="number"
                  placeholder="Age"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                />
              </label>

              {/* GENDER */}
              <label className="form-control w-full">
                <span className="text-sm font-medium text-white mb-2">
                  Gender
                </span>

                <select
                  className="select select-bordered w-full
                  bg-white/5 text-white border-white/10
                  focus:border-violet-500 focus:outline-none"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option
                    value=""
                    disabled
                    className="bg-slate-900 text-white"
                  >
                    Select Gender
                  </option>

                  <option
                    value="male"
                    className="bg-slate-900 text-white"
                  >
                    Male
                  </option>

                  <option
                    value="female"
                    className="bg-slate-900 text-white"
                  >
                    Female
                  </option>

                  <option
                    value="others"
                    className="bg-slate-900 text-white"
                  >
                    Others
                  </option>
                </select>
              </label>

              {/* ABOUT */}
              <label className="form-control w-full md:col-span-2">
                <span className="text-sm font-medium text-white mb-2">
                  About
                </span>

                <textarea
                  className="w-full p-3 sm:p-4 rounded-xl
                  bg-white/5 border border-white/10
                  focus:border-violet-500
                  focus:ring-2 focus:ring-violet-500/40
                  outline-none transition-all duration-300
                  text-white resize-none"
                  rows={4}
                  placeholder="Tell something about yourself..."
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                />
              </label>
            </div>

            {/* BUTTON */}
            <div className="card-actions pt-6">
              <motion.button
                className="w-full bg-violet-600 hover:bg-violet-500
                transition-all duration-300 text-white font-semibold
                text-base sm:text-lg py-3 sm:py-4 rounded-xl
                shadow-lg hover:shadow-violet-500/40"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                }}
                onClick={saveProfile}
              >
                Save Profile
              </motion.button>
            </div>
          </div>
        </div>

        {/* USER CARD PREVIEW */}
        <div className="w-full flex justify-center">
          <UserCard
            user={{
              firstName,
              lastName,
              photoUrl,
              age,
              gender,
              about,
            }}
          />
        </div>
      </div>
    </div>
  </>
);
}


export default EditProfile