import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, ImageBackground, TouchableOpacity } from "react-native";
import Navbar from './navbar';

const AboutUsScreen = () => {
  return (
    <View style={styles.root}>
        <ImageBackground source={require('../Pictures/apk_background_photo.jpg')} style={styles.background}>
            <Navbar />
              <View style={styles.container}>
                <View style={styles.aboutUsContainer}>
                  <Text style={styles.abousUsHeader}>About Us</Text>
                  <Text>DIY Home Repair Guide</Text>
                  <ScrollView>
                    <Image style={styles.ourVisionPhoto} source={require('../Pictures/Our_Vision.jpg')}/>
                    <Text style={styles.abousUsHeader} >Our Vision</Text>
                    <Text style={styles.ourVisionText}>Our vision is to empower homeowners with the knowledge, skills, and confidence to take control of their home repairs and improvements. We believe that every homeowner should have access to reliable, easy to follow guidance that allows them to tackle projects efficiently, safely, and cost effectively. By providing step by step tutorials, expert tips, and practical advice, we aim to transform home maintenance from a daunting task into an achievable and rewarding experience. Our goal is to help create homes that are not only functional and durable but also spaces that inspire comfort, creativity, and pride.</Text>
                    <Image style={styles.ourVisionPhoto} source={require('../Pictures/Our_Approach.jpg')}/>
                    <Text style={styles.abousUsHeader} >Our Approach</Text>
                    <Text style={styles.ourVisionText}>At DIY Home Repair Guide, our approach is built on simplicity, clarity, and practicality. We break down complex home repair tasks into easy to follow steps, ensuring that homeowners of all skill levels can confidently take on projects. Our guides prioritize safety, efficiency, and cost-effectiveness, helping you make informed decisions about materials, tools, and techniques. We focus on hands on learning, providing detailed tutorials, expert insights, and troubleshooting tips to help you navigate challenges. Whether you're fixing a leaky faucet, upgrading your flooring, or improving home safety, our goal is to equip you with the right knowledge to get the job done right the first time.</Text>
                    <Image style={styles.ourVisionPhoto} source={require('../Pictures/Our_Process.jpg')}/>
                    <Text style={styles.abousUsHeader} >Our Process</Text>
                    <Text>Our process is designed to make DIY home repairs accessible, structured, and stress free. We start by identifying common household issues and breaking them down into clear, step-by-step solutions. Each guide is carefully crafted to include detailed instructions, essential tools, safety precautions, and expert tips to ensure successful execution. We emphasize a hands-on learning experience, encouraging homeowners to develop practical skills while building confidence in their abilities. Whether it's a minor fix or a major upgrade, our process ensures that every repair is approached methodically, efficiently, and with lasting results in mind.</Text>
                  </ScrollView>
                </View>
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
    alignItems: 'center',
    height: 640,
    width: 338,
    padding: 20,
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 15
  },

  aboutUsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  abousUsHeader: {
    fontFamily: 'serif',
    fontWeight: 'bold',
    fontSize: 30,
  },
  ourVisionPhoto: {
    width: 300,
    height: 500,
    marginTop: 20,
  },
  ourVisionText: {
    marginBottom: 20,
  }
});

export default AboutUsScreen;