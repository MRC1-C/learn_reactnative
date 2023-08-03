import React, { useState } from "react";
import { View } from "react-native";
import logo from "../../../assets/logo.png";
import {
  Center,
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Text,
  Image,
  ScrollView,
} from "native-base";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const navigation = useNavigation();
  return (
    <ScrollView
      style={{
        backgroundColor: "#030434",
        height: "100%",
      }}
    >
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Center w="100%">
          <Box safeArea p="2" py="8" w="90%" maxW="290">
            <View w="100%">
              <Image
                source={logo}
                style={{
                  width: "100%",
                  height: undefined,
                  aspectRatio: 5 / 4,
                  resizeMode: "contain",
                }}
                alt="logo"
              />
            </View>
            <Heading
              size="lg"
              fontWeight="600"
              color="white"
              fontFamily={"Quicksand_700Bold"}
              _dark={{
                color: "warmGray.50",
              }}
            >
              Welcome
            </Heading>
            <Heading
              mt="1"
              _dark={{
                color: "warmGray.200",
              }}
              color="coolGray.600"
              fontFamily={"Quicksand_500Medium"}
              fontWeight="medium"
              size="xs"
            >
              {isSignIn ? "Sign in to continue!" : "Sign up to continue!"}
            </Heading>

            <VStack space={3} mt="5">
              <FormControl>
                <FormControl.Label
                  _text={{ fontFamily: "Quicksand_500Medium" }}
                >
                  Email ID or Phone Number
                </FormControl.Label>
                <Input color={"white"} />
              </FormControl>
              <FormControl>
                <FormControl.Label
                  _text={{ fontFamily: "Quicksand_500Medium" }}
                >
                  Password
                </FormControl.Label>
                <Input type="password" color={"white"} />
                {!isSignIn && (
                  <View>
                    <FormControl.Label
                      _text={{ fontFamily: "Quicksand_500Medium" }}
                    >
                      Confirm Password
                    </FormControl.Label>
                    <Input type="password" color={"white"} />
                  </View>
                )}
                <Link
                  _text={{
                    fontSize: "xs",
                    fontWeight: "500",
                    color: "indigo.500",
                    fontFamily: "Quicksand_500Medium",
                  }}
                  alignSelf="flex-end"
                  mt="1"
                >
                  Forget Password?
                </Link>
              </FormControl>
              <Button
                mt="2"
                colorScheme="indigo"
                onPress={() => navigation.navigate("main")}
                _text={{ fontFamily: "Quicksand_500Medium" }}
              >
                Sign in
              </Button>
              <HStack mt="6" justifyContent="center">
                <Text
                  fontSize="sm"
                  color="white"
                  _dark={{
                    color: "white",
                  }}
                  fontFamily={"Quicksand_500Medium"}
                >
                  {isSignIn ? "I'm a new user. " : "I'm a user. "}
                </Text>
                <Link
                  _text={{
                    color: "indigo.500",
                    fontWeight: "medium",
                    fontSize: "sm",
                    fontFamily: "Quicksand_500Medium",
                  }}
                  href="#"
                  onPress={() => setIsSignIn((prev) => !prev)}
                >
                  {isSignIn ? "Sign Up" : "Sign In"}
                </Link>
              </HStack>
            </VStack>
          </Box>
        </Center>
      </View>
    </ScrollView>
  );
};

export default Login;
