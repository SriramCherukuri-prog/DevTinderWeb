import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";


const Connections = () => {

  const dispatch = useDispatch()
  const userConnections = useSelector((store)=>store.connections)

  const fetchConnections = async () => {
    try{
       const res = await axios.get(BASE_URL+"/user/connections",{withCredentials:true}
       );
       
       dispatch(addConnections(res?.data?.data))

    }catch(err){
      console.error(err.message)
    }
  }

  useEffect(()=>{
    fetchConnections()
  },[])

  if(!userConnections) return
  if(userConnections.length === 0){
        return <h1 className=" flex justify-center items-center text-gray-400 text-2xl mt-32">
            No Connections Found 🚀
        </h1>
  }
  

  return (
    
    <div className="min-h-screen bg-linear-to-br from-black via-slate-950 to-black px-6 py-12"> 
    <h1 className="text-white text-2xl  text-center mb-1">Connections Page</h1>   
     {
      userConnections.map((connection)=>{
        const {_id,firstName,lastName,photoUrl,age,gender,about} = connection
        return(
          <div className=" w-full max-w-4xl mx-auto p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-violet-500/40
              hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-300 flex items-center justify-between gap-6 mb-5" key={_id}>
              <img alt="photo" className="w-24  h-24 rounded-2xl object-cover border  border-white/10"  src={photoUrl}/>
              <div className="flex flex-col justify-center gap-2 flex-1">
                <h2 className="text-2xl font-semibold text-white">{firstName+ " " + lastName}</h2>
                  {age && gender &&( <p className=" text-gray-400 mt-1">{age}, {gender}</p>)}
                  <p className="text-gray-300 mt-3 max-w-xl leading-6 ">{about}</p>
              </div>
            
          </div>  
        )
      })
     }

    </div>
  )
}

export default Connections