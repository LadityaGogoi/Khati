import { router } from "expo-router"
import { Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const Home = () => {
    return (
        <SafeAreaView className="bg-slate-900">
            <View>
                <TouchableOpacity onPress={() => router.push('/(auth)')} className="border-2 border-green-500 rounded">
                    <Text className="font-bold text-3xl text-green-500 text-center">click</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Home