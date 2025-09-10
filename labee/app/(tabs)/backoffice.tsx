import { Image } from 'expo-image';
import { Platform, StyleSheet, View, ScrollView } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { HeaderBackComponent } from '@/components/backoffice/HeaderBackComponent';
import { ButtonBackComponent } from '@/components/backoffice/ButtonBackComponent';
import { SectionButtonComponent } from '@/components/backoffice/SectionButtonComponent';

export default function BackOfficeScreen() {
  return (
     <ThemedView style={styles.container}>

      <ThemedView style={styles.content}>
        <View>
        <HeaderBackComponent />
        <ButtonBackComponent />
        </View>

        <SectionButtonComponent title="Rastrear pedido" text="sigue el contenido que muestra tu destino" icon="map-search" />
        <View style={[
        styles.container,
        {
          flexDirection: 'row',
          justifyContent: 'space-between',
        },
        ]}>
          <View style={{flex: 2}}>
            <SectionButtonComponent title="Trazabilidad" text="Verifica la cadena de frio durante el recorrido." icon="temperature" />
          </View>
          <View style={{flex: 2}}>
            <SectionButtonComponent title="Chat seguro" text="Comunícate con el repartidor en tiempo real." icon="dialog" />
          </View>
        </View>

        <SectionButtonComponent title="Recibir pedido" text="Escanea el QR para realizar la recepción de tu pedido." icon="bag-check" />
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
});


