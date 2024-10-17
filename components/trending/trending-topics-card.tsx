import { TrendingTopicType } from "@/assets/data/trending-topics"
import { Icons } from "@/constants"
import { Image, Text, TouchableOpacity, View } from "react-native"

type Props = {
    item: TrendingTopicType,
    index: number
}

const TrendingTopicsCard = ({ item, index }: Props) => {
    return (
        <TouchableOpacity className="p-1.5 justify-center items-center bg-green-50  mx-3 rounded">
            <View className="relative w-64 h-48 flex flex-col justify-between items-start">
                <View className="w-full h-32">
                    <Image source={item.image} className="w-full h-full object-cover rounded" />
                </View>
                <View className="w-full flex flex-col gap-y-1.5">
                    <View className=" w-full flex flex-row justify-between items-center">
                        <View className="flex flex-row gap-x-1.5">
                            <View className="w-5 h-5">
                                <Image source={Icons.Book} tintColor="#24AE7C" className="w-full h-full" />
                            </View>
                            <Text className="text-sm font-extrabold text-green-500">10 chapters</Text>
                        </View>
                        <View className="flex flex-row gap-x-1.5">
                            <View className="w-5 h-5">
                                <Image source={Icons.Question} tintColor="#24AE7C" className="w-full h-full" />
                            </View>
                            <Text className="text-sm font-extrabold text-green-500">{item.total}+ questions</Text>
                        </View>
                    </View>
                    <View className="flex flex-row gap-x-1.5">
                        <View className="w-5 h-5">
                            <Image source={Icons.View} tintColor="#24AE7C" className="w-full h-full" />
                        </View>
                        <Text className="text-sm font-extrabold text-green-500">1000+ students enrolled</Text>
                    </View>
                </View>
                <View className="absolute top-0 right-0 flex flex-row justify-center items-center bg-yellow-100 rounded-bl rounded-tr">
                    <View className="w-5 h-5">
                        <Image source={Icons.Lock} tintColor="#f59e0b" className="w-full h-full object-cover" />
                    </View>
                    <Text className="text-yellow-500 font-extrabold p-1.5">Premium</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default TrendingTopicsCard