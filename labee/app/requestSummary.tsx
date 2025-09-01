import { Image } from 'expo-image';
import {Text, TextInput, View, Button, Alert, StyleSheet} from 'react-native';
import { useRouter,useLocalSearchParams } from 'expo-router';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ConfirmFormComponent } from '@/components/forms/ConfirmFormComponent';
import { SummaryListComponent } from '@/components/lists/SummaryListComponent';

export default function RequestSummaryScreen() {

  const params = useLocalSearchParams();
  const { title, status, stripDate } = params;
  console.log(params)

  return (
     <ThemedView style={styles.container}>
        <ThemedView style={styles.content}>
            <View>
                <ThemedText style={styles.textTitleButton}>Resumen de la solicitud</ThemedText>
            </View>

            <View>
                <ThemedText style={styles.textSubtitleButton}>Numero de la solicitud :</ThemedText>
            </View>
            <View>
                <ThemedText style={styles.textSubtitleButton}>{title}</ThemedText>
            </View>
            <View>
                <ThemedText style={styles.textSubtitleButton}>Estado de la solicitud :</ThemedText>
            </View>
            <View>
                <ThemedText style={styles.textSubtitleButton}>{status}</ThemedText>
            </View>
            <View>
                <ThemedText style={styles.textSubtitleButton}>Franja de recolección :</ThemedText>
            </View>
            <View>
                <ThemedText style={styles.textSubtitleButton}>{stripDate}</ThemedText>
            </View>
            <View>
                <ThemedText style={styles.textSubtitleButton}>Origen : </ThemedText>
            </View>
            <View>
                <ThemedText style={styles.textSubtitleButton}>Laboratorio Clínico ESE salud Pereira - Sede El centro</ThemedText>
            </View>
            <View>
                <ThemedText style={styles.textSubtitleButton}>Destino :</ThemedText>
            </View>
            <View>
                <ThemedText style={styles.textSubtitleButton}>Unidad de Procesamiento - Torre Médica San Juan</ThemedText>
            </View>
        </ThemedView>
     </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: 'hidden',
  },
  textTitleButton: {
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 20,
  },
  textSubtitleButton: {
    color: "black",
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 16,
    marginTop: 20,
  }
});
