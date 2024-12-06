import { View } from "react-native";
import styles from "./styles";
import Slider from "@/components/Slider";
import { ImageSliderData, ImageSliderType } from "@/data/SliderData";
import ModalCard from "@/components/Modal";
import { useState } from "react";

const Index = () => {
  const [imageItemSlider, setImageItemSlider] = useState({
    title: "",
    image: {},
    description: "",
  });
  const [showModal, setShowModal] = useState(false);

  const onPressCard = (imageItem: ImageSliderType) => {
    setImageItemSlider(imageItem);
    setShowModal(true);
  };

  return (
    <View style={styles.container}>
      {/* show component modal */}
      <ModalCard
        visible={showModal}
        item={imageItemSlider}
        onRequestClose={() => setShowModal(false)}
      />

      {/* show carousel card */}
      <Slider
        sliderItemList={ImageSliderData}
        onPressCard={(item) => onPressCard(item)}
      />
    </View>
  );
};

export default Index;
