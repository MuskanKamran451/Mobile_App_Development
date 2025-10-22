// App.js (root file — outside frontend folder)

import 'react-native-gesture-handler';
import React from 'react';
import Navigation from './frontend/navigation/navigation'; // ✅ correct path to your navigation.js file

export default function App() {
  return <Navigation />;
}
