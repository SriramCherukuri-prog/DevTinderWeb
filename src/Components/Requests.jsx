import axios from "axios";
import { BASE_URL } from "../utils/constants";
import {useEffect } from "react"
import { useDispatch , useSelector} from "react-redux";
import { addRequests } from "../utils/requestSlice";
import {motion} from "motion/react"


const Requests = () => {

     const dispatch = useDispatch()
     const requests = useSelector((store)=>store.requests)


  const reviewRequest = async (status,_id)=>{
    try{
 
      const res = axios.post(BASE_URL+"/request/review/" +status+ "/" + _id, {},{withCredentials:true})
      console.log(res)

    }catch(err){
      console.error(err)
    }
  }


  const fetchRequests = async ()=>{
    try{
         
          const res = await axios.get(BASE_URL+"/user/requests/received",{withCredentials:true})
          dispatch(addRequests(res?.data?.data))
   
    }catch(err){
      console.error(err.message)
    }

  }

  useEffect(()=>{
    fetchRequests()
    reviewRequest()
  },[])

if(!requests) return
  if(requests.length === 0){
        return <h1 className=" flex justify-center items-center text-gray-400 text-2xl mt-32">
            No Requests Found 🚀
        </h1>
  }


  return (
    
    <div className="min-h-screen bg-linear-to-br from-black via-slate-950 to-black px-6 py-12"> 
    <h1 className="text-white text-2xl  text-center mb-1">Connection Requests</h1>   
     {
      requests.map((req)=>{
        const {_id,firstName,lastName,photoUrl,age,gender,about} = req.fromUserId
        return(
          <div className=" w-full max-w-3xl mx-auto p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-violet-500/40
              hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-300 flex items-center justify-between gap-6 mb-5 " key={_id    }>
              <img alt="photo" className="w-24  h-24 rounded-2xl object-cover border  border-white/10"  src={photoUrl}/>
              <div className="flex flex-col justify-center gap-2 flex-1">
                <h2 className="text-2xl font-semibold text-white">{firstName+ " " + lastName}</h2>
                  {age && gender &&( <p className=" text-gray-400 mt-1">{age}, {gender}</p>)}
                <p className="text-gray-300 mt-3 max-w-xl leading-6 ">{about}</p>
                <div className="flex gap-4">
                <motion.button className="w-30 h-15 bg-indigo-500 hover:bg-green-500 transition-all duration-300 text-white font-semibold
                text-lg py-4 rounded-lg shadow-lg hover:shadow-violet-500/40" whileHover={{scale:1.02,y: -2}} whileTap={{scale:0.98 }}
                transition={{type:"spring", stiffness:400, damping:10}}
                onClick={()=>{reviewRequest("accepted",req._id)}}>
                Accept</motion.button>
                <motion.button className="w-30 h-15 bg-violet-600 hover:bg-red-500  transition-all duration-300 text-white font-semibold
                text-lg py-4 rounded-lg shadow-lg hover:shadow-violet-500/40" whileHover={{scale:1.02,y: -2}} whileTap={{scale:0.98 }}
                transition={{type:"spring", stiffness:400, damping:10}} 
                onClick={()=>{reviewRequest("rejected",req._id)}}>
                Reject</motion.button>
                <img className="w-30 h-20 relative left-40 bottom-12" src="src\Images\request_img.png" alt="request_image"/>
                </div>
              </div>
            
          </div>  
        )
      })
     }

    </div>
  )

}

export default Requests