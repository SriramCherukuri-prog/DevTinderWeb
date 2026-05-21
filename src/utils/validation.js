export const validate = (emailid,password) => {

   if (emailid === "" || password === "" ) {
      return "*All fields are required";
   }

   const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   if (!emailRegex.test(emailid)) {
      return "*Invalid email format";
   }
   if (password.length < 6) {
      return "*Password must be at least 6 characters";
   }

   return null;
}