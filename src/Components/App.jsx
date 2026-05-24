
import Body from "./Body";
import Login from "./Login";
import Profile from "./Profile";
import Feed from "./Feed"
import { BrowserRouter, Routes,Route } from "react-router-dom"
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Connections from "./Connections";
import Requests from "./Requests";


function App() {
 

  return (
    <>
    <Provider store={appStore}>
    <BrowserRouter basename="/">
     <Routes>
      <Route path="/" element={<Body/>}>
       <Route path="/" element={<Feed/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/profile" element={<Profile/>}/> 
        <Route path="/connections" element={<Connections/>}/> 
        <Route path="/requests" element={<Requests/>}/> 
        </Route>
     </Routes>
    </BrowserRouter>
    <ToastContainer />
    </Provider>

    </>

  )
}

export default App
