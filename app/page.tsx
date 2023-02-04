"use client";

import { Box, Stack, Container} from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import Header from './Header'
import { Pricing } from './Pricing';
import Features from './Feature';

export default function Home() {

  return (
    <div>
      <Header/>
      <Pricing/>
      <Features/>
    </div>
  )
}
