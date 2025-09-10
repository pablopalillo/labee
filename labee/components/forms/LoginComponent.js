import React, {useState} from 'react';
import {Text, TextInput, View, Button, Alert, StyleSheet} from 'react-native';
import { useRouter } from 'expo-router';

export function LoginComponent() {
    const router = useRouter();
    const onPress = () => {
        router.navigate('/backoffice');
    };

    return(
    <View style={styles.formContainer}>
        <View style={styles.formControl}>
        <TextInput 
        style={styles.input}
        placeholder="Ingresa tu Email"
        //onChangeText={newText => setText(newText)}
        defaultValue=""
        />
        </View>
        <View style={styles.formControl}>
        <TextInput
        style={styles.input}
        placeholder="Ingresa tu Contraseña"
        secureTextEntry={true}
        autoCapitalize="none"
        spellCheck={false}
        //onChangeText={newText => setText(newText)}
        defaultValue=""
        />
        </View>

        <View style={styles.buttonWrapper}>
          <Button color="#1CC09A" onPress={onPress} placeholderTextColor="#FFFFFF" title="INGRESAR" />
        </View>
    </View>)
}

const styles = StyleSheet.create({
  formContainer: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
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
    marginTop: 30,
    
  }

});
