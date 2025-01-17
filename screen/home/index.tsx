import { ImageSlider } from "@/assets/data/carousel-data"
import { TrendingTopicType } from "@/assets/data/trending-topics"
// import { trendingTopics } from "@/assets/data/trending-topics"
import Carousel from "@/components/carousel/carousel"
import Footer from "@/components/footer/footer"
import TrendingTopics from "@/components/trending/trending-topics"
import { Icons } from "@/constants"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { router } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { useEffect, useState } from "react"
import { ActivityIndicator, Image, Pressable, ScrollView, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const HomeScreen = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [trendingTopics, setTrendingTopics] = useState<TrendingTopicType[] | null>(null)

    useEffect(() => {
        const retrieveCourseData = async () => {
            try {
                const data = await AsyncStorage.getItem('trending')
                if (data) {
                    const parsedTrendingTopics: TrendingTopicType[] = JSON.parse(data)
                    setTrendingTopics(parsedTrendingTopics)
                }
            } catch (error) {
                console.error('Error Occur While Retriving', error)
            } finally {
                setIsLoading(false)
            }
        }

        retrieveCourseData()
    }, [])

    if (isLoading) {
        return (
            <View className="flex-1 bg-white justify-center items-center">
                <ActivityIndicator size="large" color="#24AE7C" />
            </View>
        )
    }

    return (
        <SafeAreaView className="bg-white">
            <ScrollView contentContainerStyle={{ minHeight: "100%" }} className="flex flex-col gap-y-3">
                <View className="w-11/12 mx-auto flex flex-row justify-between items-center">
                    <Text className="text-xl text-green-500 font-extrabold">Khati</Text>
                    <Pressable onPress={() => router.push('/(modals)/search')} className="flex flex-row justify-between items-center rounded-full p-0.5 border-2 border-green-500 gap-x-1.5">
                        <Text className="text-xs font-bold text-slate-300">Subject | Questions | Topics...</Text>
                        <View className="w-9 h-9 p-1.5 bg-green-500 rounded-full">
                            <Image source={Icons.Search} tintColor="#fff" className="w-full h-full object-cover" />
                        </View>
                    </Pressable>
                    <View className="w-7 h-7">
                        <Image source={Icons.Notification} tintColor="#24AE7C" className="w-full h-full object-cover" />
                    </View>
                </View>
                <Carousel itemList={ImageSlider} />
                <View className="flex flex-col px-3 gap-y-1.5">
                    <View className="flex flex-row gap-x-1.5">
                        <View className="bg-rose-100 shadow-lg shadow-red-500 p-3 rounded flex flex-row flex-1 justify-between items-center">
                            <View className="w-5 h-5">
                                <Image source={Icons.Global} tintColor="#F37877" className="w-full h-full object-cover" />
                            </View>
                            <Text className="text-xs font-extrabold text-red-500">Assamese language</Text>
                        </View>
                        <View className=" bg-green-100 shadow-lg shadow-green-500 rounded flex flex-row p-3 flex-1 justify-between items-center">
                            <View className="w-5 h-5">
                                <Image source={Icons.Video} tintColor="#24AE7C" className="w-full h-full object-cover" />
                            </View>
                            <Text className="text-xs font-extrabold text-green-500">Video Demonstration</Text>
                        </View>
                    </View>
                    <View className="flex flex-row gap-x-1.5">
                        <View className="bg-blue-100 shadow-lg shadow-blue-500 rounded flex flex-row p-3 flex-1 justify-between items-center">
                            <View className="w-5 h-5">
                                <Image source={Icons.Question} tintColor="#79B5EC" className="w-full h-full object-cover" />
                            </View>
                            <Text className="text-xs font-extrabold text-blue-500">2000+ questions</Text>
                        </View>
                        <View className="bg-slate-100 shadow-lg shadow-slate-500 rounded flex flex-row p-3 flex-1 justify-between items-center">
                            <View className="w-5 h-5">
                                <Image source={Icons.Idea} tintColor="#363A3D" className="w-full h-full object-cover" />
                            </View>
                            <Text className="text-xs font-extrabold text-dark-500">Up to date Questions</Text>
                        </View>
                    </View>
                </View>
                <TrendingTopics item={trendingTopics} />
                <Footer />
            </ScrollView>
            <StatusBar style="dark" />
        </SafeAreaView>
    )
}

export default HomeScreen