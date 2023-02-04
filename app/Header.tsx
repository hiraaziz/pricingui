import { Box,Heading, Text, Stack, Container} from '@chakra-ui/react'

export default function Header(){
    return(
        <Box as='section' mb='112px'>
            <Box  color='#F7FAFC' bg='#6B46C1' pt='90px' pb='198px' textAlign={['left','left','center']} px='32px'>
            <Heading
               fontSize={['3xl','3xl','5xl']}
               fontWeight='800'>Simple pricing for your business</Heading>
            <Text
                fontWeight='500' 
                fontSize={['lg','lg','xl']}
                pt='16px' >Plans that are carefully crafted to suit your business.</Text>
        </Box>
        </Box>
    )
}