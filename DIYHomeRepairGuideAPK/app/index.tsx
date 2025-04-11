import React, { useEffect, useState } from 'react';
import { Link } from "expo-router";
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import Navbar from './navbar';

const App = () => {
  return (
    <View style={styles.root}>
      <ImageBackground source={require('../Pictures/apk_background_photo.jpg')} style={styles.background}>
        <Navbar />
        <View style={styles.container}>
          <Text style={styles.header}>DIY</Text>
          <Text style={styles.header}>HOME REPAIR GUIDE</Text>
          <Text style={styles.text}>Share engaging tutorials that empower clients to enhance their home environments </Text>
          <Link href={'../homeScreen'} asChild>
            <TouchableOpacity style={styles.buttonStart}>
              <Text style={styles.buttonText}>Let's Start</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1 },
  background: {
    flex: 1,
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 640,
    width: 338,
    padding: 20,
    marginBottom: 15,
    borderWidth: 1,
    },
    header: {
      textAlign: 'center',
      fontSize: 25,
      fontWeight: 'bold',
      fontFamily: 'serif'
    },
    text: {
        textAlign: 'center',
        paddingTop: 5,
        fontSize: 14,
    },
    buttonStart: {
        marginTop: 20,
        borderRadius: 100,
        alignItems: 'center',
        paddingHorizontal: 33,
        paddingVertical: 8,
        backgroundColor: '#5fa0f8',
    },
    buttonText: {
        fontSize: 12,
    },
});

export default App;