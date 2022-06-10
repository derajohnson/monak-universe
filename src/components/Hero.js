import React from 'react';
import {
  Box,
  Flex,
  Link,
  Center,
  Text,
  Image,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import Form from './Form';

import MailchimpSubscribe from 'react-mailchimp-subscribe';
import {motion} from 'framer-motion';

import Navbar from './Navbar';

import './Hero.css';

import astronaut from '../assets/astronaut.png';

const Hero = () => {
  return (
    <Box>
      <Flex>
        <Box w="15%" display={{base: 'none', lg: 'block'}}>
          <Flex flexDirection="column" justifyContent="space-between" h="90vh">
            <Box>
              <Box>
                <Link
                  href="https://open.spotify.com/artist/7d8xWmjn4YwNJ9ei4sWmJP"
                  isExternal
                >
                  <i className="fa-brands fa-spotify fa-2xl" />
                </Link>
              </Box>
            </Box>
            <Box>
              <Box>
                <Link
                  href="https://music.apple.com/us/artist/monak/1608080108"
                  isExternal
                >
                  <i className="fa-solid fa-music fa-2xl" />
                </Link>
              </Box>
            </Box>

            <Box>
              <Box>
                <Link href="https://soundcloud.com/monak-official" isExternal>
                  <i className="fa-brands fa-soundcloud fa-2xl" />
                </Link>
              </Box>
            </Box>
            <Box>
              <Box>
                <Link
                  href="https://www.instagram.com/monak.universe/"
                  isExternal
                >
                  <i className="fa-brands fa-instagram fa-2xl" />
                </Link>
              </Box>
            </Box>
            <Box>
              <Box>
                <Link href="https://discord.com/invite/VUFykyqy5z" isExternal>
                  <i className="fa-brands fa-discord fa-2xl" />
                </Link>
              </Box>
            </Box>
            <Box>
              <Box>
                <Link href="https://twitter.com/MonakOfficial" isExternal>
                  <i className="fa-brands fa-twitter fa-2xl" />
                </Link>
              </Box>
            </Box>
          </Flex>

        </Box>

        <Box w={{base: '100%', lg: '80%'}}>
          <Box>
            <Navbar />


          </Box>
          <Flex
            justifyContent="space-between"
            alignItems="center"
            flexDirection={{base: 'column', lg: 'row'}}
            h="90vh"
          >
            <Box alignSelf="center" mr={{base: '0', lg: '20'}}>
              <Text
                fontSize="5xl"
                fontWeight="bold"
                textAlign="center"
                className="brand-name"
                px="5"
              >
                MONAK UNIVERSE
              </Text>
              <Box display={{base: 'none', lg: 'block'}}>
                <Text textAlign="center" px="16" my="5">
                  Enter your email to get NFTs, latests releases and exclusive content.
                </Text>
                {/* form goes here */}

                <MailchimpSubscribe
                  url={`https://gmail.us17.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`}
                  render={props => <Form {...props} />}
                />
              </Box>

              <Box display={{base: 'none', lg: 'block'}}>
                <Center>
                  <Link
                    href="mailto:monak.universe@gmail.com?subject=Booking Request"
                    textDecoration="underline"
                    my="10"
                    px="5"
                    py="2"
                  >
                    BOOKING REQUEST
                  </Link>

                </Center>
              </Box>
            </Box>

            <motion.div
              initial={{y: -50}}
              animate={{y: 40}}
              transition={{
                repeat: Infinity,
                repeatType: 'reverse',
                duration: 2,
                repeatDelay: 0.1,
              }}
            >
              <Image src={astronaut} />
            </motion.div>
            <Box alignSelf="center">
              <Box display={{base: 'block', lg: 'none'}}>
                <Text textAlign="center" px={{base: '4', lg: '16'}} my="5">
                  Enter your email to get NFTs, latests releases and exclusive content.
                </Text>
                <MailchimpSubscribe
                  url={`https://gmail.us17.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`}
                  render={props => <Form {...props} />}
                />
                <Center>
                  <Link
                    href="mailto:monak.universe@gmail.com?subject=Booking Request"
                    textDecoration="underline"
                    my="10"
                    px="5"
                    py="2"
                  >
                    BOOKING REQUEST
                  </Link>

                </Center>
              </Box>
            </Box>
          </Flex>
        </Box>

      </Flex>
      <Center
        w="100%"
        display={{base: 'block', lg: 'none'}}
        mt={{base: '24', sm: '44', md: '56'}}
        mb="5"
      >
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <GridItem>
            <Center>
              <Link
                href="https://open.spotify.com/artist/7d8xWmjn4YwNJ9ei4sWmJP"
                isExternal
              >
                <i className="fa-brands fa-spotify fa-2xl" />
              </Link>
            </Center>
          </GridItem>
          <GridItem>
            <Center>
              <Link
                href="https://music.apple.com/us/artist/monak/1608080108"
                isExternal
              >
                <i className="fa-solid fa-music fa-2xl" />
              </Link>
            </Center>
          </GridItem>

          <GridItem>
            <Center>
              <Link href="https://soundcloud.com/monak-official" isExternal>
                <i className="fa-brands fa-soundcloud fa-2xl" />
              </Link>
            </Center>
          </GridItem>
          <GridItem>
            <Center>
              <Link href="https://www.instagram.com/monak.universe/" isExternal>
                <i className="fa-brands fa-instagram fa-2xl" />
              </Link>
            </Center>
          </GridItem>
          <Center>
            <Box>
              <Link href="https://discord.com/invite/VUFykyqy5z" isExternal>
                <i className="fa-brands fa-discord fa-2xl" />
              </Link>
            </Box>
          </Center>
          <Center>
            <Box>
              <Link href="https://twitter.com/MonakOfficial" isExternal>
                <i className="fa-brands fa-twitter fa-2xl" />
              </Link>
            </Box>
          </Center>
        </Grid>

      </Center>

    </Box>
  );
};

export default Hero;
