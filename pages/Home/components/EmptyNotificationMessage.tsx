import { BellRinging } from 'phosphor-react-native';
import { YStack, Text, XStack } from 'tamagui';

export const EmptyNotificationMessage = () => {
  return (
    <YStack alignItems="center" mt={40} px={24}>
      <BellRinging size={48} color="#ce191b" weight="duotone" />
      <Text fontSize={18} fontWeight="700" mt={16} color="$color">
        You’re All Caught Up!
      </Text>
      <Text fontSize={14} color="$colorSoft" mt={8} textAlign="center">
        No new notifications for now. We’ll let you know when something happens.
      </Text>
    </YStack>
  );
};
