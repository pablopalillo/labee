import { Image } from 'expo-image';
import React, {useState} from 'react';
import {Text, TextInput, View, Button, Alert, StyleSheet} from 'react-native';
import { ThemedText } from '@/components/ThemedText';


export function SummaryListComponent(props) {
    const imageMap = {
      'botella': require('@/assets/images/products/botella.png'),
      'hisopo': require('@/assets/images/products/hisopo.png'),
      'frasco': require('@/assets/images/products/frasco.png'),
      'tubo': require('@/assets/images/products/tubo.png'),
    };
    const icon = imageMap[props.icon] || imageMap['dialog'];

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
                source={icon}
                style={{width: 40, height: 40}}
                />
            </View>

            <View style={{flex: 4}}>
                <ThemedText style={styles.itemTitle}>{props.title}</ThemedText>
                <ThemedText style={styles.itemSubtitle}>{props.units}</ThemedText>
            </View>
            <View style={{flex:1, alignItems:'flex-end'}}>
                <ThemedText style={styles.itemSubtitle}>{props.info}</ThemedText>
            </View>
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
  }

});
