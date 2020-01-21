import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity

} from 'react-native'


class Alimentos extends Component {
    static navigationOptions ={
        title:' Calorias de alguns alimentos'
        
    }


    cafeDaManha = ()=> {
        this.props.navigation.navigate('CafeDaManha')
    }

    almoco = ()=> {
        this.props.navigation.navigate('Almoco')
    }
    janta = ()=>{
        this.props.navigation.navigate('Jantar')
    }

    

    render() {
        return (
        
            
                <View style={styles.container}>
                <View style={styles.postContainer}>
                    <TouchableOpacity 
                        onPress={this.cafeDaManha}>
                        <Text style={styles.textTitle}>Café da Manhã</Text>
                        <Text style={styles.textDescription}>O que comer no café da manhã
                            para ficar saciado e não fugir da dieta.
                        </Text>                   
                    </TouchableOpacity>
                </View>

                <View style={styles.postContainer}>
                    <TouchableOpacity 
                        onPress={this.almoco}>
                        <Text style={styles.textTitle}>Almoço</Text>
                        <Text style={styles.textDescription}>O que comer no almoço, e como preparar seus alimentos.</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.postContainer}>
                    <TouchableOpacity 
                        onPress={this.janta}>
                        <Text style={styles.textTitle}>Jantar</Text>
                        <Text style={styles.textDescription}>Algumas receitas para sua dieta no jantar.</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
            
        )
    }
}

const styles = StyleSheet.create({
    container: {        
        flex:1,
        backgroundColor: '#87CEEB'
        
    },
    textTitle:{
        fontSize: 18,
        marginBottom: 5,
        fontFamily: 'Pacifico-Regular',
        color: '#333'
    },
    textDescription: {
        fontSize: 14,
        color: '#666'
    },
    
    postContainer: {
        marginHorizontal:8,
        marginVertical:5,
        padding: 5,
        backgroundColor: '#FFF',
        borderRadius: 3
    },
    title: {
        fontFamily: 'Pacifico-Regular'
    }
})

export default Alimentos