import { MagnifyingGlass } from 'phosphor-react-native';
import { Input, XStack, View, useTheme } from 'tamagui';
import Animated, {
  interpolate,
  useAnimatedStyle,
  Extrapolation,
} from 'react-native-reanimated';
import { FC } from 'react';

interface Props {
  snapped: Animated.SharedValue<number>;
}

export const HomeSearchBar: FC<Props> = ({ snapped }) => {
  const theme = useTheme();

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(snapped.value, [0, 1], [180, 80]),
      },
    ],
  }));

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
        backgroundColor={theme.background.val}
        borderRadius={24}
        paddingHorizontal={16}
        paddingVertical={10}
        shadowColor={theme.color.val}
        shadowOpacity={0.08}
        shadowRadius={6}
        width="90%"
        maxWidth={500}
      >
        <XStack alignItems="center" gap={8}>
          <MagnifyingGlass size={20} color={theme.colorSoft.val} />
          <Input
            flex={1}
            borderWidth={0}
            placeholder="What do you want to eat?"
            placeholderTextColor={theme.colorSoft.val}
            backgroundColor="transparent"
            height={36}
          />
        </XStack>
      </View>
    </Animated.View>
  );
};
