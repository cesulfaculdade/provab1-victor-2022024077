import { Text, View } from "react-native";
import { styles } from "./styles";

export function EmptyList() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Realizou todas as tarefas? Adicione tarefas a sua lista de
                pendências.
            </Text>
        </View>
    );
}
