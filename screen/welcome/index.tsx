import { Images } from "@/constants"
import { router, Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { Text, TouchableOpacity, View, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const WelcomeScreen = () => {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <Stack.Screen options={{ headerShown: false }} />
            <View className="h-screen flex flex-col justify-between items-center">
                <View className="flex-1 justify-center items-center">
                    <View className="w-64 h-64">
                        <Image source={Images.Welcome} className="w-full h-full object-cover" />
                    </View>
                </View>
                <View className="mb-3 w-11/12 flex flex-row justify-between items-center gap-x-1.5">
                    <TouchableOpacity className="flex-1 p-3 bg-green-500 rounded-full" onPress={() => router.push('/(auth)/sign-up')}>
                        <Text className="text-light-200 text-center font-extrabold text-lg">Register</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-1 p-3 border-2 border-green-500 rounded-full" onPress={() => router.push('/(auth)/sign-in')}>
                        <Text className="text-green-500 text-center font-extrabold text-lg">Log In</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <StatusBar style="dark" />
        </SafeAreaView>
    )
}

export default WelcomeScreen