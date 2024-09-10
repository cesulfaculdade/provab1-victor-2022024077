import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        maxWidth: 345,
        height: 44,
        flexDirection: "row",
        backgroundColor: "#FFFFFF",
        justifyContent: "space-between",
        borderRadius: 5,
    },
    btnRemove: {
        backgroundColor: "#E23C44",
        width: 44,
        height: 44,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    iconBtn: {
        color: "#FFFFFF",
        fontSize: 24,
    },
    text: {
        fontSize: 16,
        padding: 12,
    },
});
