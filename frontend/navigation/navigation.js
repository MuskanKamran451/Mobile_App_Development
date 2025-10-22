// frontend/navigation/navigation.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
// Screens
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import PerfumesScreen from '../screens/PerfumesScreen';
import SummerScreen from '../screens/SummerScreen';
import WinterScreen from '../screens/WinterScreen';
import SaleScreen from '../screens/SaleScreen';
import CartScreen from '../screens/CartScreen';
import ProfileScreen from '../screens/ProfileScreen';

// Sub Screens
import WinterPretScreen from '../screens/WinterPretScreen';
import WinterUnstitchedScreen from '../screens/WinterUnstitchedScreen';
import SummerPretScreen from '../screens/SummerPretScreen';
import SummerUnstitchedScreen from '../screens/SummerUnstitchedScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Winter" component={WinterScreen} />
      <Stack.Screen name="Summer" component={SummerScreen} />
      <Stack.Screen name="Perfumes" component={PerfumesScreen} />
      <Stack.Screen name="Sale" component={SaleScreen} />
      <Stack.Screen name="WinterPret" component={WinterPretScreen} />
      <Stack.Screen name="WinterUnstitched" component={WinterUnstitchedScreen} />
      <Stack.Screen name="SummerPret" component={SummerPretScreen} />
      <Stack.Screen name="SummerUnstitched" component={SummerUnstitchedScreen} />
    </Stack.Navigator>
  );
}
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#C2185B',  
        tabBarInactiveTintColor: '#AD1457', 
        tabBarStyle: {
          position: 'absolute',          
          bottom: 12,                    
          left: 10,                       
          right: 10,                     
          height: 50,                     
          backgroundColor: '#FFE4EC',    
          borderRadius: 20,               
          elevation: 10,                  
          shadowColor: '#AD1457',         
          shadowOpacity: 0.9,
          shadowOffset: { width: 0, height: 5 },
          shadowRadius: 10,
        },
        
        
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '800',
        },
        tabBarIcon: ({ color }) => {
          let iconName;
          switch (route.name) {
            case 'HomeTab':
              iconName = 'home-outline';
              break;
            case 'Cart':
              iconName = 'cart-outline';
              break;
            case 'Profile':
              iconName = 'person-outline';
              break;
            default:
              iconName = 'ellipse-outline';
          }
          return <Ionicons name={iconName} size={27} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="HomeTab"
        component={MainStack}
        options={{ title: 'Home' }}
      />
      <Tab.Screen name="Cart" component={CartScreen} options={{ title: 'Cart' }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} />
    </Tab.Navigator>
  );
}
export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
