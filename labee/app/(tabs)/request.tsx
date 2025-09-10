import { Image } from 'expo-image';
import {View, StyleSheet, Text, ScrollView} from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { RequestItemComponent } from '@/components/lists/RequestItemComponent';

export default function RequestScreen() {
    const getCurrentDate = function() {
    const fecha = new Date();

    const dias = [
        "domingo", "lunes", "martes", "miércoles",
        "jueves", "viernes", "sábado"
    ];

    const meses = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio",
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];

    const nombreDia = dias[fecha.getDay()];
    const dia = fecha.getDate();
    const nombreMes = meses[fecha.getMonth()];
    const año = fecha.getFullYear();

    return `${capitalizar(nombreDia)}, ${dia} de ${nombreMes} de ${año}`;
    }

    function capitalizar(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
    }

  return (
     <ThemedView style={styles.container}>
        <ScrollView style={styles.content}>
            <View>
                <Text style={styles.textTitleButton}>Solicitudes</Text>
            </View>

            <View>
                <Text style={styles.textSubtitleButton}>Hoy</Text>
            </View>
            <ScrollView>
                <RequestItemComponent title="#00004" date={getCurrentDate()} stripDate="9:00 am - 01:00 am " status="En proceso" />
            </ScrollView>
            <ScrollView>
                <Text style={styles.textSubtitleButton}>Lunes, 13 de mayo</Text>
            </ScrollView>
            <ScrollView>
                <RequestItemComponent title="#00003" date="13 de mayo de 2025" stripDate="06:00 am - 07:00 am" status="Cancelado" />
            </ScrollView>
            <ScrollView>
                <RequestItemComponent title="#00004" date="13 de mayo de 2025" stripDate="05:00 pm -07:00 pm" status="Entregados" />
            </ScrollView>
            <ScrollView>
                <Text style={styles.textSubtitleButton}>Lunes, 2 de marzo</Text>
            </ScrollView>
            <ScrollView>
                <RequestItemComponent title="#00004" date="02 de marzo de 2025" stripDate="9:00 am - 01:00 am" status="Cancelado" />
            </ScrollView>
        </ScrollView>
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
    marginTop: 5,
  }
});
