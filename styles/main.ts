import {StyleSheet} from 'react-native'

export const myStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderColor: "green",
    borderWidth: 2,
    padding: 10,
    borderRadius: 15,
    margin: 5,
    color: "white",
  },
  card: {
    padding: 10,
    margin: 10,
    borderRadius: 15,
    backgroundColor: "#d604cf",
    width:"90%"
  },
  text: {
    color: "#ffffff",
  },
  label: {
    color: "#ffffff",
    marginBottom: 5,
    marginLeft: 15,
  },
  button: {
    backgroundColor: "white",
    margin: 10,
  },
  splash: {
    backgroundColor: "#d604cf",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  splashText: {
    color: "white",
    fontSize: 34,
    fontWeight: "bold",
    fontStyle: "italic",
  },
});
