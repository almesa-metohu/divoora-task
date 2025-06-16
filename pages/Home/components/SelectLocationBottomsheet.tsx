import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { forwardRef, useMemo } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { Text, YStack, XStack, useTheme } from 'tamagui';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/src/store/store';
import { setSelectedAddress } from '@/src/store/uiSlice';

const dummyAddresses = [
  '123 Main St, Springfield',
  '456 Elm St, Shelbyville',
  '789 Oak St, Capital City',
  '321 Maple Ave, Ogdenville',
  '159 Pine Rd, North Haverbrook',
];

export const SelectLocationBottomsheet = forwardRef<BottomSheetModal>(
  (props, ref) => {
    const theme = useTheme();
    const selected = useSelector(
      (state: RootState) => state.ui.selectedAddress,
    );
    const dispatch = useDispatch();

    const handleSelect = (address: string) => {
      dispatch(setSelectedAddress(address));
    };

    const snapPoints = useMemo(() => ['50%'], []);

    return (
      <BottomSheetModal
        ref={ref}
        index={0}
        snapPoints={snapPoints}
        enablePanDownToClose
        enableDynamicSizing
        backdropComponent={(props) => (
          <BottomSheetBackdrop
            {...props}
            appearsOnIndex={0}
            disappearsOnIndex={-1}
            pressBehavior="close"
          />
        )}
        handleIndicatorStyle={{
          backgroundColor: theme.color.val,
        }}
        backgroundStyle={{
          backgroundColor: theme.backgroundSubtle.val,
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
        }}
      >
        <BottomSheetView
          style={{ flex: 1, paddingHorizontal: 16, paddingVertical: 20 }}
        >
          <Text fontSize={18} fontWeight="700" mb={16} color="$color">
            Select Delivery Address
          </Text>

          <FlatList
            data={dummyAddresses}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleSelect(item)}>
                <XStack
                  p={14}
                  mb={10}
                  backgroundColor={
                    item === selected
                      ? theme.primary.val
                      : theme.backgroundSubtle.val
                  }
                  borderRadius={12}
                  borderWidth={1}
                  borderColor={
                    item === selected
                      ? theme.primaryHover.val
                      : theme.borderColor.val
                  }
                >
                  <Text
                    color={item === selected ? 'white' : theme.color.val}
                    fontWeight="600"
                  >
                    {item}
                  </Text>
                </XStack>
              </TouchableOpacity>
            )}
          />
        </BottomSheetView>
      </BottomSheetModal>
    );
  },
);
