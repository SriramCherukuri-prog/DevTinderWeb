import { motion } from "motion/react"
import axios from "axios"
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";

const UserCard = ({ user }) => {

  const dispatch = useDispatch()

  const {
    _id,
    firstName,
    lastName,
    gender,
    photoUrl,
    about,
    age
  } = user;


  const handleSendRequests = async (status,_id)=>{
    try{
      const res =await  axios.post(BASE_URL+"/request/send/"+ status + "/"+ _id,{},{withCredentials:true})
      console.log(res)
      dispatch(removeUserFromFeed(_id))
    }catch(err){
      console.error(err.message)
     
    }
  
  }


  return (

    <div className="w-full
max-w-sm
sm:max-w-md
mx-auto
rounded-3xl
overflow-hidden
shadow-2xl
relative
" >

      <div>

        {/* Background Image */}
       {photoUrl ?( <img
          src={photoUrl}
          alt="profile"
          className="w-full h-125 object-cover"
        />):(
             <div className="w-full h-full bg-slate-700 flex items-center justify-center text-white">
              No Image
            </div>
        )}

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent"></div>

        {/* User Details */}
        <div className="absolute bottom-28 left-5 text-white">

          <h1 className="text-4xl font-bold">
            {firstName} {lastName}
          </h1>

          {
            age && gender && (
              <p className="text-xl mt-1">
                {age}, {gender}
              </p>
            )
          }

          <p className="mt-3 text-sm w-72 text-gray-200">
            {about}
          </p>

        </div>
        

        {/* Action Buttons */}
        <div className="absolute bottom-5 w-full flex justify-center gap-16" >

          <motion.button className="btn btn-circle btn-error text-2xl" whileHover={{scale:2}} whileTap={{scale:5}} 
          onClick={()=>{handleSendRequests("ignored",_id)}}> 
            ✕
          </motion.button>

          <motion.button className="btn btn-circle btn-success text-2xl" whileHover={{scale:2}} whileTap={{scale:5}}  
           onClick={()=>{handleSendRequests("interested",_id)}}>
            ❤
          </motion.button>

        </div>

      </div>

    </div>
  );
};

export default UserCard;