import { useRef, useState } from "react"
import { View, FlatList, ViewToken } from "react-native"
import { ImageSliderType } from "@/assets/data/carousel-data"
import CarouselItem from "./carousel-item"
import Pagination from "./pagination"

type Props = {
    itemList: ImageSliderType[]
}

const Carousel = ({ itemList }: Props) => {
    const [paginationIndex, setPaginationIndex] = useState(0)

    const onViewableItemsChanged = ({ viewableItems }: { viewableItems: ViewToken[] }) => {
        if (viewableItems[0].index !== undefined && viewableItems[0].index !== null) {
            setPaginationIndex(viewableItems[0].index)
        }
    }

    const viewabilityConfig = {
        itemVisiblePercentThreshold: 50
    }

    const viewabilityConfigCallbackPairs = useRef([
        { viewabilityConfig, onViewableItemsChanged }
    ])
    return (
        <View className="my-1.5">
            <FlatList
                data={itemList}
                renderItem={({ item, index }) => <CarouselItem item={item} index={index} />}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
            />
            <Pagination items={itemList} paginationIndex={paginationIndex} />
        </View>
    )
}

export default Carousel