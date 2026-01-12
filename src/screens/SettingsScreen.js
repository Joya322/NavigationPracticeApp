import { useTheme } from "@react-navigation/native";
import { View, Text, StyleSheet, Switch } from "react-native";

const SettingsScreen = ({ isDark, setIsDark }) => {
  const { colors } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={{color: colors.text}}>Dark Mode</Text>
      <Switch value={isDark} onValueChange={setIsDark} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SettingsScreen;
