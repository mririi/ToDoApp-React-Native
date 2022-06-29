import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  StatusBar,
} from "react-native";
import colors from "../../app/config/colors";
function Home({ navigation }) {
  const goToTasks = () => {
    navigation.navigate("Tasks");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Easy task app!</Text>
      <View style={styles.buttonView}>
        <TouchableOpacity onPress={goToTasks} style={styles.button}>
          <Text style={styles.buttontext}>Start doing !</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
  },
  text: {
    fontSize: 40,
    marginTop: "40%",
    fontWeight: "bold",
    color: colors.textWhite,
  },
  buttonView: {
    position: "absolute",
    bottom: "20%",
  },
  button: {
    borderRadius: 15,
    padding: 10,
    backgroundColor: colors.secondary,
  },
  buttontext: {
    color: colors.textWhite,
    fontSize: 20,
    fontWeight: "bold",
  },
});
export default Home;
