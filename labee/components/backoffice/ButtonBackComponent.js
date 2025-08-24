import { Image } from 'expo-image';
import React, {useState} from 'react';
import {Text, TextInput, View, Button, Alert, StyleSheet} from 'react-native';
import { ThemedText } from '@/components/ThemedText';


export function ButtonBackComponent() {
    const onPress = () => {
        Alert.alert('You tapped the button!');
    };

    return(
    <View style={styles.buttonContainer}>
      <View>
        <ThemedText style={styles.textTitleButton}>Recibir el pedido</ThemedText>
      </View>

      <View>
          <ThemedText style={styles.textSubtitleButton}>Escanea el QR para realizar</ThemedText>
          <ThemedText style={styles.textSubtitleButton}>la recepción del pedido</ThemedText>
      </View>
    </View>)
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#1CC09A",
    color: 'white',
    borderRadius: '14px',
    padding: 10
  },
  textTitleButton: {
    color: "white",
    fontWeight: "bold",
  },
  textSubtitleButton: {
    color: "white",
    fontSize: 14,
    lineHeight: 16,
  }
});
