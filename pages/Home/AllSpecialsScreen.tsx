import { useSelector } from 'react-redux';
import { RootState } from '@/src/store/store';
import { Text, View, YStack, Image, XStack, useTheme } from 'tamagui';
import { useRouter } from 'expo-router';
import { FlatList, TouchableOpacity, Appearance } from 'react-native';
import { FadeAnimatedView } from '@/components';
import { CaretLeft } from 'phosphor-react-native';
import { FallbackImage } from './components';

export const AllSpecialsScreen = () => {
  const specials = useSelector((state: RootState) => state.ui.menuItems);
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

        <YStack gap={4} flex={1}>
          <Text fontSize={22} fontWeight="700" color="$headerColor">
            Special for You
          </Text>
          <Text
            color="$headerColor"
            fontSize={14}
            numberOfLines={2}
            fontWeight={600}
          >
            Hand-picked meals you'll love. See everything in one place.
          </Text>
        </YStack>
      </XStack>

      <FlatList
        data={specials}
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
                source={{ uri: item.imageUrl }}
                fallbackSource={require('@/assets/images/fallback-image.png')}
                style={{ width: '100%', height: 120 }}
                borderRadius={12}
              />
              <YStack px={12} py={10}>
                <Text fontWeight="600" numberOfLines={1} color="$color">
                  {item.name}
                </Text>
                <Text fontSize={12} color="$colorSoft" numberOfLines={2}>
                  {item.description}
                </Text>
              </YStack>
            </TouchableOpacity>
          </FadeAnimatedView>
        )}
      />
    </YStack>
  );
};

export default AllSpecialsScreen;
