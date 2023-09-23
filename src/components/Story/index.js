/* eslint-disable prettier/prettier */
import React from 'react';
import {Touchable, Cover, Box, Text} from '..';

const Story = () => {
  return (
    <Touchable hasPadding onPress={() => alert('test')}
        background=" black"
        radius="10px"
        height="190px"
        spacing="0px 10px 0px"
        width="150px"
    >
      <Cover width="100%" height="100%" image="https://static.ndmais.com.br/2023/02/margot.jpeg" />
    </Touchable>
  );
};

export default Story;
