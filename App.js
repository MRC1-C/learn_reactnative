import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screens, tabs } from "./src/navigations";
import { Purplerose1, Purplerose2 } from "./src/constants";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  useFonts,
  Quicksand_700Bold,
  Quicksand_500Medium,
} from "@expo-google-fonts/quicksand";
import { Image, Text, View, SafeAreaView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Login from "./src/screens/Login";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabMain = () => {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        // headerStyle: { backgroundColor: "#030434" },
      }}
    >
      {tabs.map((item) => (
        <Tab.Screen
          key={item.name}
          name={item.name}
          component={item.component}
          options={{
            tabBarIcon: ({ focused, color }) => (
              <AntDesign
                name={item.icon}
                size={24}
                color={focused ? color : "gray"}
              />
              // <SvgUri source={item.icon} fill={focused ? color : "gray"} />
            ),
            tabBarLabelStyle: {
              textTransform: "none",
              fontSize: 10,
              fontFamily: "Quicksand_700Bold",
            },
            tabBarStyle: { backgroundColor: "#030434" },
            tabBarActiveTintColor: "white",
            tabBarInactiveTintColor: "gray",
            headerShown: true,
            header: ({ route }) => (
              <View
                style={{
                  marginTop: insets.top,
                  backgroundColor: "#030434",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    padding: 10,
                    fontSize: 20,
                    fontFamily: "Quicksand_700Bold",
                  }}
                >
                  {route.name}
                </Text>
              </View>
            ),
            // header: () => <Header />,
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
        <Stack.Navigator initialRouteName="login">
          <Stack.Screen
            name="login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="main"
            component={TabMain}
            options={{
              headerShown: false,
            }}
          />
          {screens.map((sc) => (
            <Stack.Screen
              key={sc.name}
              name={sc.name}
              component={sc.component}
              options={{
                headerShown: true,
                headerTintColor: Purplerose2,
              }}
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
