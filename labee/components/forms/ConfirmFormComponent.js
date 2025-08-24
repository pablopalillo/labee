import React, {useState} from 'react';
import {Text, TextInput, View, Button, Alert, StyleSheet} from 'react-native';
import { useRouter } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';

export function ConfirmFormComponent() {
    const router = useRouter();
    const onPress = () => {
        Alert.alert('You tapped the button!');
        router.navigate('/backoffice');
    };

    return(
    <View style={styles.formContainer}>
        <form style={styles.formContainer}>
        <View>
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
        </View>

        <View style={styles.buttonWrapper}>
          <Button color="#1CC09A" onPress={onPress} placeholderTextColor="#FFFFFF" title="CONFIRMAR PEDIDO" />
        </View>
       

        </form>

    </View>)
}

const styles = StyleSheet.create({
  formContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
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
    marginTop: 30,
    
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
