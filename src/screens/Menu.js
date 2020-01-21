import React, { Component} from 'react'
import {
    ScrollView,
    Text,
    StyleSheet,
    TouchableOpacity,
    View
} from 'react-native'



class Menu extends Component{
    static navigationOptions ={
        title:' Dicas !'
    }

    acesso = ()=> {
        this.props.navigation.navigate('Acesso')
    }
    acessoExercicios= ()=>{
        this.props.navigation.navigate('AcessoExercicios')
    }
    acessoDieta= ()=>{
        this.props.navigation.navigate('AcessoDieta')
    }
    acessoJejum= ()=>{
        this.props.navigation.navigate('AcessoJejum')
    }

    acessoCalculo = ()=>{
        this.props.navigation.navigate('AcessoCalculo')
    }

    acessoTaxa = () => {
        this.props.navigation.navigate('AcessoTaxa')
    }

    acessoAlimentos = () => {
        this.props.navigation.navigate('AcessoAlimentos')
    }

    render(){
        
        return(
            <View style={styles.container}>
                <View style={styles.postContainer}>
                  <TouchableOpacity 
                        onPress={this.acesso}>
                        <Text style={styles.textTitle}>Reeducação Alimentar</Text>
                        <Text style={styles.textDescription}>Como dar início à reeducação alimentar</Text>                   
                    </TouchableOpacity>
                </View>

                <View style={styles.postContainer}>
                    <TouchableOpacity 
                        onPress={this.acessoExercicios}>
                        <Text style={styles.textTitle}>Exercícios</Text>
                        <Text style={styles.textDescription}>Exercícios essências em perda de gordura, que pode ser feito em sete minutos.</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.postContainer}>
                    <TouchableOpacity 
                        onPress={this.acessoDieta}>
                        <Text style={styles.textTitle}>Tipos de dieta</Text>
                        <Text style={styles.textDescription}>As principais dietas e de como faze-las</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.postContainer}>
                    <TouchableOpacity 
                        onPress={this.acessoJejum}>
                        <Text style={styles.textTitle}>Jejum Intermitente</Text>
                        <Text style={styles.textDescription}>Antes de começar a prática do Jejum,
                            fique duas semanas sem comer carboidratos. Você sentirá menos fome.
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.postContainer}>
                    <TouchableOpacity 
                        onPress={this.acessoCalculo}>
                        <Text style={styles.textTitle}>Calculo para uma Mulher</Text>
                        <Text style={styles.textDescription}>
                                Calcule sua taxa calórica
                                consumida por dia, para poder montar sua dieta.</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.postContainer}>
                    <TouchableOpacity 
                        onPress={this.acessoTaxa}>
                        <Text style={styles.textTitle}>Calculo para um Homem</Text>
                        <Text style={styles.textDescription}>
                                Calcule sua taxa calórica
                                consumida por dia, para poder montar sua dieta.
                        </Text>
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

export default Menu