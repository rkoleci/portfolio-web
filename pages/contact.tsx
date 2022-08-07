import {
  Box,
  Container,
  Text,
  Flex,
  Input,
  Button,
  Textarea,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";

export default function ContactPage() {
  return (
    <form
      action="mailto:rkoleci14@gmail.com"
      method="post"
    >
      <Container position="relative" height="80vh">
        <Box
          left="50%"
          top="10%"
          bottom="10%"
          transform="translate(-50%)"
          position="absolute"
          display="flex"
          flexDir="column"
          justifyContent="space-around"
          width="100%"
          padding="4"
        >
          <Text
            fontSize="3xl"
            color="primary.100"
            fontWeight="600"
            textAlign="center"
            mb="8"
          >
            Contact Me
          </Text>
          <Box>
            <Flex justifyContent="space-between" mb="4">
              <FormControl width="full" pr="2">
                <FormLabel
                  color="black.400"
                  fontSize="14"
                  fontWeight="600"
                  mb="1"
                >
                  Name
                </FormLabel>
                <Input
                  placeholder="What should I call you?"
                  bg="gray.200"
                  color="primary.100"
                  borderRadius="0.25rem"
                  borderColor="gray.300"
                  borderStyle="solid"
                  borderWidth="1"
                  className="contact-input"
                  padding="4px 12px"
                  fontSize="18"
                  focusBorderColor="gray.100"
                  isRequired
                  _focus={{
                    background: "white.100",
                  }}
                />
              </FormControl>
              <FormControl width="full" pl="2" isRequired>
                <FormLabel
                  color="black.400"
                  fontSize="14"
                  fontWeight="600"
                  mb="1"
                >
                  Email
                </FormLabel>
                <Input
                  placeholder="How can I reach you?"
                  bg="gray.200"
                  color="primary.100"
                  borderRadius="0.25rem"
                  borderColor="gray.300"
                  borderStyle="solid"
                  borderWidth="1"
                  className="contact-input"
                  padding="4px 12px"
                  fontSize="18"
                  focusBorderColor="gray.100"
                  _focus={{
                    background: "white.100",
                  }}
                  type="email"
                />
              </FormControl>
            </Flex>
            <FormControl mb="4" isRequired>
              <FormLabel
                color="black.400"
                fontSize="14"
                fontWeight="600"
                mb="1"
              >
                Message
              </FormLabel>
              <Textarea
                placeholder="....."
                bg="gray.200"
                color="primary.100"
                borderRadius="0.25rem"
                borderColor="gray.300"
                borderStyle="solid"
                borderWidth="1"
                className="contact-input"
                padding="4px 12px"
                fontSize="18"
                focusBorderColor="gray.100"
                rows={5}
                mb="2"
                _focus={{
                  background: "white.100",
                }}
              />
            </FormControl>
            <FormControl>
              <Button
                color="white.100"
                bg="primary.100"
                display="block"
                margin="0 auto"
                fontSize="18"
                fontWeight="600"
                borderRadius="4"
                colorScheme="blackAlpha"
                padding="10px 28px"
                mb="6"
                type="submit"
              >
                Send
              </Button>
            </FormControl>
          </Box>
          <Box>
            <Box bg="gray.500" h="2px" w="full" mb="6" />
            <Text
              color="black.400"
              fontSize="16"
              fontWeight="500"
              textAlign="center"
            >
              rkoleci14@gmail.com
            </Text>
          </Box>
        </Box>
      </Container>
    </form>
  );
}
