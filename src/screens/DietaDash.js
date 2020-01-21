import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Platform,
    ScrollView

} from 'react-native'
class DietaDash extends Component{
    render(){
        return(
           
                <View style={styles.container}>
                    <View style={styles.containerTexto}>
                            <Text style={styles.title}>Dieta Dash</Text>
                            <Text style={styles.subTitle}>◉ Criada para ajudar pacientes com problemas de pressão alta;</Text>
                            <Text style={styles.subTitle}>◉ Ajuda a reduzir a quantidade de sódio na dieta – a padrão aceita até 2.300mg/dia, enquanto a reduzida indica no máximo 1.500mg, que é a recomendação da OMS;</Text>
                            <Text style={styles.subTitle}>◉ Os alimentos escolhidos são ricos em nutrientes que ajudam a baixar a pressão arterial;</Text>
                            <Text style={styles.subTitle}>◉ Permite a ingestão, ainda que moderada, de doces;</Text>
                            <Text style={styles.subTitle}>◉ Alimentação também é rica em fibras e ajuda a reduzir os níveis de colesterol, resultando na perda de peso.</Text>
                           
                    </View>
                </View>    
            
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#87CEEB"
    },
    containerTexto:{
        flex:1,
        //alignItems:'center',
        backgroundColor:'#F5FFFA', 
        padding: 25,
        marginHorizontal:4,
        marginVertical:3,
        borderRadius:3,
     },
     title:{
         fontSize: 20,
         fontFamily: 'Pacifico-Regular',
         textAlign:'center',
         color: '#1C1C1C'
     },
     subTitle:{
         fontSize: 18,
         textAlign:'left',
         color: '#1C1C1C',
         
 
     }
})

export default DietaDash