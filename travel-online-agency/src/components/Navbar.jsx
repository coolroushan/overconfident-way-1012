import { Box,Image, Flex, Center,Button,Text , Select,} from "@chakra-ui/react"
import { Link } from "react-router-dom"



const Navbar=()=>{
    return (
        <Flex justifyContent='space-between' width='90%' margin='auto' border='1px solid yellow'>
            <Box width='70px' border='2px solid red'>
                <Link to="/">
                <Image src='./travel-logo.png' alt='Logo' width='70px'/>
                </Link>
            </Box>
            <Flex justifyContent='space-between' width='700px' border='2px solid red'>
            <Box>
                <Link>
                <Center>
                <Image width='35px' src="./House.png"/>
                </Center>
                 
                 <span>HomeStays</span>
              </Link>
                </Box>
                <Box>
                <Link>
                <Center>
                <Image width='35px' src="./House.png"/>
                </Center>
                 
                 <span>HomeStays</span>
              </Link>
                </Box>
                <Box>
                <Link>
                <Center>
                <Image width='35px' src="./House.png"/>
                </Center>
                 
                 <span>HomeStays</span>
              </Link>
                </Box>
                <Box>
                <Link>
                <Center>
                <Image width='35px' src="./House.png"/>
                </Center>
                 
                 <span>HomeStays</span>
              </Link>
                </Box>
                <Box>
                <Link>
                <Center>
                <Image width='35px' src="./House.png"/>
                </Center>
                 
                 <span>HomeStays</span>
              </Link>
                </Box>
                <Box>
                <Link>
                <Center>
                <Image width='35px' src="./House.png"/>
                </Center>
                 
                 <span>HomeStays</span>
              </Link>
                </Box>
                <Box>
                <Link>
                <Center>
                <Image width='35px' src="./House.png"/>
                </Center>
                 
                 <span>HomeStays</span>
              </Link>
                </Box>
                <Box>
                <Link>
                <Center>
                <Image width='35px' src="./House.png"/>
                </Center>
                 
                 <span>HomeStays</span>
              </Link>
                </Box>
               
            </Flex>
            <Flex justifyContent='space-between' width='310px'>
                <Box display='flex' justifyContent='space-between' width='140px'>
                    <Center>
                    <Button colorScheme='blue' size='40px' p='5px'>Login</Button>
                    </Center>
                    <Center>
                    <Button colorScheme='blue' size='40px' p='5px'>Signup</Button>
                    </Center>
                   
                </Box>
                <Box>
                    <Text fontSize='xs'>Country</Text>
                    <Center>
                    <select name="country">
                        <option value='india'>India
                        </option>
                        <option value="england">England</option>
                        <option value="australia">Australia</option>
                        <option value="sri-lanka">Sri Lanka</option>
                    </select>
                    </Center>
                </Box>
                <Box>
                <Text fontSize='xs'>Language</Text>
                    <Center>
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