import { Box, Grid, GridItem,HStack,Image,Text, VStack , Heading} from '@chakra-ui/react';




const Footer=()=>{
    return (
    <Box width='90%' >
            <Grid templateColumns='repeat(3, 1fr)' pl='10px' gap={6}>
  <GridItem templateColumns='repeat(2, 1fr)' gap={6}>
  
    <Image src='https://promos.makemytrip.com/store/GoaDT.JPG' borderRadius='50px'/>
    
  
    <Text>Goa</Text>
    <Text>Hotels, Budget Hotels, Resorts, Best Hotels, North Goa, Villas</Text>
    
  </GridItem>

  <GridItem>

    <Image src='https://promos.makemytrip.com/store/DelhiDT.JPG' borderRadius='50px'/>

    <Text>Delhi</Text>
    <Text>Hotels, Budget Hotels, Resorts, Best Hotels, Near IGI Airport</Text>

  </GridItem>

  <GridItem>

    <Image src='https://promos.makemytrip.com/store/BangaloreDT.JPG' borderRadius='50px'/>

    <Text>Bangalore</Text>
    <Text>Hotels, Budget Hotels, Resorts,Near Airport, Guhantara Resort</Text>

  </GridItem>

  <GridItem>
    <Image src='https://promos.makemytrip.com/images/50x50-Ooty-23052019.png' borderRadius='50px'/>
    <Text>Ooty</Text>
    <Text>Hotels, Resorts, Cottges, Budget Hotels, Homestay</Text>
  </GridItem>
  <GridItem>
    <Image src='https://promos.makemytrip.com/store/MumbaiDT.JPG' borderRadius='50px'/>
    <Text>Mumbai</Text>
    <Text>Hotels, Budget Hotels, Resorts, Couple Hotels, Near Mumbai Airport</Text>
  </GridItem>
  <GridItem>
    <Image src='https://promos.makemytrip.com/images/50x50-Shimla-23052019.png' borderRadius='50px'/>
    <Text>Shimla</Text>
    <Text>Hotels, Budget Hotels, Best Hotels, Resorts, Near Mall Road</Text>
  </GridItem>
  <GridItem>
    <Image src='https://promos.makemytrip.com/store/JaipurDT.JPG' borderRadius='50px'/>
    <Text>Jaipur</Text>
    <Text>Hotels, Resorts, Budget Hotels, Best Hotels, Near Railway Station</Text>
  </GridItem>
  <GridItem>
    <Image src='https://promos.makemytrip.com/images/50x50-Manali-23052019.png' borderRadius='50px'/>
    <Text>Manali</Text>
    <Text>Hotels, Resorts, Budget Hotels, Best Hotels, Near Mall Road</Text>
  </GridItem>
  <GridItem>
    <Image src='https://promos.makemytrip.com/images/50x50-Other-23052019.png' borderRadius='50px'/>
    <Text>Others</Text>
    <Text>Puri Hotels, OYO Delhi, Alleppey Houseboat, Mahabaleshwar Hotels,</Text>
  </GridItem>
</Grid>
  <br />
<Text fontSize='5xl'>This is issue</Text>
</Box>
    )
}
export default Footer;