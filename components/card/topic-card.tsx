import { CourseTopicType } from "@/assets/data/course-data"
import { Icons, Images } from "@/constants";
import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native"

type Props = {
    item: CourseTopicType;
}

const TopicCard = ({ item }: Props) => {
    const percentage = parseFloat(((item.solved / item.total) * 100).toFixed(1))

    return (
        <TouchableOpacity onPress={() => router.push(`/(tabs)/course/subject/${item.topicId}`)} className="w-full h-24 flex flex-row justify-between items-start my-3 gap-x-3">
            <View className="w-1/3 h-24">
                <Image source={Images.GeneralKnowledge} className="w-full h-full object-cover rounded-lg" />
            </View>
            <View className="flex flex-1 h-full flex-col justify-between items-start">
                <Text className="font-assamese-regular text-sm text-dark-500" style={{ lineHeight: 24 }}>{item.name}</Text>
                <View className="w-full flex flex-col gap-y-1.5">
                    <View className=" w-full flex flex-row justify-between items-center">
                        <View className="flex flex-row justify-center items-center gap-x-1.5">
                            <View className="w-3 h-3">
                                <Image source={Icons.Book} tintColor="#24AE7C" className="w-full h-full" />
                            </View>
                            <Text className="text-sm font-extrabold text-green-500">10 chapters</Text>
                        </View>
                        <View className="flex flex-row justify-center items-center  gap-x-1.5">
                            <View className="w-3 h-3">
                                <Image source={Icons.Question} tintColor="#24AE7C" className="w-full h-full" />
                            </View>
                            <Text className="text-sm font-extrabold text-green-500">{item.total}+ questions</Text>
                        </View>
                    </View>
                    <View className="flex flex-row justify-start items-center gap-x-1.5">
                        <View className="w-3 h-3">
                            <Image source={Icons.View} tintColor="#24AE7C" className="w-full h-full" />
                        </View>
                        <Text className="text-sm font-extrabold text-green-500">1000+ students enrolled</Text>
                    </View>
                </View>
                <View className="flex flex-row  justify-between items-center gap-x-1.5 w-full">
                    <View className="flex-1 h-1.5 rounded-full bg-green-300 flex flex-row justify-start items-center">
                        <View className="bg-green-500 h-full w-1/2 rounded-full" style={{ width: `${percentage}%` }}></View>
                    </View>
                    <Text className="text-xs font-extrabold text-green-500">{percentage}% done</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default TopicCard