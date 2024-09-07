import { Icons } from "@/constants"
import { Tabs } from "expo-router"
import { Image } from "react-native"

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#24AE7C',
        tabBarLabelStyle: {
          paddingBottom: 10,
        },
        tabBarStyle: {
          height: 64,
        },
        tabBarHideOnKeyboard: true
      }}
    >
      <Tabs.Screen name="index" options={{
        tabBarLabel: "Home",
        tabBarIcon: ({ size, color }) => (
          <Image
            source={Icons.Home}
            style={{ width: size, height: size }}
            tintColor={color}
          />
        ),
        headerShown: false
      }} />
      <Tabs.Screen name="course" options={{
        tabBarLabel: "Course",
        tabBarIcon: ({ size, color }) => (
          <Image
            source={Icons.Course}
            style={{ width: size, height: size }}
            tintColor={color}
          />
        ),
        headerShown: false
      }} />
      <Tabs.Screen name="test-series" options={{
        tabBarLabel: "Test Series",
        tabBarIcon: ({ size, color }) => (
          <Image
            source={Icons.Test}
            style={{ width: size, height: size }}
            tintColor={color}
          />
        ),
        headerShown: false
      }} />
      <Tabs.Screen name="profile" options={{
        tabBarLabel: "Profile",
        tabBarIcon: ({ size, color }) => (
          <Image
            source={Icons.User}
            style={{ width: size, height: size }}
            tintColor={color}
          />
        ),
        headerShown: false
      }} />
    </Tabs>
  )
}

export default TabLayout