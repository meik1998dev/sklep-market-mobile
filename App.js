import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './components/Header';
import ProductsList from './components/ProductsList';
import Colors from './constants/Colors';

export default function App() {
   return (
      <>
      <Header/>
         <View style={styles.container}>
            <ProductsList/>
            <StatusBar style='auto' />
         </View>
      </>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: Colors.white,
      alignItems: 'center',
      justifyContent: 'center',
   },
   text: {
      color: Colors.red,
   },
});
