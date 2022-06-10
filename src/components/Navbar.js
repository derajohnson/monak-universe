import React, {useEffect, useState} from 'react';
import {Box, Flex} from '@chakra-ui/react';
import {Howl, Howler} from 'howler';
import AudioPlayer from './AudioPlayer';
import tracks from './track';
const Navbar = () => {

  return (
    <Box>
      <Flex justifyContent="flex-end">
        <Box mr="8">
          <Flex>
           
      <AudioPlayer tracks={tracks} />

          </Flex>

        </Box>
        <Box mr="4">
          <i class="fa-solid fa-volume-high fa-lg" />
          <Box pos="relative" top="-12" right="-24">
            <Box pos="absolute" top="2" right="14">
              <i className="fa-solid fa-music fa-xs" />
            </Box>
            <Box pos="absolute" top="6" right="20">
              <i className="fa-solid fa-music fa-xs" />
            </Box>
            <Box pos="absolute" top="10" right="14">
              <i className="fa-solid fa-music fa-xs" />
            </Box>
          </Box>

        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
