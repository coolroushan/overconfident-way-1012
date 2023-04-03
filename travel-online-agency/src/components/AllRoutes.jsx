import {Routes, Route} from "react-router-dom";
import Activities from "../pages/Activities";
import AllOffer from "../pages/AllOffer";
import Buses from "../pages/Buses";
import Cabs from "../pages/Cabs";
import Flights from "../pages/Flights";
import Forex from "../pages/Forex";
import HomePage from "../pages/HomePage";
import HomeStays from "../pages/HomeStays";
import Hotels from "../pages/Hotels";
import Login from "../pages/Login";
import SignupCard from "../pages/SignupCard";
import Trains from "../pages/Trains";
const AllRoutes=()=>{
    return (
        <div>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/signup' element={<SignupCard/>}/>
                <Route path='/flights' element={<Flights/>} />
                <Route path='/hotels' element={<Hotels/>} />
                <Route path='/homestays' element={<HomeStays/>} />
                <Route path='/trains' element={<Trains/>} />
                <Route path='/buses' element={<Buses/>} />
                <Route path='/cabs' element={<Cabs/>} />
                <Route path='/forex' element={<Forex/>} />
                <Route path='/activities' element={<Activities/>} />
                <Route path="/alloffer" element={<AllOffer/>} />
            </Routes>
        </div>
    )
}
export default AllRoutes;