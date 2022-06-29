import Checkbox from "expo-checkbox";
import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import colors from "../config/colors";

function TaskList() {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.titlexbutton}>
        <Text style={styles.text}>TaskList</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttontext}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tasklist}>
        <View style={styles.task}>
          <Text style={styles.tasktext}>meeting at 2am</Text>
          <Checkbox
            style={styles.checkbox}
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
    paddingTop: StatusBar.currentHeight + 10,
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
    color: colors.textWhite,
    flex: 10,
  },
  buttonView: {
    position: "absolute",
    bottom: "20%",
  },
  buttontext: {
    fontSize: 25,
    color: colors.textWhite,
  },
  button: {
    borderRadius: 15,
    right: 8,
    flex: 1,
    padding: 10,
    alignItems: "center",
    backgroundColor: colors.secondary,
  },
  tasktext: {
    color: colors.textWhite,
    fontSize: 30,
    flex: 8,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  checkbox: {
    right: 1,
    flex: 1,
    borderRadius: 5,
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    width: 50,
    height: 40,
  },
  titlexbutton: {
    width: "95%",
    flexDirection: "row",
  },
  tasklist: {
    marginTop: 10,
    flexDirection: "row",
  },
  task: {
    flexDirection: "row",
    backgroundColor: colors.secondary,
    padding: 10,
    flex: 1,
    margin: 10,
    borderRadius: 15,
  },
});
export default TaskList;
