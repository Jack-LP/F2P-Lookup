import React from 'react';
import { Flex, Image } from '@chakra-ui/react';
import CatalogCard from './CatalogCard';

const Catalog = () => {
  return (
    <Flex wrap='wrap' justifyContent='space-between' gap='4'>
      <CatalogCard />
      <CatalogCard />
      <CatalogCard />
      <CatalogCard />
      <CatalogCard />
      <CatalogCard />
    </Flex>
  );
};

export default Catalog;
