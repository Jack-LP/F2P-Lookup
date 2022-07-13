import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import FeaturedCard from './FeaturedCard';

const Featured = () => {
  return (
    <Flex direction='column' gap='4' w='100%'>
      <Heading as='h1'>Free-to-play Games for PC and Browser</Heading>
      <Flex justify='space-between'>
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
      </Flex>
    </Flex>
  );
};

export default Featured;
