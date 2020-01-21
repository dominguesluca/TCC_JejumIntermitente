import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Platform,
    ScrollView,
    TouchableOpacity

} from 'react-native'

class Janta extends Component{
    static navigationOptions ={
        title:' Meu cardápio '
    }
    peitoFrango = ()=> {
        this.props.navigation.navigate('PeitoFrango')
    }
    peixe= ()=>{
        this.props.navigation.navigate('Peixe')
    }
    salada= ()=>{
        this.props.navigation.navigate('Salada')
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.postContainer}>
                     <TouchableOpacity 
                            onPress={this.peitoFrango}>
                            <Text style={styles.textTitle}> Peito de frango crocante.</Text>
                            <Text style={styles.textDescription}>Clique aqui para saber sobre esta receita.</Text>                   
                        </TouchableOpacity>
                </View>         
               
               <View style={styles.postContainer}>
                        <TouchableOpacity 
                            onPress={this.peixe}>
                            <Text style={styles.textTitle}> Peixe assado a vapor.</Text>
                            <Text style={styles.textDescription}>Clique aqui para saber sobre esta receita.</Text>                   
                        </TouchableOpacity>
                </View>         


                    <View style={styles.postContainer}>
                        <TouchableOpacity 
                            onPress={this.salada}>
                            <Text style={styles.textTitle}> Salada tropical.</Text>
                            <Text style={styles.textDescription}>Clique aqui para saber sobre esta receita.</Text>                   
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

export default Janta