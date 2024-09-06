import { StatusBar } from "expo-status-bar"
import { Text, View } from "react-native"

const Page = () => {
    return (
        <View className="flex-1 justify-center items-center gap-y-3">
            <Text className="font-comfortaa-regular text-white text-xl">hello world!</Text>
            <StatusBar style="light" />
        </View>
    )
}

export default Page