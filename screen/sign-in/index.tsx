import { Stack } from "expo-router"
import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const SignInScreen = () => {
    return (
        <SafeAreaView>
            <Stack.Screen options={{ headerShown: false }} />
            <View>
                <Text>sign in screen</Text>
            </View>
        </SafeAreaView>
    )
}

export default SignInScreen