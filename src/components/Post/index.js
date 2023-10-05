/* eslint-disable prettier/prettier */
import React from 'react';
import {Box, Text, Cover, Touchable, Spacer} from '../';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { colors } from '../../styles/theme.json';

const Post = () => {
  return (
    <Box hasPadding fluid>
      <Box row align="center">
        <Cover image="https://static.ndmais.com.br/2023/02/margot.jpeg" width="40px" height="40px" circle />
        <Box spacing="0px 0px 0px 10px" >
            <Text bold color="dark" >Magot Robbie</Text>
            <Text variant="small" >2 min ago</Text>
        </Box>
        <Touchable
        height="30px"
        width="100px"
        align="flex-end" >

            <Icon name="options" size={15} color={colors.muted} />
        </Touchable>

      </Box>
      <Cover  image="https://static.ndmais.com.br/2023/02/margot.jpeg"
      width="100%"
      height="190px"
      spacing="10px 0px"
      radius="10px"
      />
      <Box row fluid align="center">
        <Box row fluid align="center">
        {Array.from(Array(3))?.map(item=>(
      <Cover
           circle
           width="40px"
           height="40px"
           border={`1px solid ${colors.light}`}
           spacing="0px -15px 0px 0px"
           image="https://static.ndmais.com.br/2023/02/margot.jpeg"
            />
            ))}
            <Text variant="small" spacing="0px 20px">Liked by 10,098</Text>
        </Box>
        <Box row justify="flex-end">
          <Touchable width="24px" spacing="0px 15px 0px 0px" >
            <Icon name="heart" size={24} color={colors.danger} />
          </Touchable>
          <Touchable width="24px" spacing="0px 15px 0px 0px" >
            <Icon name="bubble" size={24} color={colors.muted} />
          </Touchable>
          <Touchable width="24px" >
            <Icon name="share" size={24} color={colors.muted} />
          </Touchable>
        </Box>
      </Box>
      <Spacer />
      <Text color="dark" small>
      A estrela do nome filme da Barbie, que estreia na próxima quinta-feira, Margot Robbie viralizou com foto sem maquiagem nas redes socias e foi alvo de críticas na Internet.
      </Text>
    </Box>
  );
};

export default Post;
