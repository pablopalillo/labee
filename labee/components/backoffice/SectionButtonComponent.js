import { Image } from 'expo-image';
import React, {useState} from 'react';
import {Text, TextInput, View, Button, Alert, StyleSheet} from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { useRouter } from 'expo-router';


export function SectionButtonComponent(props) {
    const router = useRouter();
    const onPress = () => {
        Alert.alert('You tapped the button!');
        router.navigate('/confirm');
    };

    const imageMap = {
      'map-point': require('@/assets/images/map-point.png'),
      'bag-check': require('@/assets/images/bag-check.png'),
      'dialog': require('@/assets/images/dialog.png'),
      'temperature': require('@/assets/images/temperature.png'),
      'map-search': require('@/assets/images/map-search.png'),
    };

    const icon = imageMap[props.icon] || imageMap['dialog'];

    return(
    <View style={styles.buttonContainer}>
      <View style={[
        styles.container,
        {
          flexDirection: 'row',
          alignContent: 'space-around',
          alignItems: 'center'
        },
        ]}>
        <Image
            source={icon}
            style={{ width: 20, height: 20}}
        />
        <ThemedText style={styles.textTitleButton}>{props.title}</ThemedText>
      </View>

      <View>
          <ThemedText style={styles.textDescription}>{props.text}</ThemedText>
      </View>
      <View style={styles.buttonWrapper}>
        <Button style={styles.buttonInternal} color="#1CC09A" onPress={onPress} title="Rastrear" />
      </View>
    </View>)
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: '16px',
    padding: 10
  },
  textTitleButton: {
    flex: 4,
    fontSize: 14,
    color: "#174368",
    fontWeight: "bold",
  },
  textSubtitleButton: {
    color: "white",
    fontSize: 14,
    lineHeight: 16,
  },
 textDescription: {
    color: "#7F8D88",
    fontSize: 12,
    lineHeight: 16,
  },
 buttonWrapper: {
    width: '100%',
    marginTop: 10,
  },
  buttonInternal: {
    borderRadius: "16px",
    color: "#FFFFFF",
    backgroundColor: "#1CC09A",
    placeholderTextColor: "#FFFFFF"
  }
});
