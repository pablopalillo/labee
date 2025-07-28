import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { HeaderBackComponent } from '@/components/backoffice/HeaderBackComponent';
import { ButtonBackComponent } from '@/components/backoffice/ButtonBackComponent';

export default function BackOfficeScreen() {
  return (
     <ThemedView style={styles.container}>

      <ThemedView style={styles.content}>
        <HeaderBackComponent />
        <ButtonBackComponent />
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


