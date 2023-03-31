import { Box, Grid, GridItem,Image,Text, VStack,Flex,} from '@chakra-ui/react';

import { FaFacebook, FaTwitter } from 'react-icons/fa';
import {Link} from 'react-router-dom'




const Footer=()=>{
    return (
    <Box bg='#f2f2f2'>
          <Grid templateColumns='repeat(3, 1fr)' pl='10px' gap={6}  width='90%' margin='auto' bg='white' p='15px' mb='50px'>
              <Box display='flex'>
                <Box>
                  <Image src='https://promos.makemytrip.com/store/GoaDT.JPG' borderRadius='50px'/>
                </Box>
                <Box>
                  <Text textAlign='left' pl='10px'>Goa</Text>
                  <Text fontSize='12px'  textAlign='left' pl='10px'>Hotels, Budget Hotels, Resorts, Best Hotels, North Goa, Villas</Text>
                </Box>
              </Box>

              <Box display='flex'>
                <Box>
                  <Image src='https://promos.makemytrip.com/store/DelhiDT.JPG' borderRadius='50px'/>
                </Box>
                <Box>
                  <Text textAlign='left' pl='10px'>Delhi</Text>
                  <Text fontSize='12px'  textAlign='left' pl='10px'>Hotels, Budget Hotels, Resorts, Best Hotels, Near IGI Airport</Text>
                </Box>
              </Box>

              <Box display='flex'>
                <Box>
                  <Image src='https://promos.makemytrip.com/store/BangaloreDT.JPG' borderRadius='50px'/>
                </Box>
                <Box>
                  <Text textAlign='left' pl='10px'>Bangalore</Text>
                  <Text fontSize='12px'  textAlign='left' pl='10px'>Hotels, Budget Hotels, Resorts,Near Airport, Guhantara Resort</Text>
                </Box>
              </Box>

              <Box display='flex'>
                <Box>
                  <Image src='https://promos.makemytrip.com/images/50x50-Ooty-23052019.png' borderRadius='50px'/>
                </Box>  
                <Box>
                  <Text textAlign='left' pl='10px'>Ooty</Text>
                  <Text fontSize='12px'  textAlign='left' pl='10px'>Hotels, Resorts, Cottges, Budget Hotels, Homestay</Text>
                </Box>
              </Box>

              <Box display='flex'>
                <Box>
                  <Image src='https://promos.makemytrip.com/store/MumbaiDT.JPG' borderRadius='50px'/>
                </Box>
                <Box>
                  <Text textAlign='left' pl='10px'>Mumbai</Text>
                  <Text fontSize='12px'  textAlign='left' pl='10px'>Hotels, Budget Hotels, Resorts, Couple Hotels, Near Mumbai Airport</Text>
                </Box>
              </Box>

              <Box display='flex'>
                <Box>
                  <Image src='https://promos.makemytrip.com/images/50x50-Shimla-23052019.png' borderRadius='50px'/>
                </Box>
                <Box>
                  <Text textAlign='left' pl='10px'>Shimla</Text>
                  <Text fontSize='12px'  textAlign='left' pl='10px'>Hotels, Budget Hotels, Best Hotels, Resorts, Near Mall Road</Text>
                </Box>
               </Box> 

              <Box display='flex'>
                <Box>
                  <Image src='https://promos.makemytrip.com/store/JaipurDT.JPG' borderRadius='50px'/>
                </Box>
                <Box>
                  <Text textAlign='left' pl='10px'>Jaipur</Text>
                  <Text fontSize='12px'  textAlign='left' pl='10px'>Hotels, Resorts, Budget Hotels, Best Hotels, Near Railway Station</Text>
                </Box>              
              </Box>

              <Box display='flex'>
                <Box>
                  <Image src='https://promos.makemytrip.com/images/50x50-Manali-23052019.png' borderRadius='50px'/>
                </Box>
                <Box>
                  <Text textAlign='left' pl='10px'>Manali</Text>
                  <Text fontSize='12px'  textAlign='left' pl='10px'>Hotels, Resorts, Budget Hotels, Best Hotels, Near Mall Road</Text>
                </Box>
              </Box>

              <Box display='flex'>
                <Box>
                  <Image src='https://promos.makemytrip.com/images/50x50-Other-23052019.png' borderRadius='50px'/>
                </Box>
                <Box>
                  <Text textAlign='left' pl='10px'>Others</Text>
                  <Text fontSize='12px'  textAlign='left' pl='10px'>Puri Hotels, OYO Delhi, Alleppey Houseboat, Mahabaleshwar Hotels,</Text>
                </Box>
              </Box>
          </Grid>

          <Box width='90%' margin='auto'>
            <Text textAlign='left' mb='7px' fontWeight='semibold' fontSize='14px'>PRODUCT OFFERING</Text>
            <Text textAlign='left' mb='7px' fontSize='12px'>
            Flights, International Flights, Charter Flights, Hotels, International Hotels, Homestays and Villas, Activities,
             Holidays In India, International Holidays, Book Hotels From UAE, myBiz for Corporate Travel, Book Online Cabs, Book
              Bus Tickets, Book Train Tickets, Cheap Tickets to India, Book Flights From US, Book Flights From UAE, Trip Planner,
               Gift Cards, Trip Money, Trip Ideas, Travel Blog, PNR Status, MakeMyTrip Advertising Solutions, One Way Cab
            </Text>
          </Box> 

          <Grid templateColumns='repeat(3,1fr)' gap={10}  width='90%' margin='auto' mt='30px' >
 <GridItem>
     <Text fontWeight='semibold' fontSize='xl' textAlign='left' mb='15px'>Why MakeMyTrip?</Text>
     <Text fontSize='12px' textAlign='justify'>Established in 2000, MakeMyTrip has since positioned itself as one of the leading companies,
       providing great offers, competitive airfares, exclusive discounts, and a seamless online booking 
       experience to many of its customers. The experience of booking your flight tickets, hotel stay, and
        holiday package through our desktop site or mobile app can be done with complete ease and no hassles
         at all. We also deliver amazing offers, such as Instant Discounts, Fare Calendar, MyRewardsProgram,
          MyWallet, and many more while updating them from time to time to better suit our customers’ evolving 
          needs and demands.</Text>
 </GridItem>
 <GridItem>
     <Text fontWeight='semibold' fontSize='xl' textAlign='left' mb='15px'>Booking Flights with MakeMyTrip</Text>
     <Text  fontSize='12px' textAlign='justify'>At MakeMyTrip, you can find the best of deals and cheap air tickets to any place you want
       by booking your tickets on our website or app. Being India’s leading website for hotel, flight,
        and holiday bookings, MakeMyTrip helps you book flight tickets that are affordable and customized
         to your convenience. With customer satisfaction being our ultimate goal, we also have a 24/7 dedicated
          helpline to cater to our customer’s queries and concerns. Serving over 5 million happy customers, we at
           MakeMyTrip are glad to fulfill the dreams of folks who need a quick and easy means to find air tickets.
            You can get a hold of the cheapest flight of your choice today while also enjoying the other available
             options for your travel needs with us.</Text>
 </GridItem>
 <GridItem>
     <Text fontWeight='semibold' fontSize='xl' textAlign='left' mb='15px'>Domestic Flights with MakeMyTrip</Text>
     <Text  fontSize='12px' textAlign='justify'>
     MakeMyTrip is India's leading player for flight bookings, and have a dominant position in the domestic flights sector. With the cheapest fare guarantee, experience great value at the lowest price. Instant notifications ensure current flight status, instant fare drops, amazing discounts, instant refunds and rebook options, price comparisons and many more interesting features.
     </Text>
 </GridItem>
          </Grid>

          <Flex justifyContent='space-between' bg='#000' pl='62px' pr='62px'  pt='60px' pb='60px' mt='35px'>
    <Box display='flex' width='100px' justifyContent='space-between'>
    <a href="https://www.facebook.com/makemytrip/"><FaFacebook color='white' size='30px'/></a>
    <a href="https://www.twitter.com/makemytrip/"><FaTwitter color='white' size='30px'/></a>
    
    </Box>
    <VStack color='whiteAlpha.900' >
       <Text as='b' >© 2023 MAKEMYTRIP PVT. LTD.</Text> 
       <Text>Country India USA UAE</Text>
    </VStack>
          </Flex>
    </Box>
    )
}
export default Footer;