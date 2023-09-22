/* eslint-disable prettier/prettier */
import React from 'react';
import {Box, ScrollView, Text} from '../../components';

const StoryList = () => {
  return (
    <Box fluid >
        <Box row
        fluid
        justify="space-between"
        height="60px"
         hasPadding
         >
         <Text bold color="dark">
         Stories
         </Text>
         <Text color="danger" underline>
            Show All
         </Text>
        </Box>
        <ScrollView horizontal
        style={{
            paddingLeft: 20,
        }}
        >
            {Array.from(Array(20))?.map(item => <Text style={{marginRight: 10}}>Story</Text>)}
        </ScrollView>

    </Box>
  );
};

export default StoryList;
