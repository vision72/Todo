import React from 'react';
import {SafeAreaView, View, StyleSheet, Text} from 'react-native';
// import Auth from './screens/AuthScreen';
import Home from './screens/HomeScreen';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Auth /> */}
      <Home />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default App;
