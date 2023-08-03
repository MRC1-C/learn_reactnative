import React from "react";
import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import privacyIcon from "../../image/privacy.png";
import whitepaperIcon from "../../image/whitepaper.png";
import roadmapIcon from "../../image/roadmap.png";
import logoutIcon from "../../image/logout.png";
import fbIcon from "../../image/fb.png";
import teleIcon from "../../image/tele.png";
import youtubeIcon from "../../image/youtube.png";
import twitterIcon from "../../image/twitter.png";

export default function Accout() {
  return (
    <View style={{ padding: 10 }}>
      <View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Quicksand_700Bold",
            }}
          >
            Nam Nguyen
          </Text>
          <AntDesign name="form" size={24} color="black" />
        </View>
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Quicksand_500Medium",
            color: "black",
          }}
        >
          19264535
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Quicksand_700Bold",
            color: "gray",
            paddingTop: 15,
            paddingBottom: 15,
            fontSize: 20,
          }}
        >
          Menu List
        </Text>
        <View style={{ display: "flex", gap: 10 }}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{ width: "100%", alignItems: "center" }}
          >
            <View
              style={{
                backgroundColor: "lightgray",
                width: "100%",
                borderRadius: 10,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: 10,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Image source={privacyIcon} style={{ height: 30, width: 30 }} />
                <Text
                  style={{
                    color: "black",
                    fontSize: 16,
                    fontFamily: "Quicksand_700Bold",
                    paddingLeft: 4,
                  }}
                >
                  Privacy Policy
                </Text>
              </View>
              <AntDesign name="right" size={24} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{ width: "100%", alignItems: "center" }}
          >
            <View
              style={{
                backgroundColor: "lightgray",
                width: "100%",
                borderRadius: 10,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: 10,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Image
                  source={whitepaperIcon}
                  style={{ height: 30, width: 30 }}
                />
                <Text
                  style={{
                    color: "black",
                    fontSize: 16,
                    fontFamily: "Quicksand_700Bold",
                    paddingLeft: 4,
                  }}
                >
                  White Paper
                </Text>
              </View>
              <AntDesign name="right" size={24} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{ width: "100%", alignItems: "center" }}
          >
            <View
              style={{
                backgroundColor: "lightgray",
                width: "100%",
                borderRadius: 10,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: 10,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Image source={roadmapIcon} style={{ height: 30, width: 30 }} />
                <Text
                  style={{
                    color: "black",
                    fontSize: 16,
                    fontFamily: "Quicksand_700Bold",
                    paddingLeft: 4,
                  }}
                >
                  Road Map
                </Text>
              </View>
              <AntDesign name="right" size={24} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{ width: "100%", alignItems: "center" }}
          >
            <View
              style={{
                backgroundColor: "lightgray",
                width: "100%",
                borderRadius: 10,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: 10,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Image source={logoutIcon} style={{ height: 30, width: 30 }} />
                <Text
                  style={{
                    color: "black",
                    fontSize: 16,
                    fontFamily: "Quicksand_700Bold",
                    paddingLeft: 4,
                  }}
                >
                  Logout
                </Text>
              </View>
              {/* <AntDesign name="right" size={24} color="black" /> */}
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Quicksand_700Bold",
            color: "gray",
            paddingTop: 15,
            paddingBottom: 15,
            fontSize: 20,
          }}
        >
          Follow Us On
        </Text>
        <View style={{ dislay: "flex", flexDirection: "row", gap: 10 }}>
          <Image source={fbIcon} style={{ height: 30, width: 30 }} />
          <Image source={teleIcon} style={{ height: 30, width: 30 }} />
          <Image source={youtubeIcon} style={{ height: 30, width: 30 }} />
          <Image
            source={twitterIcon}
            style={{ height: 30, width: 30, resizeMode: "contain" }}
          />
        </View>
      </View>
    </View>
  );
}
