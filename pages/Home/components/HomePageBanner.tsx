import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { Bell, MapPin } from 'phosphor-react-native';
import { FC, useRef } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  Extrapolation,
} from 'react-native-reanimated';
import { Text, XStack, YStack, useTheme } from 'tamagui';
import { SelectLocationBottomsheet } from './SelectLocationBottomsheet';
import { useSelector } from 'react-redux';
import { RootState } from '@/src/store/store';
import { router } from 'expo-router';
import { routerPaths } from '@/constants/routerPaths';

interface Props {
  snapped: Animated.SharedValue<number>;
}

export const HomePageBanner: FC<Props> = ({ snapped }) => {
  const theme = useTheme();
  const locationBottomSheetRef = useRef<BottomSheetModal>(null);
  const selectedAddress = useSelector(
    (state: RootState) => state.ui.selectedAddress,
  );
  const containerStyle = useAnimatedStyle(() => ({
    height: interpolate(snapped.value, [0, 1], [200, 100], Extrapolation.CLAMP),
  }));

  const contentStyle = useAnimatedStyle(() => ({
    opacity: interpolate(snapped.value, [0, 1], [1, 0], Extrapolation.CLAMP),
    transform: [
      {
        translateY: interpolate(
          snapped.value,
          [0, 1],
          [0, -20],
          Extrapolation.CLAMP,
        ),
      },
    ],
  }));

  const paddingTop = interpolate(
    snapped.value,
    [0, 1],
    [26, 12],
    Extrapolation.CLAMP,
  );

  return (
    <>
      <Animated.View
        style={[
          {
            backgroundColor: theme.primary.val,
            borderBottomLeftRadius: 28,
            borderBottomRightRadius: 28,
            paddingHorizontal: 16,
            paddingTop,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 5,
          },
          containerStyle,
        ]}
      >
        <XStack justifyContent="space-between" alignItems="center">
          <TouchableOpacity
            activeOpacity={0.8}
            style={{ width: '60%' }}
            onPress={() => locationBottomSheetRef.current?.present()}
          >
            <XStack
              alignItems="center"
              backgroundColor={theme.background.val}
              borderRadius={20}
              paddingHorizontal={12}
              height={40}
              gap={8}
            >
              <MapPin size={20} color={theme.primary.val} weight="fill" />
              <Text
                fontWeight="500"
                fontSize={14}
                color="$color"
                numberOfLines={1}
                flex={1}
                ellipsizeMode="tail"
              >
                {selectedAddress}
              </Text>
            </XStack>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: theme.background.val,
              padding: 10,
              borderRadius: 100,
            }}
            onPress={() => router.push(routerPaths.notifications)}
          >
            <Bell color={theme.primary.val} weight="fill" size={20} />
          </TouchableOpacity>
        </XStack>

        <Animated.View style={[{ marginTop: 16, minHeight: 90 }, contentStyle]}>
          <Text color="$headerColor" fontSize={22} fontWeight="700" width="60%">
            Hungry? We’ve Got You Covered!
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
      <SelectLocationBottomsheet ref={locationBottomSheetRef} />
    </>
  );
};
