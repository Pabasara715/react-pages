import { createStackNavigator } from "@react-navigation/stack";

import ActivityInformation from "../Screens/ActivityScreens/ActivityInformation";
import SignUp from "../Screens/LoginScreen/SignUp";
import Login from "../Screens/LoginScreen/Login";
import Preferences from "../Screens/LoginScreen/Preferences";
import Avatar from "../Screens/LoginScreen/Avatar";
import TabNavigation from "./TabNavigation";

const Stack = createStackNavigator();

function LoginNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Preferences" component={Preferences} />
      <Stack.Screen name="Avatar" component={Avatar} />
      <Stack.Screen name="TabNavigation" component={TabNavigation} />
    </Stack.Navigator>
  );
}

export default LoginNavigation;
