import { Text, View, StyleSheet, Button } from "react-native";
import { useTheme } from "@react-navigation/native";

const AboutScreen = ({ navigation }) => {
  const { colors } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={{ marginBottom: 10, color: colors.text }}>
        This app demonstrates React Navigation
      </Text>
      <Button
        title="Open Profile"
        onPress={() => navigation.navigate("Profile")}
        
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

export default AboutScreen;
