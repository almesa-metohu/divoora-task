import { Stack } from 'expo-router';

const Navigator = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      <Stack.Screen name="cuisines" />
      <Stack.Screen name="new-arrivals" />
      <Stack.Screen name="special-for-you" />
      <Stack.Screen name="notifications" />
    </Stack>
  );
};

const Layout = () => {
  return <Navigator />;
};

export default Layout;
