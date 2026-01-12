import { useFocusEffect, useTheme } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  const { colors } = useTheme();

  const [focusedText, setFocusedText] = useState("");

  useFocusEffect(
    useCallback(() => {
      setFocusedText("Home Screen Focused");
      console.log(focusedText);
    })
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={{ marginBottom: 12, color: colors.text }}>
        {focusedText}
      </Text>

      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate("Details", { id: 101, name: "Auvro" })
        }
      />
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

export default HomeScreen;
