import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function Tarefa() {
    const handleRemoveTarefa = () => {
        console.log("Tarefa removida!");
    };

    const tarefas = ["Tarefa Exemplo", "Tarefa Exemplo", "Tarefa Exemplo"];

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Aqui deveriam ir os valores da lista
            </Text>
            <TouchableOpacity
                style={styles.btnRemove}
                onPress={handleRemoveTarefa}
            >
                <Text style={styles.iconBtn}>-</Text>
            </TouchableOpacity>
        </View>
    );
}
