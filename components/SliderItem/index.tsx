import { View, Text, Image } from "react-native";
import React, { FC } from "react";
import { ImageSliderType } from "@/data/SliderData";
import styles from "./styles";

type Props = {
  item: ImageSliderType;
  index: number;
};

const SliderItem: FC<Props> = ({ item, index }) => {
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.background}>
        <View style={styles.contentWrapper}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.desc}>{item.description}</Text>
        </View>
      </View>
    </View>
  );
};

export default SliderItem;
