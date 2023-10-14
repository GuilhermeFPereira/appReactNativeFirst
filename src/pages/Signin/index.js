/* eslint-disable prettier/prettier */
import React from 'react';

import {Box, Spacer, Text, Title, Button, Input} from '../../components';
import { StatusBar } from 'react-native';


const SignIp = ({ navigation: {navigate} }) => {
  return (
    <>
    <StatusBar barStyle="light" />
    <Box background="light" justify="center" align="center" hasPadding>


      <Title bold variant="big">LOOKAPP</Title>
      <Spacer size="50px" />
      <Title bold>SignIn my account.</Title>
      <Spacer/>

      <Spacer size="50px" />

      <Input placeholder="E-mail" />
      <Spacer/>
      <Input placeholder="Password" secureTextEntry />

      <Spacer size="50px" />

      <Button block onPress={() => navigate('Feed')} >
        <Text color="light" >Sign my Account</Text>
      </Button>


      <Spacer size="20px" />
      <Text underline onPress={()=> navigate('SignUp')} >Create new Account</Text>
    </Box>
    </>
  );
};

export default SignIp;
