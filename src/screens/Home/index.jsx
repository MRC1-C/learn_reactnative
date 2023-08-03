import React, { useState } from "react";
import {
  Image,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import background from "../../image/background.jpg";
import { Icon, Input, Pressable, Button, View } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import logo from "../../../assets/logo.png";
import boxcoinlogo from "../../image/coinbox.png";
import coinlogo from "../../image/coin.png";
import { AntDesign } from "@expo/vector-icons";
import onecoinlogo from "../../image/onecoin.png";

export default function Home() {
  const navigation = useNavigation();
  const [show, setShow] = useState(false);
  return (
    <ImageBackground
      source={background}
      style={{
        height: "100%",
        // flex: 1,
        display: "flex",
        alignItems: "center",
        gap: 20,
      }}
    >
      <View
        style={{
          backgroundColor: "#030434",
          width: "80%",
          borderRadius: 25,
          display: "flex",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontFamily: "Quicksand_700Bold",
            color: "white",
            fontSize: 16,
          }}
        >
          Balance
        </Text>
        <Input
          type={show ? "text" : "password"}
          color={"white"}
          w={"30%"}
          isDisabled={true}
          InputRightElement={
            <Pressable onPress={() => setShow(!show)}>
              <Icon
                as={
                  <MaterialIcons
                    name={show ? "visibility" : "visibility-off"}
                  />
                }
                size={5}
                mr="2"
                color="muted.400"
              />
            </Pressable>
          }
          value="1285629"
          variant="unstyled"
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <Image
          source={logo}
          alt="logo"
          style={{
            width: "60%",
            height: undefined,
            aspectRatio: 5 / 4,
            resizeMode: "contain",
          }}
        />
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontFamily: "Quicksand_700Bold",
          }}
        >
          Start Min
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          gap: 8,
          width: "100%",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          style={{ width: "100%", alignItems: "center" }}
        >
          <View
            style={{
              backgroundColor: "#030434",
              width: "80%",
              borderRadius: 25,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 15,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image source={boxcoinlogo} style={{ height: 30, width: 30 }} />
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  fontFamily: "Quicksand_700Bold",
                  paddingLeft: 4,
                }}
              >
                Earn Daily DATN Reward
              </Text>
            </View>
            <AntDesign name="right" size={24} color="white" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{ width: "100%", alignItems: "center" }}
        >
          <View
            style={{
              backgroundColor: "#030434",
              width: "80%",
              borderRadius: 25,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 15,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image source={coinlogo} style={{ height: 30, width: 30 }} />
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  fontFamily: "Quicksand_700Bold",
                  paddingLeft: 4,
                }}
              >
                Invite Friends
              </Text>
            </View>
            <AntDesign name="right" size={24} color="white" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{ width: "100%", alignItems: "center" }}
        >
          <View
            style={{
              backgroundColor: "#030434",
              width: "80%",
              borderRadius: 25,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 15,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image source={onecoinlogo} style={{ height: 30, width: 30 }} />
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  fontFamily: "Quicksand_700Bold",
                  paddingLeft: 4,
                }}
              >
                Earn DATN Coins
              </Text>
              <Text
                style={{
                  color: "yellow",
                  fontSize: 16,
                  fontFamily: "Quicksand_700Bold",
                  paddingLeft: 4,
                }}
              >
                07:58:07
              </Text>
            </View>
            <AntDesign name="right" size={24} color="white" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{ width: "100%", alignItems: "center" }}
        >
          <View
            style={{
              backgroundColor: "#030434",
              width: "80%",
              borderRadius: 25,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 15,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image source={boxcoinlogo} style={{ height: 30, width: 30 }} />
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  fontFamily: "Quicksand_700Bold",
                  paddingLeft: 4,
                }}
              >
                Hourly Reward
              </Text>
              <Text
                style={{
                  color: "yellow",
                  fontSize: 16,
                  fontFamily: "Quicksand_700Bold",
                  paddingLeft: 4,
                }}
              >
                58:32
              </Text>
            </View>
            <AntDesign name="right" size={24} color="white" />
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
