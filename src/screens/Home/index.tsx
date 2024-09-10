import { Text, View } from "react-native";
import { styles } from "./styles";
import { InputText } from "../../components/InputText";
import { EmptyList } from "../../components/EmptyList";
import { Tarefa } from "../../components/Tarefa";

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
            <Text style={styles.textTitle}>Tarefas Pendentes</Text>
            <EmptyList />
            <Tarefa />
        </View>
    );
}
