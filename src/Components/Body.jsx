import NavBar from "./NavBar";
import { Outlet,Navigate, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useEffect } from "react";
import axios from "axios"
const Body = ()=>{

  const dispatch = useDispatch()
  const navigate = useNavigate()
  //if i have userdata in redux store no need of doing api call if user data is not in store then make api call
  //reading data from store
  const userData = useSelector((store)=>store.user)

  const fetchUser = async ()=>{
    try{
          const res = await axios.get(BASE_URL+"/profile/view",{withCredentials:true,

          }); 
          dispatch(addUser(res.data))
    }catch(err){
      if(err.status === 401){
           navigate("/login")
      }
      console.error(err)
    }

  }

  useEffect(()=>{
    if(!userData){
      fetchUser()
    }

  },[])


    return(
    <>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </>
    )
}

export default Body