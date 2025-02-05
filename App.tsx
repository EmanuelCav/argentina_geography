import React from 'react'
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import Container from './Container';
import Home from "./app/screens/Home";
import Options from "./app/screens/Options";
import Categories from "./app/screens/Categories";
import Playing from "./app/screens/Playing";
import Statistics from "./app/screens/Statistics";
import Tent from "./app/screens/Tent";

import Loading from './app/components/response/Loading'

import UserGlobalContext from "./app/server/context/user.context";
import GameGlobalContext from "./app/server/context/game.context";

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent'
  },
};

export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <UserGlobalContext>
        <GameGlobalContext>
          <Container>
            <Loading />
            <StatusBar backgroundColor='#32b2c2' style='light' />
            <Stack.Navigator initialRouteName="Home" screenOptions={{
              headerShown: false
            }}>
              <Stack.Screen name="Home" component={Home} options={{
                animation: 'flip'
              }} />
              <Stack.Screen name="Playing" component={Playing as any} options={{
                animation: 'flip'
              }} />
              <Stack.Screen name="Categories" component={Categories as any} options={{
                animation: 'flip'
              }} />
              <Stack.Screen name="Options" component={Options} options={{
                animation: 'flip'
              }} />
              <Stack.Screen name="Statistics" component={Statistics} options={{
                animation: 'flip'
              }} />
              {/* <Stack.Screen name="Tent" component={Tent} options={{
                animation: 'flip'
              }} /> */}
            </Stack.Navigator>
          </Container>
        </GameGlobalContext>
      </UserGlobalContext>
    </NavigationContainer>
  );
}

