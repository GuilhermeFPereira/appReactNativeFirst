/* eslint-disable prettier/prettier */
import React from 'react';
import {Box, Text, Cover, Touchable} from '../';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { colors } from '../../styles/theme.json';

const Post = () => {
  return (
    <Box hasPadding>
      <Box row align="center">
        <Cover image="https://static.ndmais.com.br/2023/02/margot.jpeg" width="40px" height="40px" circle />
        <Box spacing="0px 0px 0px 10px" >
            <Text bold color="dark" >Rodolfim</Text>
            <Text variant="small" >2 min ago</Text>
        </Box>
        <Touchable
        height="30px"
        width="100px"
        align="flex-end" >

            <Icon name="options" size={15} color={colors.muted} />
        </Touchable>

      </Box>
    </Box>
  );
};

export default Post;
