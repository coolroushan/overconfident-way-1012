import { Box, Flex, Grid, Text,Button, Heading, Image, Checkbox } from '@chakra-ui/react'
import React, { useContext } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useEffect, useState} from "react";
import { useSearchParams } from "react-router-dom"
import axios from "axios";
import { FetchingContext } from '../context/FetchingContextProvider';
const getData=(page,filter)=>{
  return axios.get(`https://wicked-teal-seal.cyclic.app/${filter}?_limit=9&_page=${page}`)
}

const AllOffer = () => {
    const [data, setData]=useState([])
    const [loading, setLoading]=useState(true)
    let [searchParam, setSearchParam] = useSearchParams();
    const intPage = Number(searchParam.get("page"));
    const [page, setPage] = useState(intPage || 1)
    const {filter, flight, hotelsoffers, Holidaysffers,clear}=useContext(FetchingContext)
    useEffect(() => {
        setSearchParam({ page: page , filter: filter});
      }, [page, filter]);

    const fetchData=async(page,filter)=>{
        try {
            setLoading(true)
          const res=await getData(page,filter)
          setData(res)
          setLoading(false)
          console.log(res)
        } catch (error) {
          console.log(error)
        }
      }
      useEffect(()=>{
        fetchData(page,filter)
      }, [page,filter])
      if(loading){
        return <Heading>Loading...</Heading>
      }
  return (
    <Box bg='#f2f2f2'>
        <Navbar/>

        <Flex justifyContent='space-between' margin='auto' width='95%' pt='80px' mb='30px' >
            <Box width='21%' boxShadow='lg' pl='16px' pr='18px' pt='20px' height='250px'>
              <Flex justifyContent='space-between' align='center' mb='20px' >
                <Text as='b' fontSize='xl'>FILTERS</Text>
                <Text onClick={clear} cursor='pointer' as='b' color='blue.500' fontSize='sm'>CLEAR ALL</Text>
              </Flex>
              
              <Text textAlign='left' pl='8px' fontSize='md' mb='5px'>Categories</Text>
              
              <Box width='50%'>
              <Checkbox size='md' colorScheme='green' onChange={flight}  >Fights (12)</Checkbox>
              <br />
              <Checkbox size='md' colorScheme='green' onChange={hotelsoffers} >Hotels (12)</Checkbox>
              <br />
              <Checkbox size='md' colorScheme='green'onChange={Holidaysffers} >Holidays (7)</Checkbox>


              </Box>
            </Box>
            <Grid width='76%' gridTemplateColumns='repeat(3, 1fr)' rowGap='48px'>
            {data.data.map((item)=>(
                <Box bgGradient= 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'>
                  <Box width='90%' height='180px'  margin='auto' >
                  <Image width='100%' borderRadius='10px' height='180px' src={item.img}/>
                  </Box>
                   <Box height='100px'>
                   <Text textAlign='left' pl='16px' pr='10px' fontSize='lg' pt='3px' pb='2px'>{item.title}</Text>
                   <hr border= '3px solid red' width='30px' />
                   <Text  textAlign='left' pl='16px' pr='10px' fontSize='sm'>{item.desc}</Text>
                   </Box>
                   
                   <Button mt='8px' ml='135px' colorScheme='blue' size='xs' >{item.book}</Button>
                </Box>
                
            ))}
            </Grid> 

            
        </Flex>
        
        <Button mb='25px' ml='230px' colorScheme='red' size='xs' onClick={() => setPage(page - 1)}>Prev</Button>
      <Button mb='25px' ml='10px' colorScheme='teal' size='xs' disabled>{page}</Button>
      <Button mb='25px' ml='10px' colorScheme='red' size='xs' onClick={() => setPage(page + 1)} _disabled={page==3}>Next</Button>
        <Footer/>
    </Box>
  )
}

export default AllOffer
