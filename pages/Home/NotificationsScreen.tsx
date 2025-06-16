import { router } from 'expo-router';
import { CaretLeft } from 'phosphor-react-native';
import { Appearance, TouchableOpacity } from 'react-native';
import { Text, useTheme, View, XStack, YStack } from 'tamagui';
import { EmptyNotificationMessage } from './components';

export const NotificationsScreen = () => {
  const theme = useTheme();
  const colorScheme = Appearance.getColorScheme();
  return (
    <YStack f={1} backgroundColor="$backgroundSubtle">
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
            Notifications
          </Text>
          <Text
            color="$headerColor"
            fontSize={14}
            numberOfLines={2}
            fontWeight={600}
          >
            Stay updated with the latest news and updates from us.
          </Text>
        </YStack>
      </XStack>

      <EmptyNotificationMessage />
    </YStack>
  );
};
