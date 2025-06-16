import { View } from 'tamagui';
import { HomePageBanner, HomeSearchBar } from './components';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  Extrapolation,
} from 'react-native-reanimated';

export const HomePage = () => {
  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  return (
    <View flex={1}>
      <HomePageBanner scrollY={scrollY} />
      <HomeSearchBar scrollY={scrollY} />
      <Animated.ScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingTop: 300 }}
      >
        <View height={1000} />
      </Animated.ScrollView>
    </View>
  );
};
