import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { FC, useEffect } from "react";
import { ImageSliderType } from "@/data/SliderData";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

type Props = {
  visible: boolean;
  item: ImageSliderType;
  onRequestClose: () => void;
};

const ModalCard: FC<Props> = ({ visible, item, onRequestClose }) => {
  // this variable controls fade in/fade out
  const opacity = useSharedValue(0);

  // this variable controls slide up/slide down
  const translateY = useSharedValue(50);

  // Animation effects when visibility changes
  useEffect(() => {
    if (visible) {
      opacity.value = withTiming(1, { duration: 300 });
      translateY.value = withSpring(0);
    } else {
      opacity.value = withTiming(0, { duration: 300 });
      translateY.value = withSpring(50);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  // Animated styles: combine the result of value opacity and translateY
  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
  }));

  if (!visible) {
    return null;
  }

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <View style={styles.gap20}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={onRequestClose}
          style={styles.flexEndPosition}
        >
          <Ionicons name="close" size={24} color={"white"} />
        </TouchableOpacity>
        <Image source={item.image} style={styles.image} />
        <View style={styles.contentWrapper}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.desc}>{item.description}</Text>
        </View>
      </View>
    </Animated.View>
  );
};

export default ModalCard;
