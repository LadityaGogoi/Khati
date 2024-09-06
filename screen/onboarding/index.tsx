import { router, Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native"
import Animated, { SlideInUp, SlideOutDown } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context"

const OnboardingSteps = [
    {
        id: 0,
        heading: "#1 ADRE platform",
        subheading: "অসমৰ আটাইতকৈ সাধাৰণ আৰু পূৰ্বৰ প্ৰশ্নবোৰ অনুশীলন কৰাৰ একমাত্ৰ সম্পূৰ্ণ মঞ্চ, য'ত পৰীক্ষাৰ্থীসকলে বিনামূলীয়াভাৱে অতি প্ৰয়োজনীয় প্ৰস্তুতি গ্ৰহণ কৰিব পাৰে।"
    },
    {
        id: 1,
        heading: "Free Mock Tests",
        subheading: "পৰীক্ষাৰ্থীসকলে বিনামূলীয়া মক টেষ্টৰ যোগেদি তেওঁলোকৰ জ্ঞানৰ পৰিসীমা বুজি পায় আৰু প্ৰস্তুতিত উন্নতি ঘটাব পাৰে।"
    },
    {
        id: 2,
        heading: "Performance Analysis",
        subheading: "মক টেষ্টৰ পিছত পৰীক্ষাৰ্থীসকলে নিজৰ পাৰফৰ্মেন্সৰ পৰিৱৰণ পোৱা যায়, য'ত সঠিক উত্তৰ আৰু ভুল উত্তৰৰ তথ্য উপস্থাপন কৰা হয়।"
    },
];


const OnboardingScreen = () => {
    const [index, setIndex] = useState(0)
    const step = OnboardingSteps[index]

    const handleClick = () => {
        if (index == OnboardingSteps.length - 1) {
            router.push('/(auth)/welcome')
        }
        setIndex((index + 1) % OnboardingSteps.length)
    }
    return (
        <SafeAreaView className="flex-1 flex-col justify-between items-center bg-dark-200">
            <Stack.Screen options={{ headerShown: false }} />
            <View className="h-1/6 w-72 flex flex-row justify-between items-center">
                <View className="flex flex-row justify-center items-center gap-x-1.5">
                    {OnboardingSteps.map((item) => (
                        <View key={item.id} className={`bg-green-500 rounded-full ${index === item.id ? 'w-5' : 'w-1.5'} h-1.5`}></View>
                    ))}
                </View>
                <View>
                    <Text className="text-white">Skip</Text>
                </View>
            </View>
            <View className="h-4/6 justify-center items-center">
                <Animated.View key={index} entering={SlideInUp.delay(100)} exiting={SlideOutDown}>
                    <Text className="text-center text-green-500  font-manjari-bold text-3xl">{step.heading}</Text>
                    <Text className="p-3 text-center text-light-200 text-base">{step.subheading}</Text>
                </Animated.View>
            </View>
            <View className="h-1/6 justify-center items-center">
                <TouchableOpacity className="w-64 p-3 rounded-full bg-green-500 justify-center items-center" onPress={() => handleClick()}>
                    <Text className="font-manjari-bold text-lg text-white">{index !== OnboardingSteps.length - 1 ? 'Continue' : 'Get Started'}</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="light" />
        </SafeAreaView>
    )
}

export default OnboardingScreen