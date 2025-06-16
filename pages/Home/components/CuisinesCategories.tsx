import { FadeAnimatedView } from '@/components';
import { routerPaths } from '@/constants/routerPaths';
import { RootState } from '@/src/store/store';
import { useRouter } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { Image, Text, XStack, YStack } from 'tamagui';

export const CuisinesCategories = () => {
  const cuisines = useSelector((state: RootState) => state.ui.cuisines);
  const router = useRouter();

  return (
    <YStack mt={12} px={16}>
      <XStack justifyContent="space-between" mb={12} alignItems="center">
        <Text fontWeight="700" fontSize={20} color="$color">
          Cuisines
        </Text>
        <TouchableOpacity onPress={() => router.push(routerPaths.allCuisines)}>
          <Text color="$primary" fontWeight={500}>
            View All
          </Text>
        </TouchableOpacity>
      </XStack>

      <XStack flexWrap="wrap" justifyContent="space-between">
        {cuisines.slice(0, 5).map((item, idx) => (
          <FadeAnimatedView
            key={idx}
            index={idx}
            style={{ marginBottom: 20, alignItems: 'center' }}
          >
            <TouchableOpacity style={{ alignItems: 'center' }}>
              <Image
                source={item.icon}
                style={{
                  width: 56,
                  height: 56,
                }}
              />
              <Text fontSize={12} mt={8} color="$color">
                {item.label}
              </Text>
            </TouchableOpacity>
          </FadeAnimatedView>
        ))}
      </XStack>
    </YStack>
  );
};
