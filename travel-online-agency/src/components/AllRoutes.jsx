import {Routes, Route} from "react-router-dom";
import HomePage from "../pages/HomePage";
import SignupCard from "../pages/SignupCard";
const AllRoutes=()=>{
    return (
        <div>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/login' element={<SignupCard/>}/>
                <Route path='/'/>
                <Route path='/'/>
                <Route path='/'/>
            </Routes>
        </div>
    )
}
export default AllRoutes;