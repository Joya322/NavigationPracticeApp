import { useState } from "react";
import RootNavigator from "./src/Navigation/RootNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { DarkTheme, LightTheme } from "./src/theme/appTheme";
import { linking } from "./src/utils/deepLinkConfig";

export default function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <NavigationContainer
      theme={isDark ? DarkTheme : LightTheme}
      linking={linking}
      fallback={<></>}
    >
      <RootNavigator isDark={isDark} setIsDark={setIsDark} />
    </NavigationContainer>
  );
}
