import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Button, Image, ScrollView, Animated, ImageBackground, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

const Navbar = ()=> {
    const [navBarVisible, setNavBarVisible] = useState(false); // State to toggle the navBar visibility
      const translateX = useState(new Animated.Value(-400))[0]; // Initial position off-screen (left)
    
      const toggleNavBar = () => {
        setNavBarVisible(!navBarVisible);
    
        // Animate the navBar to slide in or out
        Animated.timing(translateX, {
          toValue: navBarVisible ? -400 : 0, // Slide in or out
          duration: 300,
          useNativeDriver: true, // Use native driver for smoother animations
        }).start();
      };
    
      useEffect(() => {
        console.log('App Loaded');
      }, []);
    return(
        <View style={styles.root}>
            <View>
                {/* Navbar */}
                <Animated.View style={[styles.navBar, { transform: [{ translateX }] }]}>
                <Link href={'../homeScreen'} style={styles.navText}>HOME</Link>
                <Link href={'../aboutUsScreen'} style={styles.navText}>ABOUT US</Link>
                <Link href={'../contactsScreen'} style={styles.navText}>CONTACTS</Link>
                </Animated.View>
    
                {/* Nav Container */}
                <View style={styles.navContainer}>
                    <Link href={'./'}>
                        <Image source={require('../Pictures/Website_Logo.png')} style={styles.logo} />
                    </Link>
                    <TouchableOpacity onPress={toggleNavBar}>
                        <Image source={require('../Pictures/AndroidMenuIcon.png')} style={styles.menuIcon} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
  root: { flex: 1 },
  background: {
    flex: 1,
    alignItems: 'center',
  },
  navContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
  },
  navBar: {
    position: 'absolute',
    top: 89,
    width: '100%',
    height: 660,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  navText: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingBottom: 50
  },
  logo: {
    width: 100,
    height: 100,
  },
  menuIcon: {
    width: 28,
    height: 28,
    marginTop: 30, 
    marginRight: 33,
  },

})

export default Navbar;