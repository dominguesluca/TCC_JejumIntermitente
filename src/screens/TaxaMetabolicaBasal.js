import React, { Component } from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    ScrollView

} from 'react-native'

import RadioForm, { RadioButton, RadioButtonInput,RadioButtonLabel } from 'react-native-simple-radio-button'



var sexo = [
    { label: 'Mulher', value: 0 },
    { label: 'Homem', value: 1 },
    
]
var rotina =[
    {label: 'Sedentária', value: 3},
    {label: '1 a 3 vezes por semana', value: 4},
    {label: '3 a 5 vezes por semana', value: 5},
    {label: 'exercicio diário', value: 6},
    {label: 'exercicio intenso/profissional todos os dias', value: 7}
]

class TaxaMetabolicaBasal extends Component {
    //mulheres: 655+(9.6 * peso)+(1.8*altura)-(4.7* idade)
    //Homens:66 + (13,7 x peso) + (5 x altura) – (6,5 x idade)

    /**
     * 
     *
        -Pessoas sedentárias: MB x 1,2
        -Pessoas que são um pouco ativas (se exercitam de 1 a 3 vezes por semana): MB x 1,3
        -Pessoas moderadamente ativas (3 a 5 vezes por semana): MB x 1,5
        -Pessoas muito ativas (exercício diário): MB x 1,7
        -Pessoas hiperativas (exercício intenso ou profissional todos os dias): MB x 1,9 
     */
    
    constructor(props) {
        super(props)
        this.state = { sexo:0,
            idade: 0, 
            peso: 0,
            rotina: 0,
            altura: 0, 
            resultado: 0, 
            resultadoText: "" }
        this.calcular = this.calcular.bind(this)
        
    }
    

    calcular() {
       
          
            if(this.state.value == 3){
                let CalculoMB = 66 + (13.7 * this.state.peso) + (5 * this.state.altura) - (6.5 * this.state.idade)
                let calculo = this.state
                calculo.resultado = CalculoMB * 1.2
                calculo.resultadoText = "Para emagracer, consuma menos calorias que este valor. Para manter o peso, consuma a mesma quantidade de calorias. Para subir o peso, consuma mais calorias."
                this.setState(calculo)
            }else if(this.state.value == 4){
                let CalculoMB = 66 + (13.7 * this.state.peso) + (5 * this.state.altura) - (6.5 * this.state.idade)
                let calculo = this.state
                calculo.resultado = CalculoMB * 1.3
                calculo.resultadoText = "Para emagracer, consuma menos calorias que este valor. Para manter o peso, consuma a mesma quantidade de calorias. Para subir o peso, consuma mais calorias."
                this.setState(calculo)
            }else if(this.state.value == 5){
                let CalculoMB = 66 + (13.7 * this.state.peso) + (5 * this.state.altura) - (6.5 * this.state.idade)
                let calculo = this.state
                calculo.resultado = CalculoMB * 1.5
                calculo.resultadoText = "Para emagracer, consuma menos calorias que este valor. Para manter o peso, consuma a mesma quantidade de calorias. Para subir o peso, consuma mais calorias."
                this.setState(calculo)
            }else if(this.state.value == 6){
                let CalculoMB = 66 + (13.7 * this.state.peso) + (5 * this.state.altura) - (6.5 * this.state.idade)
                let calculo = this.state
                calculo.resultado = CalculoMB * 1.7
                calculo.resultadoText = "Para emagracer, consuma menos calorias que este valor. Para manter o peso, consuma a mesma quantidade de calorias. Para subir o peso, consuma mais calorias."
                this.setState(calculo)
            }else if(this.state.value == 7){
                let CalculoMB = 66 + (13.7 * this.state.peso) + (5 * this.state.altura) - (6.5 * this.state.idade)
                let calculo = this.state
                calculo.resultado = CalculoMB * 1.9
                calculo.resultadoText = "Para emagracer, consuma menos calorias que este valor. Para manter o peso, consuma a mesma quantidade de calorias. Para subir o peso, consuma mais calorias."
                this.setState(calculo)
            }
           
            
       


        
        
    }
    render() {
        
        return (
            <ScrollView style={styles.container}>
                <View style={styles.calcContainer}>
                    <Text>Calculo cálorico para homens.</Text>
                </View>

                <View style={styles.calcContainer} >
                <RadioForm
                        radio_props={rotina}
                        initial={-1}
                        formHorizontal={false}
                        labelHorizontal={true}
                        selectedButtonColor={'#87CEEB'}
                        buttonColor={'#87CEEB'}
                        onPress={(value) => { this.setState({ value: value }) }}
                        />
                </View>

                <View style={styles.calcContainer}>
                    <TextInput placeholder='informe o peso (Kg)' keyboardType='numeric' style={styles.input}
                        onChangeText={(peso) => { this.setState({ peso }) }}
                    />
                </View>

                <View style={styles.calcContainer}>
                    <TextInput placeholder='informe sua altura (cm)' keyboardType='numeric' style={styles.input}
                        onChangeText={(altura) => { this.setState({ altura }) }}
                    />
                </View>

                <View style={styles.calcContainer}>
                    <TextInput placeholder='informe a idade' keyboardType='numeric' style={styles.input}
                        onChangeText={(idade) => { this.setState({ idade }) }}
                    />
                </View>

                <TouchableOpacity style={styles.button} onPress={this.calcular}>
                    <Text style={styles.buttonText}>Calcular</Text>
                </TouchableOpacity>

                <View style={styles.button}>
                    <Text style={styles.resultadoValor}>{this.state.resultado.toFixed(2)}</Text>
                </View>
                <View style = {styles.resultadoContainer}>    
                    <Text style={styles.resultadoText}>{this.state.resultadoText}</Text>
                </View>
            </ScrollView>
        )
    }


}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#87CEEB'
    },
    calcContainer: {
        flex: 1,
        borderRadius: 3,
        backgroundColor: '#FFF',
        padding: 3,
        marginHorizontal: 8,
        marginVertical: 5,

    }
    ,
    resultadoContainer: {
        flex: 1,
        borderRadius: 3,
        backgroundColor: '#FFF'

    },
    input: {
        height: 50,
        textAlign: 'center',
        fontSize: 20,

    },
    button: {
        flex:1,
        backgroundColor: '#FFF',
        borderRadius: 3,
        margin: 3,
        marginHorizontal:45
        
    },
    buttonText: {
        alignSelf: 'center',
        padding: 10,
        fontSize: 20,
        color: '#1C1C1C',
        fontWeight:'bold'
    },
    text: {
        fontSize: 16,
        color: '#1C1C1C'
    },
    
    resultadoValor: {
        alignSelf: 'center',
        padding: 10,
        fontSize: 20,
        color: '#1C1C1C',
        fontWeight:'bold'
    },
    resultadoText:{
        fontSize: 16,
        color: '#000000'
    }
})

export default TaxaMetabolicaBasal