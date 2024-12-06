import { View } from "react-native";
import React, { FC } from "react";
import { ImageSliderType } from "@/data/SliderData";
import SliderItem from "../SliderItem";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

type SliderItemType = {
  item: ImageSliderType;
  index: number;
};

type Props = {
  sliderItemList: ImageSliderType[];
  onPressCard: (imageItem: ImageSliderType) => void;
};

const Slider: FC<Props> = ({ sliderItemList, onPressCard }) => {
  // declare the initial value of scrollX by using useSharedValue
  const scrollX = useSharedValue(0);

  // render the list item of data
  const renderItem = ({ item, index }: SliderItemType) => {
    return (
      <SliderItem
        item={item}
        index={index}
        scrollX={scrollX}
        onPressCard={(imageItem) => onPressCard(imageItem)}
      />
    );
  };

  // handle scroll event with animated interactions
  const onScrollHandler = useAnimatedScrollHandler({
    // update value of scrollX when onScroll listing image
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  return (
    <View>
      <Animated.FlatList
        data={sliderItemList}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={onScrollHandler}
        removeClippedSubviews={false}
      />
    </View>
  );
};

export default Slider;
