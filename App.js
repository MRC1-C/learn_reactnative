import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screens, tabs } from "./src/navigations";
import { Purplerose1, Purplerose2 } from "./src/constants";
import {
  useFonts,
  Quicksand_700Bold,
  Quicksand_500Medium,
} from "@expo-google-fonts/quicksand";
import SvgUri from "react-native-svg-uri";
import cameraIcon from "./src/image/camera.png";
import { Image, Text, View } from "react-native";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const CartIcon = ({ navigation }) => {
  return (
    <View onTouchEnd={() => navigation.navigate("Cart")}>
      <AntDesign
        name="shoppingcart"
        size={22}
        color={Purplerose2}
        style={{ marginRight: 5 }}
      />
      <Badge
        value={2}
        containerStyle={{ position: "absolute", top: -6, right: -5 }}
        badgeStyle={{ backgroundColor: "red" }}
      />
    </View>
  );
};

const TabMain = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {tabs.map((item) => (
        <Tab.Screen
          key={item.name}
          name={item.name}
          component={item.component}
          options={{
            tabBarIcon: ({ focused, color }) =>
              item.name == "Camera" ? (
                <View
                  style={{
                    width: "50%",
                    aspectRatio: 9 / 8,
                    top: -4,
                    backgroundColor: Purplerose1,
                    borderRadius: 25,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    style={{ width: "60%", height: "60%" }}
                    source={cameraIcon}
                    alt="camera"
                  />
                </View>
              ) : (
                <SvgUri source={item.icon} fill={focused ? color : "gray"} />
              ),
            tabBarLabelStyle: {
              textTransform: "none",
              fontSize: item.name == "Camera" ? 0 : 10,
              fontFamily: "Quicksand_700Bold",
            },
            tabBarActiveTintColor: Purplerose2,
            tabBarInactiveTintColor: "gray",
            headerShown: true,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default function App() {
  let [fontsLoaded] = useFonts({ Quicksand_700Bold, Quicksand_500Medium });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="main">
          <Stack.Screen
            name="main"
            component={TabMain}
            options={{ headerShown: false }}
          />
          {screens.map((sc) => (
            <Stack.Screen
              key={sc.name}
              name={sc.name}
              component={sc.component}
              options={{ headerShown: true, headerTintColor: Purplerose2 }}
            />
          ))}
          {/* {screensTransparent.map((sc) => (
            <Stack.Screen
              key={sc.name}
              name={sc.name}
              component={sc.component}
              options={{
                headerShown: true,
                headerTransparent: true,
                headerTitle: "",
                headerTintColor: Purplerose2,
              }}
            />
          ))} */}
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
