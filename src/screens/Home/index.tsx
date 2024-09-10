import { Text, View } from "react-native";
import { styles } from "./styles";
import { InputText } from "../../components/InputText";

export function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>Lista de Tarefas</Text>
                <Text style={styles.subTitle}>
                    Adicione suas atividades a lista de tarefas
                </Text>
            </View>
            <InputText />
        </View>
    );
}
