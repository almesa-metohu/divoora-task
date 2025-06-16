import { Bell, MapPin } from 'phosphor-react-native';
import { FC } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { Text, XStack, YStack } from 'tamagui';

interface HomePageBannerProps {
  scrollY: Animated.SharedValue<number>;
}

export const HomePageBanner: FC<HomePageBannerProps> = ({ scrollY }) => {
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    height: interpolate(
      scrollY.value,
      [0, 200],
      [200, 100],
      Extrapolation.CLAMP,
    ),
  }));

  const contentAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(scrollY.value, [0, 120], [1, 0], Extrapolation.CLAMP),
    transform: [
      {
        translateY: interpolate(
          scrollY.value,
          [0, 120],
          [0, -20],
          Extrapolation.CLAMP,
        ),
      },
    ],
  }));

  return (
    <Animated.View
      style={[
        {
          backgroundColor: '#ce191b',
          borderBottomLeftRadius: 32,
          borderBottomRightRadius: 32,
          paddingHorizontal: 16,
          paddingTop: interpolate(
            scrollY.value,
            [0, 200],
            [26, 12],
            Extrapolation.CLAMP,
          ),
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 5,
        },
        containerAnimatedStyle,
      ]}
    >
      <XStack justifyContent="space-between" alignItems="center">
        <TouchableOpacity activeOpacity={0.8} style={{ width: '60%' }}>
          <XStack
            alignItems="center"
            backgroundColor="white"
            borderRadius={20}
            paddingHorizontal={12}
            height={40}
            gap={8}
          >
            <MapPin size={20} color="red" />
            <Text
              fontWeight="500"
              fontSize={14}
              color="black"
              numberOfLines={1}
              flex={1}
              ellipsizeMode="tail"
            >
              123 Main St, Springfield
            </Text>
          </XStack>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            padding: 10,
            borderRadius: 100,
          }}
        >
          <Bell color="red" weight="fill" size={20} />
        </TouchableOpacity>
      </XStack>
      <Animated.View
        style={[{ marginTop: 16, minHeight: 90 }, contentAnimatedStyle]}
      >
        <Text color="white" fontSize={22} fontWeight="700">
          Hungry? We’ve Got{'\n'}You Covered!
        </Text>

        <Image
          source={require('@/assets/images/banner-image.png')}
          style={{
            position: 'absolute',
            right: 0,
            bottom: -4,
            width: 150,
            height: 110,
            resizeMode: 'contain',
            zIndex: 1,
            borderBottomRightRadius: 32,
          }}
        />
      </Animated.View>
    </Animated.View>
  );
};
