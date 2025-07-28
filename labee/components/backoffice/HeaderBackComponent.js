import { Image } from 'expo-image';
import React, {useState} from 'react';
import {Text, TextInput, View, Button, Alert, StyleSheet} from 'react-native';
import { ThemedText } from '@/components/ThemedText';


export function HeaderBackComponent() {
    const onPress = () => {
        Alert.alert('You tapped the button!');
    };

    return(
    <View>
        <View style={[
        styles.container,
        {
          flexDirection: 'row',
          alignContent: 'space-around',
        },
        ]}>
            <View style={{flex: 1, alignItems:'flex-start'}}>
                <Image
                source={require('@/assets/images/map-point.png')}
                style={{width: 40, height: 40}}
                />
            </View>

            <View style={{flex: 4}}>
                <ThemedText>UBICACIÓN ACTUAL</ThemedText>
                <ThemedText>Carrera 7 # 40-40 Pereira</ThemedText>
            </View>
            <View style={{flex:1, alignItems:'flex-end'}}>
                <Image
                source={require('@/assets/images/company-logo.png')}
                style={{width: 40, height: 40}}
                />
            </View>
        </View>


        <View>
            <Text>Hola E.S.P Pereira, ten un buen dia.</Text>
        </View>
    </View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    marginBottom: 20
  },
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
    
  }

});
