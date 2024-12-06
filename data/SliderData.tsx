import { ImageSourcePropType } from "react-native";

export type ImageSliderType = {
  title: string;
  image: ImageSourcePropType;
  description: string;
};

export const ImageSliderData = [
  {
    title: "White Flower",
    image: require("@/assets/images/white_flower.jpg"),
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Yellow Flower",
    image: require("@/assets/images/yellow_flower.jpg"),
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Pink Flower",
    image: require("@/assets/images/pink_flower.jpg"),
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];
