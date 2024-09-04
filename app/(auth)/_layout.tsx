import { router } from "expo-router"
import { Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const AuthLayout = () => {
    return (
        <SafeAreaView className="h-full w-screen bg-neutral-900">
            <View>
                <TouchableOpacity onPress={() => router.push('/(tabs)')} className="border-2 border-green-500 rounded">
                    <Text className="font-bold text-3xl text-green-500 text-center">click tabs</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default AuthLayout