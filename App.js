import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import colors from "./app/config/colors";
import Home from "./app/screens/Home";
import TaskList from "./app/screens/TaskList";
export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Tasks" component={TaskList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
