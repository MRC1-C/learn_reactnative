import { Image, Button } from "native-base";
import { View, Text, Dimensions } from "react-native";
import SvgUri from "react-native-svg-uri";
import like from "../image/likeimage.svg";
import comment from "../image/commentimage.svg";
import share from "../image/shareimage.svg";
import SliderImageComponents from "./SliderImageComponents";
import { Padding } from "../constants";

export default function PostComponents(props) {
  return (
    <View
      style={{ backgroundColor: "white", marginBottom: 10, paddingBottom: 10 }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 15,
          paddingTop: Padding,
          paddingLeft: Padding,
          paddingRight: Padding,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 5,
          }}
        >
          <Image
            size={50}
            alt="fallback text"
            borderRadius={100}
            source={{
              uri: "https://pbs.twimg.com/media/E8-zubHVcAA5Z1V.jpg:large",
            }}
          />
          <View style={{ marginLeft: 14 }}>
            <Text
              style={{
                fontSize: 16,
                marginBottom: 8,
                fontFamily: "Quicksand_700Bold",
              }}
            >
              artlynnnn
            </Text>
          </View>
        </View>
      </View>
      <Text
        style={{
          fontSize: 16,
          fontFamily: "Quicksand_500Medium",
          paddingLeft: Padding,
          paddingRight: Padding,
          paddingBottom: Padding,
        }}
      >
        {props.content}
      </Text>
      <View onTouchEnd={() => props.navigation.navigate("SocialDetail")}>
        <SliderImageComponents
          imgs={[
            {
              uri: "https://icdn.dantri.com.vn/thumb_w/770/2022/02/28/rose-2-1646032942820.png",
            },
            {
              uri: "https://icdn.dantri.com.vn/thumb_w/770/2022/02/28/rose-2-1646032942820.png",
            },
            {
              uri: "https://icdn.dantri.com.vn/thumb_w/770/2022/02/28/rose-2-1646032942820.png",
            },
            {
              uri: "https://icdn.dantri.com.vn/thumb_w/770/2022/02/28/rose-2-1646032942820.png",
            },
          ]}
        />
      </View>
      <View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 5,
            paddingLeft: Padding,
            paddingRight: Padding,
            paddingTop: 5,
          }}
        >
          <Button onPress={() => console.log("first")} variant="ghost">
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                marginRight: 14,
              }}
            >
              <SvgUri width={14} fill="#444444" source={like} />
              <Text
                style={{
                  color: "#444444",
                  fontFamily: "Quicksand_500Medium",
                  marginLeft: 11,
                }}
              >
                1,5k
              </Text>
            </View>
          </Button>
          <Button onPress={() => console.log("first")} variant="ghost">
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                marginRight: 14,
              }}
            >
              <SvgUri width={14} fill="#444444" source={comment} />
              <Text
                style={{
                  color: "#444444",
                  fontFamily: "Quicksand_500Medium",
                  marginLeft: 11,
                }}
              >
                1,5k
              </Text>
            </View>
          </Button>
          <Button variant="ghost">
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                marginRight: 14,
              }}
            >
              <SvgUri width={14} fill="#444444" source={share} />
              <Text
                style={{
                  color: "#444444",
                  fontFamily: "Quicksand_500Medium",
                  marginLeft: 11,
                }}
              >
                1,5k
              </Text>
            </View>
          </Button>
        </View>
      </View>
    </View>
  );
}
