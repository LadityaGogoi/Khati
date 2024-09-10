import { SubtopicType } from "@/assets/data/course-data"
import { router } from "expo-router"
import { Text, TouchableOpacity, View } from "react-native"

type Props = {
    item: SubtopicType
}

const SubTopicCard = ({ item }: Props) => {
    return (
        <TouchableOpacity onPress={() => router.push(`/(tabs)/course/topic/${item.englishName}`)} className="w-11/12 mx-auto my-3 px-3 py-1.5 bg-green-50 rounded flex flex-col gap-y-1.5">
            <View className="w-full flex flex-row justify-between items-center">
                <Text className="font-extrabold text-base text-dark-600">{item.englishName}</Text>
                <View className="flex flex-row justify-center items-center gap-x-1.5">
                    <Text className="font-extrabold text-xs bg-yellow-300 rounded p-0.5 text-white">grade |||</Text>
                    <Text className="font-extrabold text-xs bg-red-300 rounded p-0.5 text-white">grade IV</Text>
                </View>
            </View>
            <View className="flex flex-col gap-y-0.5 w-full">
                <View className="h-1.5 w-full rounded-full bg-green-300 flex flex-row justify-start items-center">
                    <View className="bg-green-500 h-full w-1/2 rounded-full" style={{ width: '10%' }}></View>
                </View>
                <View className="flex flex-row justify-between items-center">
                    <Text className="text-xs font-extrabold text-green-500">19/333</Text>
                    <Text className="text-xs font-extrabold text-green-500">10% done</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default SubTopicCard