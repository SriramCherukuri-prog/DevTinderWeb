import { motion } from "motion/react"
import EditProfile from "./EditProfile";
import { useSelector } from "react-redux";

const Profile = ()=>{

   const user = useSelector((store)=>store.user)

    return(
      user &&(
       
         <motion.div

            initial={{
               opacity:0
            }}

            animate={{
               opacity:1
            }}

            transition={{
               duration:0.5
            }}

         >

            <EditProfile userData={user} />

         </motion.div>
    )
   )

}

export default Profile;