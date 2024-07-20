import React, { useState, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Foot from './modules/content/Foot';
import Home from './modules/pages/Home';
import Dash from './modules/pages/Dash';
import Prof from './modules/pages/Prof';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const username = 'Zaka'

  const [activePage, setActivePage] = useState('Home');

  const changePage = (page) => {
    setActivePage(page);
  };

  const [fontsLoaded, fontError] = useFonts({
    'BeVietnamPro-Black': require('./fonts/BeVietnamPro-Black.ttf'),
    'BeVietnamPro-BlackItalic': require('./fonts/BeVietnamPro-BlackItalic.ttf'),
    'BeVietnamPro-ExtraBold': require('./fonts/BeVietnamPro-ExtraBold.ttf'),
    'BeVietnamPro-ExtraBoldItalic': require('./fonts/BeVietnamPro-ExtraBoldItalic.ttf'),
    'BeVietnamPro-Bold': require('./fonts/BeVietnamPro-Bold.ttf'),
    'BeVietnamPro-BoldItalic': require('./fonts/BeVietnamPro-BoldItalic.ttf'),
    'BeVietnamPro-SemiBold': require('./fonts/BeVietnamPro-SemiBold.ttf'),
    'BeVietnamPro-SemiBoldItalic': require('./fonts/BeVietnamPro-SemiBoldItalic.ttf'),
    'BeVietnamPro-Medium': require('./fonts/BeVietnamPro-Medium.ttf'),
    'BeVietnamPro-MediumItalic': require('./fonts/BeVietnamPro-MediumItalic.ttf'),
    'BeVietnamPro-Regular': require('./fonts/BeVietnamPro-Regular.ttf'),
    'BeVietnamPro-Italic': require('./fonts/BeVietnamPro-Italic.ttf'),
    'BeVietnamPro-Light': require('./fonts/BeVietnamPro-Light.ttf'),
    'BeVietnamPro-LightItalic': require('./fonts/BeVietnamPro-LightItalic.ttf'),
    'BeVietnamPro-ExtraLight': require('./fonts/BeVietnamPro-ExtraLight.ttf'),
    'BeVietnamPro-ExtraLightItalic': require('./fonts/BeVietnamPro-ExtraLightItalic.ttf'),
    'BeVietnamPro-Thin': require('./fonts/BeVietnamPro-Thin.ttf'),
    'BeVietnamPro-ThinItalic': require('./fonts/BeVietnamPro-ThinItalic.ttf')
  });
  
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View>
      <ScrollView style={styles.mainView} onLayout={onLayoutRootView}>
        <StatusBar style='auto' />

        <Text style={styles.h1}>
          {activePage === 'Home' && `Hello, ${username}!`}
          {activePage === 'Dash' && 'Dashboard'}
          {activePage === 'Prof' && 'Your profile'}
        </Text>

        <Text style={styles.h2}>
          {activePage === 'Home' && 'This is your plan for today'}
          {activePage === 'Dash' && 'Lets set up your path to success'}
          {activePage === 'Prof' && 'Nice to meet you'}
        </Text>

        {activePage === 'Home' && <Home />}
        {activePage === 'Dash' && <Dash />}
        {activePage === 'Prof' && <Prof />}

      </ScrollView>
      <Foot activetab={activePage} changePage={changePage} >
      </Foot>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#0E1013',
    display: 'flex',
    width: '100vw',
    height: '100vh',
    flexDirection: 'column',
    gap: 0,
    margin: 0,
    padding: 0
  },
  h1: {
    color: 'white',
    fontFamily: 'BeVietnamPro-Bold',
    marginTop: 20,
    marginLeft: 20,
    fontSize: 35,
    lineHeight: 35
  },
  h2: {
    color: 'white',
    fontFamily: 'BeVietnamPro-Regular',
    marginTop: 10,
    marginLeft: 20,
    fontSize: 20,
    lineHeight: 20
  }
});
