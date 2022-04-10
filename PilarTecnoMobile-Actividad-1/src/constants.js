import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert,
} from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const theme = {
  colors: {
    primary: "cyan",
    active: "#fca311",
    inactive: "#8e8e93",
    bar: "#293847",
  },
  Button: {
    buttonStyle: "red",
    titleStyle: {
      color: "#293847",
      fontWeight: "bold",
    },
  },
  headerHeight: height / 8,
};
