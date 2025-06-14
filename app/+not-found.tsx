import { Link, Stack } from 'expo-router';
import { Text, YStack } from 'tamagui';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <YStack
        flex={1}
        alignItems="center"
        justifyContent="center"
        padding="$5"
        space="$4"
      >
        <Text fontSize={20} fontWeight="bold" color="$color">
          This screen doesn't exist.
        </Text>
        <Link href="/" asChild>
          <Text
            marginTop="$3"
            paddingVertical="$3"
            fontSize={14}
            color="$primary"
            textAlign="center"
          >
            Go to home screen!
          </Text>
        </Link>
      </YStack>
    </>
  );
}
