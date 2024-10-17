import { TrendingTopicType } from "@/assets/data/trending-topics"
import { FlatList, Text, View } from "react-native"
import TrendingTopicsCard from "./trending-topics-card"

type Props = {
    item: TrendingTopicType[] | null
}

const TrendingTopics = ({ item }: Props) => {
    return (
        <View className="flex flex-col gap-y-1.5 my-3">
            <View className="w-full flex flex-row justify-between items-center px-3">
                <Text className="text-xl font-extrabold text-green-500">Trending Topics</Text>
                <Text className="text-lg font-extrabold text-slate-500">See All</Text>
            </View>
            <FlatList
                data={item}
                renderItem={({ item, index }) => <TrendingTopicsCard item={item} index={index} />}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default TrendingTopics