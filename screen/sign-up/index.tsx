import AsyncStorage from "@react-native-async-storage/async-storage"
import { Icons } from "@/constants"
import { router, Stack } from "expo-router"
import { useState } from "react"
import { Text, TouchableOpacity, View, Image, Pressable, TextInput, Alert, ActivityIndicator } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

interface UserData {
    name: string;
    phone: string;
    password: string
}

const SignUpScreen = () => {
    const [user, setUser] = useState<UserData>({
        name: '',
        phone: '',
        password: ''
    })
    const [check, setCheck] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleInputChange = (field: keyof UserData, value: string) => {
        setUser(prevData => ({
            ...prevData,
            [field]: value
        }))
    }

    const handleRegister = async () => {
        const { name, phone, password } = user

        if (name && phone && password && check) {
            setIsLoading(true)
            try {
                await AsyncStorage.setItem('user', JSON.stringify(user))
            } catch (error) {
                Alert.alert('Error', 'Failed to Register')
            } finally {
                setIsLoading(false)
                router.push('/(tabs)')
            }
        } else {
            Alert.alert('Error', 'Please fill all the input fields')
        }
    }

    return (
        <SafeAreaView className="flex-1 bg-white">
            <Stack.Screen options={{ headerShown: false, presentation: 'modal' }} />
            <View className="h-screen w-screen flex flex-col justify-between items-center">
                <View className="h-1/2 w-full p-3 flex flex-col justify-between items-center">
                    <View className="flex flex-row justify-center items-center">
                        <Text className="font-extrabold text-green-500 text-xl">Create @KHATI Account</Text>
                    </View>
                    <View className="flex flex-col gap-y-3 p-3">
                        <View className="flex flex-col w-full gap-y-0.5">
                            <Text className="font-extrabold text-lg text-green-500">Your Name</Text>
                            <View className="w-full border-2 border-green-300 rounded-full px-1.5 flex flex-row justify-between items-center">
                                <View className="w-11 h-11 p-2 border-green-300 border-r-2">
                                    <Image source={Icons.User} tintColor="#24AE7C" className="w-full h-full object-cover" />
                                </View>
                                <TextInput value={user.name} onChangeText={(value) => handleInputChange('name', value)} placeholder="Enter Your Name" placeholderTextColor="#ABB8C4" className="px-1.5 flex-1 text-base text-dark-700 font-bold" />
                            </View>
                        </View>
                        <View className="flex flex-col w-full gap-y-0.5">
                            <Text className="font-extrabold text-lg text-green-500">Your Phone Number</Text>
                            <View className="w-full border-2 border-green-300 rounded-full px-1.5 flex flex-row justify-between items-center">
                                <View className="w-11 h-11 p-2 border-green-300 border-r-2">
                                    <Image source={Icons.Call} tintColor="#24AE7C" className="w-full h-full object-cover" />
                                </View>
                                <TextInput value={user.phone} onChangeText={(value) => handleInputChange('phone', value)} placeholder="Enter Your Phone Number" placeholderTextColor="#ABB8C4" className="px-1.5 flex-1 text-base text-dark-700 font-bold" />
                            </View>
                        </View>
                        <View className="flex flex-col w-full gap-y-0.5">
                            <Text className="font-extrabold text-lg text-green-500">Your Password</Text>
                            <View className="w-full border-2 border-green-300 rounded-full px-1.5 flex flex-row justify-between items-center">
                                <View className="w-11 h-11 p-2 border-green-300 border-r-2">
                                    <Image source={Icons.Lock} tintColor="#24AE7C" className="w-full h-full object-cover" />
                                </View>
                                <TextInput value={user.password} onChangeText={(value) => handleInputChange('password', value)} placeholder="Enter Your Password" placeholderTextColor="#ABB8C4" className="px-1.5 flex-1 text-base text-dark-700 font-bold" />
                            </View>
                        </View>
                    </View>
                </View>
                <View className="flex flex-1 flex-col justify-center items-center gap-y-1.5">
                    <View className="w-64 flex flex-row justify-center items-center gap-x-0.5">
                        <Pressable className={`w-5 h-5 border-2 ${check ? 'bg-blue-500' : 'bg-white'} border-blue-500 rounded`} onPress={() => setCheck(!check)}>
                            <Image source={Icons.Check} tintColor="#fff" className={`w-full ${check ? 'visible' : 'hidden'} h-full object-cover`} />
                        </Pressable>
                        <Text className="text-blue-500 font-bold text-sm">Agree Terms and Conditions</Text>
                    </View>
                    <TouchableOpacity disabled={isLoading} onPress={() => handleRegister()} className="w-64 h-16 justify-center items-center p-3 bg-green-500 rounded-full">
                        {isLoading ?
                            <ActivityIndicator size='large' color="#fff" />
                            :
                            <Text className="text-white text-center font-extrabold text-lg">Register</Text>
                        }
                    </TouchableOpacity>
                    <View className="flex flex-row gap-x-1.5">
                        <Text>Already have an Account!</Text>
                        <Pressable onPress={() => router.push('/(auth)/sign-in')}>
                            <Text className="text-blue-500 font-extrabold">Click here</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </SafeAreaView >
    )
}

export default SignUpScreen