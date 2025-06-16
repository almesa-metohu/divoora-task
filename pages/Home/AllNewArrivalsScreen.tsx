import { useSelector } from 'react-redux';
import { RootState } from '@/src/store/store';
import { Text, YStack, Image, XStack, useTheme } from 'tamagui';
import { useRouter } from 'expo-router';
import { FlatList, TouchableOpacity } from 'react-native';
import { FadeAnimatedView } from '@/components';
import { CaretLeft, Star } from 'phosphor-react-native';
import { Appearance } from 'react-native';
import { FallbackImage } from './components';

export const AllNewArrivalsScreen = () => {
  const newRestaurants = useSelector(
    (state: RootState) => state.ui.newRestaurants,
  );
  const router = useRouter();
  const theme = useTheme();
  const colorScheme = Appearance.getColorScheme();

  return (
    <YStack flex={1} backgroundColor="$backgroundSubtle">
      <XStack
        backgroundColor="$primary"
        borderBottomLeftRadius={16}
        borderBottomRightRadius={16}
        gap={16}
        px={16}
        py={12}
        alignItems="center"
      >
        <TouchableOpacity
          onPress={() => router.back()}
          style={{
            padding: 8,
            borderRadius: 999,
            backgroundColor:
              colorScheme === 'dark'
                ? 'rgba(255,255,255,0.1)'
                : 'rgba(0,0,0,0.05)',
          }}
        >
          <CaretLeft color={theme.headerColor.val} />
        </TouchableOpacity>
        <YStack gap={4} width="90%">
          <Text fontSize={22} fontWeight="700" color="$headerColor">
            New Arrivals
          </Text>
          <Text
            color="$headerColor"
            fontSize={14}
            numberOfLines={2}
            fontWeight={600}
            style={{ lineHeight: 18, paddingRight: 2 }}
          >
            Discover the latest restaurants added to the platform.
          </Text>
        </YStack>
      </XStack>
      <FlatList
        data={newRestaurants}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 16 }}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <FadeAnimatedView index={index} style={{ flex: 1, margin: 8 }}>
            <TouchableOpacity
              style={{
                backgroundColor: theme.background.val,
                borderRadius: 16,
                overflow: 'hidden',
                shadowColor: 'black',
                shadowOpacity: 0.06,
                shadowRadius: 6,
                shadowOffset: { width: 0, height: 3 },
              }}
            >
              <FallbackImage
                source={{ uri: item.logoUrl }}
                fallbackSource={require('@/assets/images/fallback-image.png')}
                style={{ width: '100%', height: 120 }}
                borderRadius={12}
              />

              <YStack px={12} py={10} gap={4}>
                <Text fontWeight="700" numberOfLines={1} color="$color">
                  {item.name}
                </Text>
                <XStack alignItems="center" gap={4}>
                  <Star weight="fill" size={14} color="#FFC529" />
                  <Text fontSize={12} color="$color">
                    {item.rating} • {item.deliveryTime} min • Min{' '}
                    {item.minOrder}€
                  </Text>
                </XStack>
                <Text fontSize={12} color="$colorSoft" numberOfLines={1}>
                  {item.tags?.join(', ')}
                </Text>
              </YStack>
            </TouchableOpacity>
          </FadeAnimatedView>
        )}
      />
    </YStack>
  );
};

export default AllNewArrivalsScreen;
