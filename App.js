import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import Inicio from './Inicio';
import Body from './Body';
import Final from './Final';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      numero:2
    }
    
  }

    aumentar = () => {
      this.setState({
        numero: this.state.numero + 1
      })
    };
    restar = () => {
      this.setState({
        numero: this.state.numero - 1
      })
    }
  render() {
    return(
      <View style={styles.container}>
      
     <Inicio name="Calculadora"/>
     <Body numero={this.state.numero} />
     <Final sumar = {this.aumentar}  restar = {this.restar}/>
     {/* <View style={styles.cajaTres}>
       <Button 
       title="Aumentar"
       onPress={ () => {this.aumentar();}} />       
       <Button 
       title=""
        />

        <Button 
       title="Restar"
       onPress={ () => {this.restar();}} />
       
    </View> */}
    </View>

        );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'flex-start',
    //justifyContent: 'flex-start'
  },
  
  cajaTres: {
    flex:1,
    backgroundColor: '#006400'
  },
});
export default App;