import { motion } from "motion/react"
const UserCard = ({ user }) => {

  const {
    firstName,
    lastName,
    gender,
    photoUrl,
    about,
    age
  } = user;

  return (

    <div className="flex justify-center relative w-90 h-[600px] top-[-70px]  rounded-3xl  overflow-hidden shadow-2xl" >

      <div>

        {/* Background Image */}
        <img
          src={photoUrl}
          alt="profile"
          className="w-full h-full object-cover"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

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

          <motion.button className="btn btn-circle btn-error text-2xl" whileHover={{scale:2}} whileTap={{scale:5}}>
            ✕
          </motion.button>

          <motion.button className="btn btn-circle btn-success text-2xl" whileHover={{scale:2}} whileTap={{scale:5}}>
            ❤
          </motion.button>

        </div>

      </div>

    </div>
  );
};

export default UserCard;