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
        <ThemedText color="white">Recibir el pedido</ThemedText>
      </View>

      <View>
          <ThemedText color="white">Escanea el QR para realizar</ThemedText>
          <ThemedText color="white">la recepción del pedido</ThemedText>
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



});
