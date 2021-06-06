import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput} from 'react-native';
import User from './User';

export default function Home() {
    const [name, setName] = useState('');
    return (
        <View style={styles.container}>
        <Text style={styles.headerTextDesign} >  <b>This is my react native app </b>  </Text>
        
        <button onPress={()=>history.push("/userDetails")} >Show User Details</button>
        {/* <User></User> */}

        <button> User Details </button>
        
        <Image
          source={{
            uri: 'https://www.programming-hero.com/assets/img/hero-header/iphone/programming-hero.png',
          }}
  
          style={{ width: 200, height: 200, marginTop: 20 }}
        />
  
        <TextInput
          style={{ border: '2px solid gray', borderRadius: '10px', marginTop: "10px" }}
          placeholder="You can type your name"
          onChangeText={name => setName(name)}
  
        />
  
        <Text> Name: {name} </Text>
          <Image></Image>
        <Image
          source={{
            uri: 'https://www.programming-hero.com/assets/img/hero-header/iphone/programming-hero.png',
          }}
          style={{ width: 200, height: 200, marginTop: 20 }}
        />
        <StatusBar style="auto" />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    headerTextDesign:{
      fontSize:"20px"
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
