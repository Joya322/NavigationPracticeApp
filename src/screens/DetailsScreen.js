import { useFocusEffect, useTheme } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { Text, View, StyleSheet } from "react-native";

const DetailsScreen = ({ route }) => {
  const { colors } = useTheme();

  const { id, name } = route.params || {};

  const [focusedText, setFocusedText] = useState("");

  useFocusEffect(
    useCallback(() => {
      setFocusedText("Details Focused");
      console.log(focusedText);
    })
  );

  // const data = route?.params;
  //   console.log(data.id);
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={{ color: colors.text }}>ID: {id}</Text>
      <Text style={{ color: colors.text }}>
        {name ? `Name: ${name}` : "Name not provided"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default DetailsScreen;
