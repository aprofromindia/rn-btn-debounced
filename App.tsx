import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import TouchableDebounced from './src/components/TouchableDebounced';

export default function App() {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
       <TouchableDebounced onPress={() => console.log("apro")} style={styles.btnContainer}>
         <Text style={styles.text}>Press me</Text>
       </TouchableDebounced>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  btnContainer: {
    height: 40,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    margin: 5
  },
  text: {
    color: "white"
  }
});