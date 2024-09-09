import { ImageSliderType } from "@/assets/data/carousel-data"
import { Image, Text, View } from "react-native"

type Props = {
    item: ImageSliderType;
    index: number;
}

const CarouselItem = ({ item, index }: Props) => {
    return (
        <View key={index} className="w-screen h-36 flex flex-col justify-center items-center">
            <View className="w-32 h-32">
                <Image source={item.image} className="w-full h-full object-cover" />
            </View>
            <Text className="text-xl font-extrabold text-green-500">{item.description}</Text>
        </View>
    )
}

export default CarouselItem