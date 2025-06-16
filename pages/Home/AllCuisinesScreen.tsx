import { useSelector } from 'react-redux';
import { RootState } from '@/src/store/store';
import { Text, YStack, Image, XStack, useTheme } from 'tamagui';
import { useRouter } from 'expo-router';
import { FlatList, TouchableOpacity } from 'react-native';
import { FadeAnimatedView } from '@/components';
import { CaretLeft } from 'phosphor-react-native';
import { Appearance } from 'react-native';

export const AllCuisinesScreen = () => {
  const cuisines = useSelector((state: RootState) => state.ui.cuisines);
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
            All Cuisines
          </Text>
          <Text
            color="$headerColor"
            fontSize={14}
            numberOfLines={2}
            fontWeight={600}
            style={{
              flexShrink: 1,
              lineHeight: 18,
              paddingRight: 2,
            }}
          >
            Browse a diverse selection of cuisines tailored to every taste.
          </Text>
        </YStack>
      </XStack>

      <FlatList
        data={cuisines}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 16 }}
        keyExtractor={(item, index) => item.id || index.toString()}
        renderItem={({ item, index }) => (
          <FadeAnimatedView index={index} style={{ flex: 1, margin: 8 }}>
            <TouchableOpacity
              style={{
                marginBottom: 10,
                alignItems: 'center',
                backgroundColor: theme.background.val,
                borderRadius: 16,
                padding: 16,
                shadowColor: 'black',
                shadowOpacity: 0.06,
                shadowRadius: 6,
                shadowOffset: { width: 0, height: 3 },
              }}
            >
              <Image
                source={item.icon}
                width={56}
                height={56}
                style={{ marginBottom: 8 }}
              />
              <Text
                fontSize={14}
                fontWeight="600"
                textAlign="center"
                color="$color"
              >
                {item.label}
              </Text>
            </TouchableOpacity>
          </FadeAnimatedView>
        )}
      />
    </YStack>
  );
};

export default AllCuisinesScreen;
