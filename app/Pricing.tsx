import {Box, Button, Flex, Heading, Text, Stack, StackProps, HStack} from '@chakra-ui/react';
import {CheckCircleIcon} from '@chakra-ui/icons'

const ListItem=(props:StackProps)=>{
    const {children,...rest} = props;
    return(
        <HStack as='li' spacing='20px' {...rest} alignItems="start">
            <CheckCircleIcon w='22px' h='22px' color='#6B46C1'/>
            <Text>{children}</Text>
        </HStack>
    )
}

export function Pricing(){

    return(
        <Box mx='6'>
            <Box maxW='994px' margin='auto' mt='-256px' borderRadius='12px' overflow='hidden' boxShadow='lg'>
            <Flex direction={["column","column","row"]}>

                <Box bg='#F0EAFB' p='60px' textAlign='center'>
                    
                    <Text fontSize='24px' fontWeight='800'>Premium PRO</Text>
                    <Heading as='h3' fontSize={['5xl','5xl','6xl']} fontWeight='800' mt='16px'>$320</Heading>
                    <Text color='#171923' fontSize='18px' fontWeight='500' mt='8px'>billed just once</Text>
                    <Button size='lg' colorScheme='purple' w={['auto','282px','282px']} mt='24px' >Get Started</Button>
                </Box>

                <Box p={['32px','32px','60px']} fontSize='18px' bg='white'>
                    <Text textAlign='left'>
                        Access these features when you get this pricing package for your business.
                    </Text>
                    <Stack as='ul' mt='30px'>
                        <ListItem>International calling and messaging API</ListItem>
                        <ListItem>Additional phone numbers</ListItem>
                        <ListItem>Automated messages via Zapier</ListItem>
                        <ListItem>24/7 support and consulting</ListItem>
                    </Stack>
                </Box>

            </Flex>
        </Box>
        </Box>
    )
}