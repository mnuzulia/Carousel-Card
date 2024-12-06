# Interactive Card Carousel 🎠

An **interactive Card Carousel** built with **Expo** and **React Native**, showcasing smooth animations and an engaging user experience. This project demonstrates a swipeable carousel with focus effects, tap-to-expand functionality, and elegant transitions such as fade-in/out, slide-up/down, and scaling effects.

---

## Features 🚀

1. **Swipeable Carousel**:
   - Swipe left or right to navigate between cards.
   - Smooth animations for seamless transitions.

2. **Focus Effect**:
   - The currently focused card is highlighted with a scale and translate animation.
   - Neighboring cards dim and shift slightly to emphasize the active card.

3. **Tap to Expand**:
   - Tap on a card to expand it into a detailed view.
   - Animations include zoom-in, fade-in, and slide-up transitions.

4. **Close with Transition**:
   - Close the expanded card with a smooth zoom-out, fade-out, and slide-down animation.

5. **Dynamic Animations**:
   - Powered by **React Native Reanimated** for high-performance animations.
   - Combines transforms such as `translateX`, `scale`, and `opacity` for a polished look.

---

## Built With 🛠️

- **[Expo](https://expo.dev/)**: Simplified React Native development.
- **[React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)**: High-performance animations.
- **TypeScript**: Type-safe development for cleaner, more maintainable code.
- **React Native Gesture Handler**: Smooth swipe and gesture support.

---

## Screenshots 📸
**Carousel View on Android Platform**
![Carousel View on Android Platform](demo/carousel-card-android.gif)

**Carousel View on IOS Platform**
![Carousel View on IOS Platform](demo/carousel-card-ios.gif)

---

## Getting Started 🚦

### Prerequisites
- Install [Node.js](https://nodejs.org/)
- Install [Expo CLI](https://docs.expo.dev/get-started/installation/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mnuzulia/Carousel-Card.git
   cd card-carousel
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Expo development server:
   ```bash
   npx expo start
   ```

4. Open the project on your device:
   - Use the **Expo Go** app on iOS or Android.
   - Scan the QR code from the terminal or the browser.

---

## Usage 💻

1. **Swipe Cards**:
   - Scroll horizontally to explore the carousel.
2. **Tap to Expand**:
   - Tap a card to open it in a detailed view.
3. **Close Transition**:
   - Tap the close button or background to collapse the card.

---

## Animations 📊

- **Carousel Animations**:
  - Focused card uses `scale` and `translateX` for emphasis.
  - Neighboring cards dim and shift using `opacity` and `translate`.

- **Expand Transition**:
  - **Zoom-in**: Expanding card scales up with `scale`.
  - **Fade-in**: Background and content fade into view with `opacity`.
  - **Slide-up**: Card content animates upwards using `translateY`.

- **Close Transition**:
  - **Zoom-out**: Collapsing card scales down.
  - **Fade-out**: Content fades out smoothly.
  - **Slide-down**: Card content animates downwards.

---

## File Structure 📂

```
├── components/
│   ├── SliderItem.tsx   # Individual card component
│   ├── ModalCard.tsx    # Expanded card view with animations
│   └── Slider.tsx       # Main carousel logic
├── assets/              # Image assets
├── app/index.tsx        # Entry point
├── package.json         # Dependencies
└── README.md            # Project description
```
---

## License 📚

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Acknowledgements ❤️

- Inspired by interactive UI patterns and modern mobile design trends.
- Thanks to **React Native Reanimated** and **Expo** for making animations fun and accessible.
