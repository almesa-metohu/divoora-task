import { Text, YStack, Image, XStack } from 'tamagui';
import { FlatList, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { router } from 'expo-router';

import { FadeAnimatedView } from '@/components';
import { RootState } from '@/src/store/store';
import { routerPaths } from '@/constants/routerPaths';

export const SpecialForYou = () => {
  const menuItems = useSelector((state: RootState) => state.ui.menuItems);

  return (
    <YStack mt={20} px={16}>
      <XStack justifyContent="space-between" mb={12} alignItems="center">
        <Text fontWeight="700" fontSize={20} color="$color">
          Special for You
        </Text>
        <TouchableOpacity
          onPress={() => router.push(routerPaths.allSpecialForYou)}
        >
          <Text color="$primary" fontWeight={500}>
            View All
          </Text>
        </TouchableOpacity>
      </XStack>

      <FlatList
        horizontal
        data={menuItems.slice(0, 5)}
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
              shadowOffset={{ width: 0, height: 2 }}
            >
              <Image
                source={{ uri: item.imageUrl }}
                style={{ width: '100%', height: 100 }}
              />
              <YStack px={8} py={8}>
                <Text fontWeight="600" color="$color">
                  {item.name}
                </Text>
                <Text fontSize={12} color="$colorSoft" numberOfLines={2}>
                  {item.description}
                </Text>
              </YStack>
            </YStack>
          </FadeAnimatedView>
        )}
      />
    </YStack>
  );
};
