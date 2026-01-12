import { createDrawerNavigator } from "@react-navigation/drawer";
import MainTabs from "./MainTabs";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Drawer = createDrawerNavigator();

const RootNavigator = ({ isDark, setIsDark }) => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="HomeTabs"
        component={MainTabs}
        options={{ drawerLabel: "Home" }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerLabel: "Profile",
          headerTitle: "My Profile"
        }}
      />
      <Drawer.Screen name="Settings">
        {(props) => (
          <SettingsScreen {...props} isDark={isDark} setIsDark={setIsDark} />
        )}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default RootNavigator;
