import axios from "axios"
import { BASE_URL } from "../utils/constants"
import { useDispatch,useSelector } from "react-redux"
import {addFeed} from "../utils/feedSlice"
import { useEffect } from "react"
import UserCard from "./UserCard"


const Feed = ()=>{

    const feed = useSelector((store)=>store.feed)
         console.log(feed)
    const dispatch = useDispatch()
  
    const getFeed = async ()=>{
    try{
        const res = await axios.get(BASE_URL+"/user/feed",{withCredentials:true})
   
       console.log(res.data.data)
        //to update data  to store
        dispatch(addFeed(res.data.data))
    }
    catch(err){
        console.error(err)
    }
}
   useEffect(()=>{
    getFeed()
   },[])

   //If feed is not there means
     if (!feed || feed.length === 0) {
    return <h1>No Feed Found</h1>;
  }


    return(
      
        <div className="flex justify-center my-20">
            <UserCard user={feed[0]}/>
        </div>
    )

}

export default Feed