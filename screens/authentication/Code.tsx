import React, { useState } from "react";
import { Pressable, SafeAreaView, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { CommonActions } from "@react-navigation/native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

import styles from "../../styles/authentication/code";

const CELL_COUNT = 6;
type RootStackParamList = {
  Home: undefined; // No parameters expected
  Details: { itemId: number; otherParam: string }; // Parameters expected
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};

const Code = ({ navigation }: HomeScreenProps) => {
  const [value, setValue] = useState<string>("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.back_container}>
        <Ionicons
          style={styles.back_button}
          name="arrow-back"
          size={33}
          color="black"
          onPress={() => navigation.dispatch(CommonActions.goBack())}
        />
      </View>
      <View style={styles.top_container}>
        <Text style={styles.title}>Please Verify Your Account</Text>
        <Text style={styles.sub_title}>We have sent you a verification code to your email. Please enter it below.</Text>
      </View>
      
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <View
            // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
            onLayout={getCellOnLayoutHandler(index)}
            key={index}
            style={[styles.cellRoot, isFocused && styles.focusCell]}
          >
            <Text style={styles.cellText}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Code;