import { router } from "expo-router"
import { Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const Home = () => {
  return (
    <SafeAreaView className="h-full w-screen bg-neutral-900">
      <View>
        <TouchableOpacity onPress={() => router.push('/(auth)')} className="border-2 border-green-500 rounded">
          <Text className="font-manjari-regular text-3xl text-green-500 text-center">click auth</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Home