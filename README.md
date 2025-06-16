# Divoora Home Page Redesign

This project is a redesign of the Divoora app's Home Page built using **React Native**. It was created as part of a technical assessment for the React Native Developer position.

---

## Features

- Redesigned Home Page layout based on provided design
- Clear visual hierarchy with distinct sections
- Smooth animations using **Reanimated 2**:
  - Scroll-hiding header
  - Parallax banner image
  - Staggered card animations
- Light/Dark mode support using Tamagui tokens & theming
- State management with **Redux-Saga**
- Pull-to-refresh with `react-native-gesture-handler`
- Mocked data for cuisines, categories, restaurants, and meals

---

## 📂 Folder Structure

src/
├── components/ Reusable UI components
├── store/ Redux store + saga
├── screens/ Home, View All, etc.
├── constants/ Mock data
├── assets/ Images & icons


---


## Stack & Tools

- [React Native](https://reactnative.dev/)
- [Reanimated 2](https://docs.swmansion.com/react-native-reanimated/)
- [Redux Toolkit + Saga](https://redux-toolkit.js.org/)
- [Tamagui](https://tamagui.dev/) (design system & theming)
- [Expo Router](https://expo.github.io/router/)
- [BottomSheet Modal](https://github.com/gorhom/react-native-bottom-sheet)

---

## Getting Started

### 1. Clone & Install

```bash
git clone
cd divoora-homepage-redesign
npm install
npm start
```

## Architectural Notes
- The layout and theme are powered by Tamagui’s token-based system for consistency.
- Animations are performance-optimized via useAnimatedStyle, useSharedValue, and interpolate.
- State is centrally managed using Redux for UI-driven data (like restaurants, categories).
- Bottom sheets are controlled via React refs, with gestures supported by react-native-gesture-handler.