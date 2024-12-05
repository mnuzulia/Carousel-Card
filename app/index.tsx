import { View } from "react-native";
import styles from "./styles";
import Slider from "@/components/Slider";
import { ImageSliderData } from "@/data/SliderData";

const Index = () => {
  return (
    <View style={styles.container}>
      <Slider sliderItemList={ImageSliderData} />
    </View>
  );
};

export default Index;
