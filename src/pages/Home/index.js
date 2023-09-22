/* eslint-disable prettier/prettier */
import React from 'react';

import {Title, Text, Button, Box, Spacer} from '../../components';

const Home = () => {
  return (

    <Box  background="dark" hasPadding align="center" >

      <Box justify="center" align="center" fluid>
      <Title color="light" variant="big" bold>LOOKAPP</Title>
      <Spacer />
      <Text align="center" spacing="0px 40px" >Stay on top of the fashion world and buy your favorite looks.</Text>
      </Box>

      <Box justify="flex-end" align="center" fluid>
      <Button block>
        <Text color="light" >Sign my Account</Text>
      </Button>
      <Spacer size="20px" />
      <Text underline color="light" >Create new Account</Text>
      <Spacer size="70px"/>
      </Box>

    </Box>

  );
};

export default Home;
