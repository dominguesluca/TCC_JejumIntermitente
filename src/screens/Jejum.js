import React, { Component } from 'react'
import {
    Text,
    StyleSheet,
    TouchableOpacity,
    View

} from 'react-native'

class Jejum extends Component{
    static navigationOptions ={
        title:' Tipos de dieta'
    }
    doze = ()=> {
        this.props.navigation.navigate('DozeHoras')
    }
    dezesseis= ()=>{
        this.props.navigation.navigate('DezesseisHoras')
    }
    vinteQuatro= ()=>{
        this.props.navigation.navigate('VinteQuatroHoras')
    }
    

    render(){
        
        return(
            <View style={styles.container}>
                <View style={styles.postContainer}>
                  <TouchableOpacity 
                        onPress={this.doze}>
                        <Text style={styles.textTitle}>Jejum de doze Horas</Text>
                        <Text style={styles.textDescription}>Clique aqui para saber mais.</Text>                   
                    </TouchableOpacity>
                </View>

                <View style={styles.postContainer}>
                    <TouchableOpacity 
                        onPress={this.dezesseis}>
                        <Text style={styles.textTitle}>Jejum de dezesseis horas</Text>
                        <Text style={styles.textDescription}>Clique para saber mais.</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.postContainer}>
                    <TouchableOpacity 
                        onPress={this.vinteQuatro}>
                        <Text style={styles.textTitle}>Jejum de vinte quatro horas</Text>
                        <Text style={styles.textDescription}>Clique para saber mais.</Text>
                    </TouchableOpacity>
                </View> 
            </View>                       
        )
    }
}

const styles = StyleSheet.create({
    container: {        
        flex:1,
        //#BBB
        //
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

export default Jejum