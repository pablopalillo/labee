import { Image } from 'expo-image';
import { Platform, StyleSheet, View, ScrollView } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ConfirmFormComponent } from '@/components/forms/ConfirmFormComponent';
import { SummaryListComponent } from '@/components/lists/SummaryListComponent';

export default function ConfirmScreen() {
  return (
     <ThemedView style={styles.container}>
        <ThemedView style={styles.content}>
            <View>
                <ThemedText style={styles.textTitleButton}>Confirmación de la entrega</ThemedText>
            </View>

            <View>
                <ThemedText style={styles.textSubtitleButton}>Resumen del pedido</ThemedText>
            </View>
            <ScrollView>
                <SummaryListComponent title="Tubo tapa roja" units="x20 unds" info="2-8 c" icon="tubo" />
                <SummaryListComponent title="Frasco con formol" units="x20 unds" info="15-25 c" icon="frasco" />
                <SummaryListComponent title="Botella hemocultivo" units="x20 unds" info="2-8 c" icon="botella"  />
                <SummaryListComponent title="Hisopos con medio de trasporte" units="x20 unds" info="2-8 c" icon="hisopo"  />
            </ScrollView>
            <ScrollView>
                <ConfirmFormComponent />
            </ScrollView>
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


