import Head from 'next/head';
import axios from 'axios';
import { Container } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import Featured from '../components/Featured/Featured';
import Catalog from '../components/Catalog/Catalog';

export default function Home() {
  // const options = {
  //   method: 'GET',
  //   url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
  //   headers: {
  //     'X-RapidAPI-Key': '8ebe34813bmsh6e275fbf0f07504p1b7a10jsne2f604a9e8cb',
  //     'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
  //   },
  // };

  // axios
  //   .request(options)
  //   .then(function (response) {
  //     console.log(response.data);
  //   })
  //   .catch(function (error) {
  //     console.error(error);
  //   });

  return (
    <>
      <Head>
        <title>F2P Lookup</title>
        <meta
          name='description'
          content='Directory of free-to-play games on major platforms'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <Container
        maxW='65%'
        mt='2'
        display='flex'
        flexDirection='column'
        gap='2'
        alignItems='center'
      >
        <Featured />
        <Catalog />
      </Container>
    </>
  );
}
