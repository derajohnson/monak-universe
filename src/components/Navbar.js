import React, {useEffect, useState} from 'react';
import {Box, Flex} from '@chakra-ui/react';
import {Howl} from 'howler';

const Navbar = () => {
  const musicTracks = [
    {
      name: 'Far Away',
      src: '../songs/Far Away.mp3',
    },
    {
      name: 'She Says',
      src: '../songs/She Says.mp3',
    },
    {
      name: 'So Long',
      src: '../songs/So Long.mp3',
    },
  ];

  const [trackIndex, setTrackIndex] = useState (0);
  const handleClickPrevious = () => {
    setTrackIndex (
      currentTrack =>
        currentTrack === 0 ? musicTracks.length - 1 : currentTrack - 1
    );
  };

  const handleClickNext = () => {
    setTrackIndex (
      currentTrack =>
        currentTrack < musicTracks.length - 1 ? currentTrack + 1 : 0
    );
  };

  let sound = new Howl ({
    src: musicTracks[trackIndex].src,
    autoplay: true,
    loop: true,
    onend: function () {
      handleClickNext ();
    },
  });

  useEffect (() => {
    window.addEventListener ('load', () => {
      sound.play ();
    });
  }, []);

  return (
    <Box>
      <Flex justifyContent="flex-end">
        <Box mr="8">
          <Flex>
            <Box onClick={handleClickPrevious} cursor="pointer">
              <i className="fa-solid fa-backward-step fa-lg" />
            </Box>
            <Box mx="6">{musicTracks[trackIndex].name}</Box>
            <Box onClick={handleClickNext} cursor="pointer">
              <i className="fa-solid fa-forward-step fa-lg" />
            </Box>
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
