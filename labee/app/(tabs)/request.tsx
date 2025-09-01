import { Image } from 'expo-image';
import {View, StyleSheet} from 'react-native';

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
        <ThemedView style={styles.content}>
            <View>
                <ThemedText style={styles.textTitleButton}>Solicitudes</ThemedText>
            </View>

            <View>
                <ThemedText style={styles.textSubtitleButton}>Hoy</ThemedText>
            </View>
            <View>
                <RequestItemComponent title="#00004" date={getCurrentDate()} stripDate="9:00 am - 01:00 am " status="En proceso" />
            </View>
            <View>
                <ThemedText style={styles.textSubtitleButton}>Lunes, 13 de mayo</ThemedText>
            </View>
            <View>
                <RequestItemComponent title="#00003" date="13 de mayo de 2025" stripDate="06:00 am - 07:00 am" status="Cancelado" />
            </View>
            <View>
                <RequestItemComponent title="#00004" date="13 de mayo de 2025" stripDate="05:00 pm -07:00 pm" status="Entregados" />
            </View>
            <View>
                <ThemedText style={styles.textSubtitleButton}>Lunes, 2 de marzo</ThemedText>
            </View>
            <View>
                <RequestItemComponent title="#00004" date="02 de marzo de 2025" stripDate="9:00 am - 01:00 am" status="Cancelado" />
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
    marginTop: 5,
  }
});
