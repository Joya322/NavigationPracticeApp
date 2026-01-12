import { useTheme } from "@react-navigation/native";
import { useState } from "react";
import { Text, View, StyleSheet, ScrollView, TextInput } from "react-native";

const ExploreScreen = () => {
  const { colors } = useTheme();

  const [searchText, setSearchText] = useState("");

  return (
    <View>
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        value={searchText}
        onChangeText={setSearchText}
      />

      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Text style={{ color: colors.text }}>Explore content here...</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
    marginHorizontal: 10
  },
  item: {
    paddingVertical: 10,
    fontSize: 16,
  },
});

export default ExploreScreen;
