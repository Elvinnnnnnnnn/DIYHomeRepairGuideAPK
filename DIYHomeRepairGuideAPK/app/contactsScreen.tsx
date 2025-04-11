import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, ImageBackground, TouchableOpacity, TextInput } from "react-native";
import Navbar from './navbar';

const ContactsScreen = () => {
  return (
    <View style={styles.root}>
        <ImageBackground source={require('../Pictures/apk_background_photo.jpg')} style={styles.background}>
            <Navbar />
              <View style={styles.container}>
               <ScrollView>
                 <View style={styles.contactsContainer}>
                    <Text>Contacts Us</Text>
                    <Text style={styles.getInTouch}>Get in Touch</Text>
                    <Text>Name</Text>
                    <TextInput style={styles.nameInput} placeholder='Your Name..' />
                    <Text>Email</Text>
                    <TextInput style={styles.emailInput} placeholder='Your Email..' />
                    <Text>Subject</Text>
                    <TextInput style={styles.subjectInput} placeholder='Your Subject..' />
                    <Text>Message</Text>
                    <TextInput style={styles.messageInput} placeholder='Title..'  multiline
                    numberOfLines={6}/>
                    <TouchableOpacity style={styles.sendBtn}>
                      <Text>Send Now</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.moreContactsContainer}>
                    <Text style={styles.messageContacts}>We’re here to help! Whether you have questions about a repair, need guidance on a DIY project, or want to share your feedback, we’d love to hear from you. Reach out to us through our email, phone, or social media channels, and our team will be happy to assist you. Your input helps us improve and continue providing the best home repair guides. Let’s build, fix, and improve together one project at a time!</Text>
                    <View>
                      <Image source={require('../Pictures/Call_Icon.png')} style={styles.callIcon}/>
                      <Text style={styles.someWords}>Phone Number</Text>
                      <Text style={styles.someWords}>09123456790</Text>
                    </View>
                    <View>
                      <Image source={require('../Pictures/Email_Icon.jpg')} style={styles.emailIcon}/>
                      <Text style={styles.someWords}>Email Address</Text>
                      <Text style={styles.someWords}>DiyHomeRepairGuide@gmail.com</Text>
                    </View>
                  </View>
               </ScrollView>
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
  
  contactsContainer: {
    height: 530,
    width: 280,
    borderRadius: 10,
    padding: 40,
    backgroundColor: 'white',
    elevation: 10,
    marginTop: 10,
  },
  getInTouch: {
    paddingVertical: 3,
    fontWeight: 'bold',
    fontSize: 30,
  },
  nameInput: {
    height: 35,
    width: 200,
    borderWidth: 1,
    paddingHorizontal: 5,
    borderRadius: 3,
    color: 'black',
    fontSize: 12,
    alignSelf: 'center',
    marginBottom: 15,
  },
  emailInput: {
    height: 35,
    width: 200,
    borderWidth: 1,
    paddingHorizontal: 5,
    borderRadius: 3,
    color: 'black',
    fontSize: 12,
    alignSelf: 'center',
    marginBottom: 15,
  },
  subjectInput: {
    height: 35,
    width: 200,
    borderWidth: 1,
    paddingHorizontal: 5,
    borderRadius: 3,
    color: 'black',
    fontSize: 12,
    alignSelf: 'center',
    marginBottom: 15,
  },
  messageInput: {
    height: 100,
    width: 200,
    borderWidth: 1,
    paddingHorizontal: 5,
    borderRadius: 3,
    color: 'black',
    fontSize: 12,
    alignSelf: 'center',
    marginBottom: 15,
    textAlignVertical: "top",
  },
  sendBtn: {
    height: 35,
    width: 200,
    borderWidth: 1,
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  moreContactsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageContacts: {
    textAlign: 'center',
    marginVertical: 40,
  },
  callIcon: {
    alignSelf: 'center',
    width: 30,
    height: 30,
  },
  emailIcon: {
    alignSelf: 'center',
    width: 50,
    height: 50,
    marginBottom: -10,
  },
  someWords: {
    textAlign: 'center',
  },
});

export default ContactsScreen;