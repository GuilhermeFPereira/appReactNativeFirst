/* eslint-disable prettier/prettier */
import React from 'react';

import {Box, Spacer, Text, Title, Button, Input} from '../../components';

import { StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native'; // uma maneira alternativa

const SignUp = () => {

  const  {navigate, goBack } = useNavigation();

  return (
    <>
    <StatusBar barStyle="dark-content" />
    <Box background="light" justify="center" align="center" hasPadding>
      <Title bold>Create New Account</Title>
      <Spacer/>
      <Text>Enter your details below:</Text>

      <Spacer size="50px" />

      <Input placeholder="Name" />
      <Spacer/>
      <Input placeholder="E-mail" />
      <Spacer/>
      <Input placeholder="Password" secureTextEntry />

      <Spacer size="50px" />

      <Button block onPress={() => navigate('Feed')} >
        <Text color="light" >Create New Account</Text>
      </Button>


      <Spacer size="20px" />
      <Text underline onPress={() => goBack()} >Back to Home</Text>
    </Box>
    </>
  );
};

export default SignUp;
