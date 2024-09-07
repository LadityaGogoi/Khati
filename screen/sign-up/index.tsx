import { Icons, Images } from "@/constants"
import { router, Stack } from "expo-router"
import { useState } from "react"
import { Text, TouchableOpacity, View, Image, Pressable, TextInput } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const SignUpScreen = () => {
    const [check, setCheck] = useState(false)

    return (
        <SafeAreaView className="flex-1 bg-dark-200">
            <Stack.Screen options={{ headerShown: false, presentation: 'modal' }} />
            <View className="h-screen w-screen flex flex-col justify-between items-center">
                <View className="h-1/2 w-full flex flex-col justify-between items-center">
                    <Pressable onPress={() => router.back()} className="w-11/12 flex flex-row justify-start items-center">
                        <View className="w-9 h-9 p-1.5 border-2 rounded-full border-green-500">
                            <Image source={Icons.Back} className="w-full h-full object-cover" />
                        </View>
                    </Pressable>
                    <View className="flex flex-row justify-center items-center">
                        <View className="w-16 h-16">
                            <Image tintColor="#24AE7C" source={Images.Logo} className="w-full h-full object-cover" />
                        </View>
                        <Text className="font-manjari-bold text-green-500 text-3xl">Khati</Text>
                    </View>
                    <View className="flex flex-col gap-y-3 w-11/12">
                        <View className="flex flex-col w-full gap-y-0.5">
                            <Text className="font-manjari-bold text-lg text-light-200 px-3">Your Name</Text>
                            <View className="w-full border-2 border-green-500 bg-dark-400 rounded-full px-1.5 flex flex-row justify-between items-center">
                                <View className="w-11 h-11 p-3 border-green-500 border-r-2">
                                    <Image source={Icons.User} className="w-full h-full object-cover" />
                                </View>
                                <TextInput placeholder="Enter Your Name" placeholderTextColor="#ABB8C4" className="px-1.5 flex-1 font-manjari-bold text-base text-light-200" />
                            </View>
                        </View>
                        <View className="flex flex-col w-full gap-y-0.5">
                            <Text className="font-manjari-bold text-lg text-light-200 px-3">Password</Text>
                            <View className="w-full border-2 border-green-500 bg-dark-400 rounded-full px-1.5 flex flex-row justify-between items-center">
                                <View className="w-11 h-11 p-3 border-green-500 border-r-2">
                                    <Image source={Icons.Lock} className="w-full h-full object-cover" />
                                </View>
                                <TextInput placeholder="Enter Your Password" placeholderTextColor="#ABB8C4" className="px-1.5 flex-1 font-manjari-bold text-base text-light-200" />
                            </View>
                        </View>
                    </View>
                </View>
                <View className="h-1/2 justify-center items-center gap-y-3">
                    <View className="w-64 flex flex-row justify-start items-center gap-x-1.5">
                        <Pressable className="w-5 h-5 p-0.5 border-2 border-green-500 rounded" onPress={() => setCheck(!check)}>
                            <Image source={Icons.Check} className={`w-full ${check ? 'hidden' : 'visible'} h-full object-cover`} />
                        </Pressable>
                        <Text className="text-blue-500 font-manjari-bold text-sm">Agree Terms and Conditions</Text>
                    </View>
                    <TouchableOpacity onPress={() => router.push('/(tabs)/')} className="w-64 p-3 bg-green-500 rounded-full">
                        <Text className="text-light-200 text-center font-manjari-bold text-lg">Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default SignUpScreen