import React, {useState, useEffect} from 'react';

import {
  Box,
  Center,
  Button,
  Input,
  InputRightElement,
  InputGroup,
  Text,
  useToast,
} from '@chakra-ui/react';

const Form = ({subscribe, status, message}) => {
  const toast = useToast ();
  const [email, setEmail] = useState ('');
  const [isLoading, setIsLoading] = useState (false);
  if (status === 'error') {
    console.error ('EMAIL ERROR:', message);
  }
  useEffect (
    () => {
      if (status === 'success') {
        setEmail ('');
        setIsLoading (false);
        toast ({
          title: 'Successful',
          description: 'You have successfully joined the waitlist!',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
      }
      if (status === 'error') {
        setEmail ('');
        setIsLoading ('');
        toast ({
          title: 'Sorry',
          description: 'Looks like you have already joined the waitlist :)',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
    },
    [status]
  );
  return (
    <Box>
      <form
        onSubmit={e => {
          e.preventDefault ();
          setIsLoading (true);
          subscribe ({EMAIL: email});
        }}
      >
        <Center>
          <InputGroup size="md" w="80%">
            <Input
              pr="6.5rem"
              type="email"
              placeholder="Email Address"
              required
              borderRadius="full"
              bg="rgba(96, 96, 96, 0.5)"
              value={email}
              onChange={e => setEmail (e.target.value)}
            />
            <InputRightElement width="6.5rem">
              {isLoading
                ? <Button
                    isLoading
                    loadingText="Joining"
                    h="1.75rem"
                    size="md"
                    className="bookings"
                    color="blackAlpha.900"
                    borderRadius="full"
                    px="8"
                    py="4"
                    type="submit"
                  >
                    Join
                  </Button>
                : <Button
                    h="1.75rem"
                    size="md"
                    className="bookings"
                    color="blackAlpha.900"
                    borderRadius="full"
                    px="8"
                    py="4"
                    type="submit"
                  >
                    Join
                  </Button>}

            </InputRightElement>
          </InputGroup>
        </Center>

      </form>

    </Box>
  );
};

export default Form;
