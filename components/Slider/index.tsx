import { View, FlatList } from "react-native";
import React, { FC } from "react";
import { ImageSliderType } from "@/data/SliderData";
import SliderItem from "../SliderItem";

type SliderItemType = {
  item: ImageSliderType;
  index: number;
};

type Props = {
  sliderItemList: ImageSliderType[];
};

const Slider: FC<Props> = ({ sliderItemList }) => {
  const renderItem = ({ item, index }: SliderItemType) => {
    return <SliderItem item={item} index={index} />;
  };

  return (
    <View>
      <FlatList
        data={sliderItemList}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Slider;
