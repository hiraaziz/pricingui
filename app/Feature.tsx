import {Box, Text, Stack,HStack, Icon, StackProps} from '@chakra-ui/react';
import { features } from 'process';
import { ElementType } from 'react';
import { NoMonthlySubscription, Hastlefree, MoneyBackIcon } from '../components/Icons';

interface FeatureProps extends StackProps{
    icon:ElementType;
}
function Feature(props:FeatureProps){
    const {children,icon,...rest} = props
    return(
        <HStack spacing='24px' {...rest}>
            <Icon as={icon} boxSize='28px'/>
            <Text fontSize='18px' fontWeight='700' textAlign={['left','left','center']}>{children}</Text>
        </HStack>
    )
}

export default function Features(){
    return(
        <Box maxW='1024px' m='auto' p='60px' pb='32px'>
            <Stack direction={['column','column','row']} p='48px' spacing='40px'>
                {Feature({children:'30 days money back Guarantee',icon:MoneyBackIcon})}
                <Feature icon={Hastlefree}>No setup fees 100% hassle-free</Feature>
                <Feature icon={NoMonthlySubscription}>No monthly subscription Pay once and for all</Feature>
            </Stack>
        </Box>
    )
}

