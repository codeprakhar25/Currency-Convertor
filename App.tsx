/* eslint-disable semi */
/* eslint-disable react/self-closing-comp */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import Wishlist from './src/Features/Wishlist/Wishlist';
import {
  Colors,
  Header,
  LearnMoreLinks,
} from 'react-native/Libraries/NewAppScreen';
import Home from './src/Features/Home/Home';
import Profile from './src/Features/Profile/Profile';
import Routes from './src/Features/Routes/Routes';
import Chart from './src/Features/Home/Features/Chart';
import CurrAmount from './src/Features/Home/Features/CurrAmount';
import CurrCode from './src/Features/Home/Features/CurrCode';
import Rate from './src/Features/Home/Features/Rate';
import RateTwo from './src/Features/Home/Features/RateTwo';
import { ContextProvider } from './src/context/Context';


const App = ()=> {
  const isDarkMode = useColorScheme() === 'dark';
   const Stack = createNativeStackNavigator();
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
    <ContextProvider>
    <NavigationContainer>
<Stack.Navigator>
  <Stack.Screen name="routes" options={{headerShown: false}}  component={Routes}></Stack.Screen>
  <Stack.Screen name="home" options={{headerShown: false}} component={Home}></Stack.Screen>
  <Stack.Screen name="profile" options={{headerShown: false}} component={Profile}></Stack.Screen>
  <Stack.Screen name="chart" options={{headerShown: false}} component={Chart}></Stack.Screen>
  <Stack.Screen name="curramount" options={{headerShown: false}} component={CurrAmount}></Stack.Screen>
  <Stack.Screen name="currcode" options={{headerShown: false}} component={CurrCode}></Stack.Screen>
  <Stack.Screen name="rate" options={{headerShown: false}} component={Rate}></Stack.Screen>
  <Stack.Screen name="ratetwo" options={{headerShown: false}} component={RateTwo}></Stack.Screen>
  <Stack.Screen name="wishlist" options={{headerShown: false}} component={Wishlist}></Stack.Screen>
</Stack.Navigator>
    </NavigationContainer>
    </ContextProvider>
    </>
  );
};



export default App;

const styles = StyleSheet.create({
})
