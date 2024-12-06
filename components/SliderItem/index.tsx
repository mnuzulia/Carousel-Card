import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { ImageSliderType } from "@/data/SliderData";
import styles from "./styles";
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

type Props = {
  item: ImageSliderType;
  index: number;
  scrollX: SharedValue<number>;
  onPressCard: (imageItem: ImageSliderType) => void;
};
const { width } = Dimensions.get("screen");

const SliderItem: FC<Props> = ({ item, index, scrollX, onPressCard }) => {
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        // Translates the component horizontally based on the scroll position
        {
          translateX: interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [-width * 0.25, 0, width * 0.25],
            Extrapolation.CLAMP,
          ),
        },
        // Adjusts the size of the component based on its scroll position.
        {
          scale: interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [0.9, 1, 0.9],
            Extrapolation.CLAMP,
          ),
        },
      ],
    };
  });

  return (
    <Animated.View style={[styles.container, animatedStyles]}>
      <TouchableOpacity activeOpacity={0.8} onPress={() => onPressCard(item)}>
        <Image source={item.image} style={[styles.image]} />
        <View style={styles.background}>
          <View style={styles.contentWrapper}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.desc}>{item.description}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default SliderItem;
