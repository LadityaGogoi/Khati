import { View } from "react-native"
import { ImageSliderType } from "@/assets/data/carousel-data"

type Props = {
    items: ImageSliderType[];
    paginationIndex: number
}

const Pagination = ({ items, paginationIndex }: Props) => {
    return (
        <View className="flex flex-row justify-center items-center h-7">
            {items.map((_, index) => {

                return (
                    <View key={index} className={`h-1 w-1 mx-0.5 rounded-full ${paginationIndex === index ? 'bg-green-500' : 'bg-green-300'}`}
                    />
                )
            })}
        </View>
    )
}

export default Pagination