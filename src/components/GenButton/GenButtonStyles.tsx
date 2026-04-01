import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    passwordLengthContainer: {
        width: "90%",
        marginTop: 16,
    },
    passwordLengthLabel: {
        color: "#ffffff",
        marginBottom: 6,
        fontWeight: "600",
    },
    passwordLengthInput: {
        width: "100%",
        height: 45,
        borderWidth: 2,
        borderColor: "#02edb2",
        borderRadius: 5,
        backgroundColor: "#4e4e4e",
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "center",
        paddingHorizontal: 10,
    },
    button: {
        width: "90%",
        borderWidth: 2,
        borderColor: "#00eeff",
        borderRadius: 4,
        backgroundColor: "#005db3",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: 14,
        marginTop: 15,
        elevation: 3
    },
    buttonPressed: {
        backgroundColor: '#00cedc',
        borderColor: '#02edb2'
    },
    texto:{
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        letterSpacing: 0.25,
        lineHeight: 21
    }
})