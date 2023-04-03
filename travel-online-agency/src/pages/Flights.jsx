import React, { useContext } from "react";
import {Box, Flex, Image, Text, Grid,Button, Input, Checkbox, Select} from "@chakra-ui/react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar";
import { FetchingContext } from "../context/FetchingContextProvider";
import { Link } from "react-router-dom";
import { useEffect, useState} from "react";
import { useSearchParams } from "react-router-dom"
import axios from "axios";


const getData=(page,filter)=>{
    return axios.get(`https://wicked-teal-seal.cyclic.app/${filter}?_limit=4&_page=${page}`)
  }

const Flights=()=>{
    const [data, setData]=useState([])
   
   let [searchParam, setSearchParam] = useSearchParams();
    const intPage = Number(searchParam.get("page"));
    const [page, setPage] = useState(intPage || 1)
    const {filter, flight, hotelsoffers, Holidaysffers,clear,color}=useContext(FetchingContext)
    useEffect(() => {
        setSearchParam({ page: page , filter: filter});
      }, [page, filter]);

    const fetchData=async(page,filter)=>{
        try {
          const res=await getData(page,filter)
          setData(res.data)
          console.log(res.data)
        } catch (error) {
          console.log(error)
        }
      }
      useEffect(()=>{
        fetchData(page,filter)
      }, [page,filter])

    return (
        <Box bg='#f2f2f2'>
            <Navbar/>
            <Box pt='90px' width='90%' bg='white' margin='auto'>
              <Flex pl='30px' mb='20px'>
              <Checkbox mr='10px'><Text>One Way</Text></Checkbox>
              <Checkbox mr='10px'><Text>Round Trip</Text></Checkbox>
              <Checkbox><Text>Multi City</Text></Checkbox>
              </Flex>
              <Flex pl='30px' mb='20px'>
                <Input type='search' placeholder='from' />
                <Input type='search' placeholder='to' />
                <Select  placeholder='Select Class'>
                <option value='option1'>Economy</option>
                <option value='option2'>Premium Economy</option>
                <option value='option3'>Business</option>
                </Select>
              <Input type='date' />
              <Input type='date' />

              </Flex>
              <Flex mb='20px'>
                <Flex pl='30px' mb='15px'>
                  <Text width='70px'>Select A Fare Type</Text>
                  <Button colorScheme='blue' variant='ghost' h='50px' size='xs'><Checkbox mr='10px'><Text>Regular Fares</Text></Checkbox></Button>
                  <Button colorScheme='blue' variant='ghost' h='50px'size='xs'><Checkbox mr='10px'><Text>Force Fares</Text></Checkbox></Button>
                  <Button colorScheme='blue' variant='ghost' h='50px'size='xs'><Checkbox mr='10px'><Text>Student Fares</Text></Checkbox></Button>
                  <Button colorScheme='blue' variant='ghost' h='50px'size='xs'><Checkbox mr='10px'><Text>Senior Citizen Fares</Text></Checkbox></Button>
                  <Button colorScheme='blue' variant='ghost' h='50px' size='xs'><Checkbox><Text>Doctor Fares</Text></Checkbox></Button>
                </Flex>
                <Flex> <Text>Trending Searches:</Text>
                <Box>
                <Button colorScheme='blue' variant='ghost' size='sm'><Text>Delhi {'->'} Paris</Text></Button>
                
                <Button colorScheme='blue' variant='ghost' size='sm'><Text>Mumbai {'->'} Bangkok</Text></Button>
                </Box>
                </Flex>
              </Flex>
             
            </Box>
            <Box width='90%' bg='white' margin='auto'>
        <Box display='flex' justifyContent='space-between'>

        
            <Flex justifyContent='space-between' width='60%' ml='30px' borderBottom='1px solid black'>
                <Box><Text as='b' fontSize='2xl'>Offers</Text></Box>
                <Box><Text fontSize='md' onClick={clear} cursor='pointer' color={color}>All Offers</Text></Box>
                <Box><Text fontSize='md' onClick={flight} cursor='pointer' color={color}>Flights</Text></Box>
                <Box><Text fontSize='md' onClick={hotelsoffers} cursor='pointer' color={color}>Hotels</Text></Box>
                <Box><Text fontSize='md' onClick={Holidaysffers} cursor='pointer' color={color}>Holidays</Text></Box>
            </Flex>
            <Box p='10px'>
                <Link to='/alloffer'><Button size='sm' colorScheme='teal' variant='ghost'>VIEW ALL {'-->'}</Button>
                </Link>
                
                <Button size='sm' colorScheme='teal' variant='outline' onClick={() => setPage(page - 1)}>{'<--'}</Button>
                <Button ml='5px' size='sm' colorScheme='teal' variant='outline' onClick={() => setPage(page + 1)}>{'-->'}</Button>
            </Box>
            </Box>
    
            
            <Grid width='95%' margin='auto' gridTemplateColumns='repeat(2, 1fr)' pb='25px' rowGap='20px' mt='15px' mb='15px'>
            {data.map((item)=>(
                <Box display='flex' justifyContent='space-between'>
                  <Box width='30%' height='150px'  margin='auto' >
                  <Image width='100%' borderRadius='10px' height='150px' src={item.img}/>
                  </Box>
                   <Box width='66%'>
                   <Text textAlign='left' pr='10px' fontSize='lg' pt='3px' pb='2px'>{item.title}</Text>
                   <Text  textAlign='left' pr='10px' fontSize='sm'>{item.desc}</Text>
                   <Button display='flex' justifyContent='left' mt='8px' colorScheme='blue' size='xs' >{item.book}</Button>
                   </Box>
                   
                   
                </Box>
                
            ))}
            </Grid>
            </Box>
            <Grid textAlign='left' templateColumns='repeat(3, 1fr)' gap='20px' width='90%' margin='auto'>
        <Flex bg='white' borderRadius='10px' p='11px'>
            <Box pr='10px'>
            <Image src='https://promos.makemytrip.com/notification/xhdpi/Vande-Flight-10072020.png'/>
            </Box>
            <Box>
            <Text>Planning to book an international flight?</Text>
            <Text color='#008cff'>Check Travel Guidelines</Text>
            </Box> 
        </Flex>
        <Flex bg='white' borderRadius='10px' p='11px'>
            <Box pr='10px'>
            <Image width='70px' src='https://promos.makemytrip.com/Growth/Images/B2C/2x/language1@2x_20210901.png'/>
            </Box>
            <Box>
            <Text pt='10px'>We are now available in हिंदी!</Text>
            <Text color='#008cff'>Change Language</Text> 
            </Box>
        </Flex>
        <Flex bg='white' borderRadius='10px' p='11px'>
            <Box pr='10px'>
            <Image width='100px' src='https://promos.makemytrip.com/notification/xhdpi/web-check-in-116x116-23062020.png'/>
            </Box>
            <Box>
            <Text>Complete your web check-in on Travel Agency in easy steps</Text>
            <Text color='#008cff' _hover='cusor' >Know More</Text>
            </Box> 
        </Flex>
        <Box></Box>
        <Box></Box>
            </Grid>
            
            <Footer/>
        </Box>
    )
}

export default Flights
