import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './components/Header';
import Colors from './constants/Colors';

export default function App() {
   return (
      <>
      <Header/>
         <View style={styles.container}>
            <Text style={styles.text}>Open up App.js to st working on your app!</Text>
            <StatusBar style='auto' />
         </View>
      </>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
   },
   text: {
      color: Colors.red,
   },
});
