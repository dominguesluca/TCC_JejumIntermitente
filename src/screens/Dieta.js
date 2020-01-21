import React, { Component } from 'react'
import {
    Text,
    StyleSheet,
    TouchableOpacity,
    View

} from 'react-native'

class Dieta extends Component{
    static navigationOptions ={
        title:' Tipos de dieta'
    }
    lowCarb = ()=> {
        this.props.navigation.navigate('LowCarb')
    }
    dietaDukan= ()=>{
        this.props.navigation.navigate('DietaDukan')
    }
    dietaDash= ()=>{
        this.props.navigation.navigate('DietaDash')
    }
    dietaPaleolitica= ()=>{
        this.props.navigation.navigate('DietaPaleolitica')
    }

    dietaRavenna = ()=>{
        this.props.navigation.navigate('DietaRavenna')
    }

    render(){
        
        return(
            <View style={styles.container}>
                <View style={styles.postContainer}>
                  <TouchableOpacity 
                        onPress={this.lowCarb}>
                        <Text style={styles.textTitle}>Dieta LowCarb</Text>
                        <Text style={styles.textDescription}>Clique aqui para saber sobre esta dieta.</Text>                   
                    </TouchableOpacity>
                </View>

                <View style={styles.postContainer}>
                    <TouchableOpacity 
                        onPress={this.dietaRavenna}>
                        <Text style={styles.textTitle}>Dieta Ravenna</Text>
                        <Text style={styles.textDescription}>Clique para saber mais sobre esta dieta.</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.postContainer}>
                    <TouchableOpacity 
                        onPress={this.dietaDukan}>
                        <Text style={styles.textTitle}>Dieta Dukan</Text>
                        <Text style={styles.textDescription}>Clique para saber mais sobre esta dieta.</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.postContainer}>
                    <TouchableOpacity 
                        onPress={this.dietaPaleolitica}>
                        <Text style={styles.textTitle}>Dieta Paleolítica</Text>
                        <Text style={styles.textDescription}>Clique para saber mais sobre esta dieta.</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.postContainer}>
                    <TouchableOpacity 
                        onPress={this.dietaDash}>
                        <Text style={styles.textTitle}>Dieta Dash</Text>
                        <Text style={styles.textDescription}>Clique para saber mais sobre esta dieta.</Text>
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

export default Dieta