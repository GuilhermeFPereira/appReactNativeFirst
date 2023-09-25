/* eslint-disable prettier/prettier */
import React from 'react';
import {Touchable, Cover, Box, Text} from '../';

import { colors } from '../../styles/theme.json';

const Story = () => {
  return (
    <Touchable onPress={() => alert('test')}
        background=" black"
        radius="10px"
        height="190px"
        spacing="0px 10px 0px"
        width="150px"
    >
      <Cover
      height="100%"
      width="100%"
        image="https://cinepop.com.br/wp-content/uploads/2021/05/henry-cavill.jpg"
        >
        <Box fluid hasPadding
        background={`${colors.dark}80`}
        justify="space-between">

           <Cover
           circle
           width="40px"
           height="40px"
           border={`1px solid ${colors.light}`}
           image="https://static.ndmais.com.br/2023/02/margot.jpeg" />

            <Box height="50px" justify="flex-end">
              <Text bold color="light" >Rodolfinho</Text>
              <Text color="light" variant="small" >2 min ago</Text>
            </Box>
        </Box>
      </Cover>
    </Touchable>
  );
};

export default Story;
