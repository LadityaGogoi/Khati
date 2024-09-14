import { useLocalSearchParams } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const TestScreen = () => {
    const { id } = useLocalSearchParams()
    return (
        <SafeAreaView>
            <View>
                <Text>{id}</Text>
            </View>
            <StatusBar style="dark" />
        </SafeAreaView>
    )
}

export default TestScreen