export const validate = (
  emailid,
  password
) => {

   // // Signup validation only
   // if (!isLoginForm) {

   //    if (!firstName || !lastName) {
   //       return "*Please fill FirstName and LastName fields"
   //    }

   //    if (
   //       firstName.length < 3 ||
   //       lastName.length < 3
   //    ) {
   //       return "*Names should contain at least 3 characters"
   //    }
   // }

   // Common validation
   if (!emailid || !password) {
      return "*All fields are required"
   }

   const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/

   if (!emailRegex.test(emailid)) {
      return "*Invalid email format"
   }

   if (password.length < 6) {
      return "*Password must be at least 6 characters"
   }

   return null
}