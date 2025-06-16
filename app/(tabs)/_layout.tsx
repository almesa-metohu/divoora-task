import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';
import { useTheme } from 'tamagui';
import { HouseSimple } from 'phosphor-react-native';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.primary?.val ?? '#ce191b',
        tabBarInactiveTintColor: theme.colorSoft?.val ?? '#666666',
        tabBarStyle: { backgroundColor: theme.background?.val ?? '#fff' },
        headerStyle: { backgroundColor: theme.background?.val ?? '#fff' },
        headerTintColor: theme.color?.val ?? '#000',
        headerShadowVisible: true,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused, color }) => (
            <HouseSimple color={color} weight={focused ? 'fill' : 'regular'} />
          ),
        }}
      />
    </Tabs>
  );
}
