// HomeSearchBar.tsx
import { MagnifyingGlass } from 'phosphor-react-native';
import { Input, XStack, View } from 'tamagui';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { FC } from 'react';

interface HomeSearchBarProps {
  scrollY: Animated.SharedValue<number>;
}

export const HomeSearchBar: FC<HomeSearchBarProps> = ({ scrollY }) => {
  const animatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      scrollY.value,
      [0, 100],
      [180, 80],
      Extrapolation.CLAMP,
    );

    return {
      transform: [{ translateY }],
    };
  });

  return (
    <Animated.View
      style={[
        animatedStyle,
        {
          position: 'absolute',
          left: 0,
          right: 0,
          zIndex: 10,
          alignItems: 'center',
        },
      ]}
    >
      <View
        backgroundColor="white"
        borderRadius={24}
        paddingHorizontal={16}
        paddingVertical={10}
        shadowColor="black"
        shadowOpacity={0.08}
        shadowRadius={6}
        width="90%"
        maxWidth={500}
      >
        <XStack alignItems="center" gap={8}>
          <MagnifyingGlass size={20} color="#999" />
          <Input
            flex={1}
            borderWidth={0}
            placeholder="What do you want to eat?"
            placeholderTextColor="#999"
            backgroundColor="transparent"
            height={32}
          />
        </XStack>
      </View>
    </Animated.View>
  );
};
