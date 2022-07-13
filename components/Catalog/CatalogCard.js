import React from 'react';
import Image from 'next/image';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  VStack,
  Tag,
  Flex,
} from '@chakra-ui/react';

const CatalogCard = () => {
  return (
    <Box maxW='290px'>
      <VStack>
        <Flex>
          <Heading size='sm'>Game Name</Heading>
          <Tag size='sm' colorScheme='blue'>
            Free
          </Tag>
        </Flex>
      </VStack>
    </Box>
  );
};

export default CatalogCard;
