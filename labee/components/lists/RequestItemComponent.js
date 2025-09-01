import { Image } from 'expo-image';
import React, {useState} from 'react';
import {Text, TextInput, View, Button, Alert, StyleSheet, Pressable} from 'react-native';
import { useRouter } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';


export function RequestItemComponent(props) {
    const router = useRouter();
    const onPress = (title, status, stripDate) => {
        Alert.alert('You tapped the button!');
        router.navigate({
          pathname: '/requestSummary',
          params: { title, status, stripDate },
        });
    };

    return(
    <View>
        <Pressable onPress={() => onPress(props.title,props.status, props.stripDate )}>
        <View style={[styles.container, styles.borderRequest]}>
          <ThemedText style={styles.itemTitle}>Solicitud: {props.title}</ThemedText>
          <ThemedText style={styles.itemSubtitle}>Fecha de la solicitud: {props.date}</ThemedText>
          <ThemedText style={styles.itemSubtitle}>Fecha de recolección: {props.stripDate}</ThemedText>
          <ThemedText style={styles.itemSubtitle}>Estado: {props.status}</ThemedText>
              
          
            <ThemedText style={styles.detailsSubtitle}>Más detalles</ThemedText>    
        </View>
        </Pressable>
    </View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    marginBottom: 5
  },
  borderRequest: {
    borderWidth: 1,
    borderColor: '#d8d8d8d7',
    borderStyle: 'solid',
    borderRadius: 12,
    padding: 15,
  },
  buttonWrapper: {
    width: '100%',
    marginTop: 30,
    
  },
  itemTitle: {
    color: "black",
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 16,
  },
  itemSubtitle: {
    color: "#7F8D88",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 16,
  },

  detailsSubtitle: {
    color: "#7F8D88",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 16,
    marginTop: 5,
    textAlign: 'right'
  }

});
