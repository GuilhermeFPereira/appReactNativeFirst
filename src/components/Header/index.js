/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView } from 'react-native';
import {Box, Title, Touchable} from '../../components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../../styles/theme.json';

const Header = ({title}) => {
  return (
    <Box fluid height="100px" justify="center" border={`1px solid ${colors.muted}50`} >
        <SafeAreaView style={{
            flexDirection: 'row',
        }} >
        <Touchable
        width="80px"
        justify="center"
         align="center"
         onPress={() => alert('test')}>

            <Icon name="menu" size={20} color="#000" />

        </Touchable>
        <Box align="center" justify="center" >
            <Title>{title}</Title>
        </Box>
        <Touchable  width="80px" />
        </SafeAreaView>
    </Box>
  );
};

export default Header;
