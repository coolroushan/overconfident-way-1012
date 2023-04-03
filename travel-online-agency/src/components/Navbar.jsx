import React, { useContext } from "react";
import { Box,Image, Flex, Center,Button,Text , Select,} from "@chakra-ui/react"
import { Link,NavLink } from "react-router-dom"
import { AuthContext } from "../context/AuthContextProvider";



const Navbar=()=>{
    const {isAuth,logout}=useContext(AuthContext)
    const activestyle = { color: "#008cff" , borderBottomWidth: 3,
    borderBottomColor: '#008cff' };
  const deactivestyle = { textDecoration: "none", color: "teal" };
 
    return (
        
        <Flex pt='2px' height='60px' justifyContent='space-between' pr='40px' pl='40px' width='100%' bg='#FDFEFE'  position='fixed' margin='auto'
         >
            <Box width='60px'>
                <Link to="/">
                <Image src='./travel-logo.png' alt='Logo' width='70px'/>
                </Link>
            </Box>
            <Flex pl='15px' justifyContent='space-between' width='750px'>
            <Box>
                <NavLink to='/flights' style={({ isActive }) => {
              return isActive ? activestyle : deactivestyle;
            }}>
                <Center>
                <Image width='30px' src="./flight.png"/>
                
                </Center>
                 <span>Flights</span>
              </NavLink>
                </Box>
                <Box>
                <NavLink  to='/hotels' style={({ isActive }) => {
              return isActive ? activestyle : deactivestyle;
            }}>
                <Center>
                <Image width='30px' src="./hotel.png"/>
                </Center>
                 
                 <span>Hotels</span>
              </NavLink>
                </Box>
                <Box>
                <NavLink to='/homestays' style={({ isActive }) => {
              return isActive ? activestyle : deactivestyle;
            }}>
                <Center>
                <Image width='30px' src="./house.png"/>
                </Center>
                 
                 <span>HomeStays</span>
              </NavLink>
                </Box>
                <Box>
                <NavLink to='/trains' style={({ isActive }) => {
              return isActive ? activestyle : deactivestyle;
            }}>
                <Center>
                <Image width='30px' src="./train.png"/>
                </Center>
                 
                 <span>Trains</span>
              </NavLink>
                </Box>
                <Box>
                <NavLink to='/buses' style={({ isActive }) => {
              return isActive ? activestyle : deactivestyle;
            }}>
                <Center>
                <Image width='30px' src="./bus.png"/>
                </Center>
                 
                 <span>Buses</span>
              </NavLink>
                </Box>
                <Box>
                <NavLink to='/cabs' style={({ isActive }) => {
              return isActive ? activestyle : deactivestyle;
            }}>
                <Center>
                <Image width='30px' src="./cab.png"/>
                </Center>
                 
                 <span>Cabs</span>
              </NavLink>
                </Box>
                <Box>
                <NavLink to='/forex' style={({ isActive }) => {
              return isActive ? activestyle : deactivestyle;
            }}>
                <Center>
                <Image width='30px' src="./forex.png"/>
                </Center>
                 
                 <span>Forex</span>
              </NavLink>
                </Box>
                <Box>
                <NavLink to='/activities' style={({ isActive }) => {
              return isActive ? activestyle : deactivestyle;
            }}>
                <Center>
                <Image width='30px' src="./activity.png"/>
                </Center>
                 
                 <span>Activities</span>
              </NavLink>
                </Box>
               
            </Flex>
            <Flex pl='10px' justifyContent='space-between' width='320px'>
                <Box display='flex' justifyContent='space-between' width='130px'>
                    
                    <Center>
                        {isAuth ? <Button onClick={logout} colorScheme='red' mt='1px' size='40px' pb='3px' pl='5px' pr='5px'>Logout</Button> : <Link to='/login'>
                    <Button colorScheme='blue' size='40px' pb='3px' pl='5px' pr='5px'>Login</Button>
                    </Link>}
                    
                    </Center>
                    
                    
                    <Center>
                      {isAuth ? <Image width='35px' borderRadius='50%' src='./profile.jpeg'/> : <Link to='/signup'>
                    <Button colorScheme='blue' size='40px' pb='3px' pr='5px' pl='5px'>Signup</Button>
                    </Link>}
                    
                    </Center>
                    
                   
                </Box>
                <Box pt='4px'>
                    <Text fontSize='sm'>Country</Text>
                    <Center fontSize='xs'> 
                    <select name="country">
                        <option value='india'>India
                        </option>
                        <option value="england">England</option>
                        <option value="australia">Australia</option>
                        <option value="sri-lanka">Sri Lanka</option>
                    </select>
                    </Center>
                </Box>
                <Box pt='4px'>
                <Text fontSize='sm'>Language</Text>
                    <Center fontSize='xs'>
                    <select name="language">
                        <option value='english'>English
                        </option>
                        <option value="Hindi">Hindi</option>
                        
                    </select>
                    </Center>
                </Box>
            </Flex>
        </Flex>
        
    )
}
export default Navbar;