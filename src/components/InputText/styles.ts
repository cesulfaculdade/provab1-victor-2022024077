import { StyleSheet } from "react-native";
import { InputText } from ".";

export const styles = StyleSheet.create({
    handleInput: {
        maxWidth: 345,
        height: 51,
        backgroundColor: "#EAEAEA",
        borderRadius: 5,
        flexDirection: "row",
    },
    inputText: {
        padding: 16,
        color: "#808080",
        fontSize: 16,
        fontWeight: "400",
        fontStyle: "normal",
    },
    btnAdd: {
        backgroundColor: "#31C667",
        width: 51,
        height: 51,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    iconBtn: {
        color: "#FFFFFF",
        fontSize: 24,
    },
});
