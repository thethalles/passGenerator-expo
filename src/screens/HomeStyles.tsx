import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002B36',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    borderWidth: 2,
    borderColor: "#00cedc",
    borderRadius: 4,
    flexDirection: "column",
    alignSelf: "center",
    justifyContent: "center",
    marginBottom: 60,
    paddingVertical: 20,
    paddingHorizontal: 10
  },
  inputContainer: {
    width: "80%",
    flexDirection: "column",
    alignItems: "center",
  }
})