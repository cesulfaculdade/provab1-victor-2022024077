import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

export function InputText() {
    const jose = useState();
    const handleAddTarefa = () => {};

    return (
        <View style={styles.handleInput}>
            <TextInput
                style={styles.inputText}
                placeholder="Descrição da tarefa"
            />
            <TouchableOpacity style={styles.btnAdd} onPress={handleAddTarefa}>
                <Text style={styles.iconBtn}>+</Text>
            </TouchableOpacity>
        </View>
    );
}
