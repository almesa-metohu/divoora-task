import React, { useEffect } from 'react';
import Animated, {
  useSharedValue,
  withTiming,
  withDelay,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { ViewStyle } from 'react-native';

interface Props {
  index: number;
  children: React.ReactNode;
  delayPerItem?: number;
  initialOffset?: number;
  style?: ViewStyle;
}

export const FadeAnimatedView = ({
  index,
  children,
  delayPerItem = 120,
  initialOffset = 20,
  style,
}: Props) => {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(initialOffset);

  useEffect(() => {
    opacity.value = withDelay(
      index * delayPerItem,
      withTiming(1, { duration: 350 }),
    );
    translateY.value = withDelay(
      index * delayPerItem,
      withTiming(0, { duration: 350 }),
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <Animated.View style={[style, animatedStyle]}>{children}</Animated.View>
  );
};
