import * as React from 'react';
import { Button, View, ImageBackground } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Proba from "./Proba"
import Felvitel from "./Felvitel";
import Lenyilo from "./Lenyilo";



function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('./Images/ff.jpg')}
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    >
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button
          onPress={() => navigation.navigate('Notifications')}
          title="Go to notifications"
          color="white"
        />
        <Button
          onPress={() => navigation.navigate('Proba')}
          title="Go to Próba"
          color="white"
        />
      </View>
    </ImageBackground>
  );
}


function Root ({ navigation }) {
  return (
<Drawer.Navigator initialRouteName="Homescreen">
  <Drawer.Screen name="Homescreen" component={HomeScreen} />
  <Drawer.Screen name="Felvitel" component={Felvitel} />
  <Drawer.Screen name="Lenyilo" component={Lenyilo} />
</Drawer.Navigator>
  );
}


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Root" component={Root} options={{ headerShown:false}}/>
        <Stack.Screen name="Proba" component={Proba} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}