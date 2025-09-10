import React, {useState} from 'react';
import {Text, TextInput, View, Button, Alert, StyleSheet, ScrollView} from 'react-native';
import { useRouter } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';

export function ConfirmFormComponent() {
    const router = useRouter();
    const onPress = () => {
        router.navigate('/backoffice');
    };

    return(
    <View style={styles.formContainer}>
        <View style={styles.formControl}>
        <View>
            <ThemedText style={styles.textTitle}>Información de quien recibe:</ThemedText>
        </View>
        <View>
            <ThemedText style={styles.textSubtitle}>Nombre de la persona que recibe:</ThemedText>
        </View>
        <TextInput 
        style={styles.input}
        placeholder="Ingresa el nombre"
        //onChangeText={newText => setText(newText)}
        defaultValue=""
        />
   
        <Button color="#1CC09A" onPress={onPress} placeholderTextColor="#FFFFFF" title="CONFIRMAR PEDIDO" />
      
        </View>

    </View>)
}

const styles = StyleSheet.create({
  formContainer: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'top',
    gap: 8,
  },

  formControl: {
    width: '100%',
    flex:1,
  },

  input: {
    width: '100%',
    height: 55,
    borderRadius: 12,
    padding: 20,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#D8D8D8',
  },

  buttonWrapper: {
    width: '100%',
  },
  textTitle: {
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 20,
  },
  textSubtitle: {
    color: "black",
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 16,
    marginTop: 20,
  }
});
