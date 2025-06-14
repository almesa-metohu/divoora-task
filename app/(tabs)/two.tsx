import { Text, View } from 'tamagui';

export default function TabTwoScreen() {
  return (
    <View
      flex={1}
      alignItems="center"
      justifyContent="center"
      backgroundColor="$background"
    >
      <Text fontSize={20} fontWeight="bold" color="$color">
        Tab Two
      </Text>
      <View
        marginVertical={30}
        height={1}
        width="80%"
        backgroundColor="$borderColor"
      />
    </View>
  );
}
