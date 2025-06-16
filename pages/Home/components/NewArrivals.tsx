import { Text, YStack, Image, XStack } from 'tamagui';
import { FlatList, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '@/src/store/store';
import { FadeAnimatedView } from '@/components';
import { router } from 'expo-router';
import { routerPaths } from '@/constants/routerPaths';
import { FallbackImage } from './FallbackImage';

export const NewArrivals = () => {
  const newRestaurants = useSelector(
    (state: RootState) => state.ui.newRestaurants,
  );

  return (
    <YStack mt={32} px={16}>
      <XStack justifyContent="space-between" mb={12} alignItems="center">
        <Text fontWeight="700" fontSize={20}>
          New Arrivals
        </Text>
        <TouchableOpacity
          onPress={() => router.push(routerPaths.allNewArrivals)}
        >
          <Text color="$primary" fontWeight={500}>
            View All
          </Text>
        </TouchableOpacity>
      </XStack>

      <FlatList
        horizontal
        data={newRestaurants.slice(0, 5)}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <FadeAnimatedView index={index}>
            <YStack
              width={160}
              backgroundColor="$background"
              borderRadius={16}
              mr={16}
              overflow="hidden"
              shadowColor="black"
              shadowOpacity={0.05}
              shadowRadius={4}
            >
              <FallbackImage
                source={{ uri: item.logoUrl }}
                fallbackSource={require('@/assets/images/fallback-image.png')}
                style={{ width: '100%', height: 120 }}
                borderRadius={12}
              />
              <Text py={14} px={8} fontWeight="600">
                {item.name}
              </Text>
            </YStack>
          </FadeAnimatedView>
        )}
      />
    </YStack>
  );
};
