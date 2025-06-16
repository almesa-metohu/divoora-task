import { FadeAnimatedView } from '@/components';
import { RootState } from '@/src/store/store';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { Image, Text, View, useTheme } from 'tamagui';
import { FallbackImage } from './FallbackImage';

export const FoodCategoriesGrid = () => {
  const categories = useSelector((state: RootState) => state.ui.categories);
  const theme = useTheme();

  return (
    <View
      flexWrap="wrap"
      flexDirection="row"
      justifyContent="space-between"
      px={16}
      mt={24}
    >
      {categories.map((item, index) => (
        <FadeAnimatedView
          key={index}
          index={index}
          style={{
            width: '22%',
            marginVertical: 12,
            alignItems: 'center',
          }}
        >
          <TouchableOpacity style={{ alignItems: 'center' }}>
            <Image
              source={item.icon}
              style={{
                width: 48,
                height: 48,
                backgroundColor: theme.background.val,
                borderRadius: 12,
              }}
            />
            <Text fontSize={12} mt={8} textAlign="center">
              {item.label}
            </Text>
          </TouchableOpacity>
        </FadeAnimatedView>
      ))}
    </View>
  );
};
