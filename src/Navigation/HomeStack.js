import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "./../screens/DetailsScreen";
import { Button } from "react-native";
import { useTheme } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  const { colors } = useTheme();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: "Home",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerRight: () => (
            <Button title="Info" onPress={() => alert("Info Pressed")} />
          ),
        }}
      />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
