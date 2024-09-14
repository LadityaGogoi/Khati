import WelcomeScreen from "@/screen/welcome"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { Redirect } from "expo-router"
import { useEffect, useState } from "react"
import { ActivityIndicator, View } from "react-native"

const Welcome = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [isUserPresent, setIsUserPresent] = useState<boolean | null>(null)

    useEffect(() => {
        const checkForUser = async () => {
            try {
                const user = await AsyncStorage.getItem('user')
                if (user == null) {
                    setIsUserPresent(false)
                } else {
                    setIsUserPresent(true)
                }
            } catch (error) {
                console.log('Error Has Occured while finding user')
            } finally {
                setIsLoading(false)
            }
        }

        checkForUser()
    }, [])

    if (isLoading) {
        return (
            <View className="flex-1 bg-white justify-center items-center">
                <ActivityIndicator size="large" color="#24AE7C" />
            </View>
        )
    }
    return (
        <>
            {
                isUserPresent ?
                    <Redirect href={"/(tabs)"} />
                    :
                    <WelcomeScreen />
            }
        </>
    )
}

export default Welcome