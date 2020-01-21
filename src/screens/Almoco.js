import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Platform,
    ScrollView,
    TouchableOpacity

} from 'react-native'

class Almoco extends Component{
    static navigationOptions ={
        title:' Meu cardápio '
    }
    frango = ()=> {
        this.props.navigation.navigate('Frango')
    }
    acem= ()=>{
        this.props.navigation.navigate('Acem')
    }
    parmegiana= ()=>{
        this.props.navigation.navigate('Parmegiana')
    }
    render(){
        return(
            
            <View style={styles.container}>
                <View style={styles.postContainer}>
                     <TouchableOpacity 
                            onPress={this.frango}>
                            <Text style={styles.textTitle}>Cubos de frango com vegetais e ervas.</Text>
                            <Text style={styles.textDescription}>Clique aqui para saber sobre esta receita.</Text>                   
                        </TouchableOpacity>
                </View>         
               
               <View style={styles.postContainer}>
                        <TouchableOpacity 
                            onPress={this.acem}>
                            <Text style={styles.textTitle}> Cozido de acém e legumes.</Text>
                            <Text style={styles.textDescription}>Clique aqui para saber sobre esta receita.</Text>                   
                        </TouchableOpacity>
                </View>         


                    <View style={styles.postContainer}>
                        <TouchableOpacity 
                            onPress={this.parmegiana}>
                            <Text style={styles.textTitle}>Bife à parmegiana light.</Text>
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

export default Almoco