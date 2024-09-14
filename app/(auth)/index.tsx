import AsyncStorage from "@react-native-async-storage/async-storage"
import { Redirect } from "expo-router"
import { useEffect, useState } from "react"
import { ActivityIndicator, View } from "react-native"

const Index = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [isFirstTime, setIsFirstTime] = useState<boolean | null>(null)

    useEffect(() => {
        const checkIfFirstTime = async () => {
            try {
                const onboard = await AsyncStorage.getItem('FirstTime')

                if (onboard == null) {
                    setIsFirstTime(true)
                    await AsyncStorage.setItem('FirstTime', JSON.stringify(isFirstTime))
                } else {
                    setIsFirstTime(false)
                }
            } catch (error) {
                console.error('Error Has Occured', error)
            } finally {
                setIsLoading(false)
            }
        }

        checkIfFirstTime()
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
            <Redirect href={isFirstTime ? "/(auth)/onboarding" : "/(auth)/welcome"} />
        </>
    )
}

export default Index