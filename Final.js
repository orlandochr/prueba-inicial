//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';

// create a component
class Final extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button 
                title="Aumentar"
                onPress={ this.props.sumar} /> 
                 <Button 
                title="Disminuir"
                onPress={ this.props.restar } /> 
                
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#006400'

    },
});

//make this component available to the app
export default Final;
