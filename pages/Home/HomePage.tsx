import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import { Spinner, View } from 'tamagui';
import {
  CuisinesCategories,
  FoodCategoriesGrid,
  HomePageBanner,
  HomeSearchBar,
  NewArrivals,
  SpecialForYou,
} from './components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/src/store/store';
import { useEffect } from 'react';
import { loadDataRequest } from '@/src/store/uiSlice';
import { RefreshControl } from 'react-native';
import { useCallback, useState } from 'react';

export const HomePage = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    setTimeout(() => {
      dispatch(loadDataRequest());
      setRefreshing(false);
    }, 1500);
  }, []);

  const scrollY = useSharedValue(0);
  const snapped = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  useDerivedValue(() => {
    snapped.value = withTiming(scrollY.value > 120 ? 1 : 0, { duration: 200 });
  });

  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.ui);

  useEffect(() => {
    dispatch(loadDataRequest());
  }, []);

  return (
    <View flex={1} backgroundColor="$backgroundSubtle">
      <HomePageBanner snapped={snapped} />
      <HomeSearchBar snapped={snapped} />
      {loading ? (
        <View flex={1} justifyContent="center" alignItems="center">
          <Spinner size="large" color="$primary" />
        </View>
      ) : (
        <Animated.ScrollView
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          contentContainerStyle={{
            paddingTop: 220,
            backgroundColor: '#00000000',
          }}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={['#ce191b']}
              tintColor="#ce191b"
            />
          }
        >
          <FoodCategoriesGrid />
          <CuisinesCategories />
          <SpecialForYou />
          <NewArrivals />
        </Animated.ScrollView>
      )}
    </View>
  );
};
