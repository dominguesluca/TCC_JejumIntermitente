import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Platform,
    ScrollView

} from 'react-native'

class DozeHoras extends Component{
    render(){
        return(
           
                <View style={styles.container}>
                    <View style={styles.postContainer}>
                        <Text style={styles.title}> 〇 12 Horas !!</Text>
                        <Text style={styles.subTitle}>
                           Neste tipo de jejum você passa a metade do dia sem comer.
                           Recomenda-se nestas 12 horas sem comer(incluindo as oito horas recomendadas de sono), beber àgua, chá(sem açúcar), ou café sem açúcar.
                           Na janela de alimentação, coma queijo fresco, frutas, verduras, pães integrais, seguindo a quantidade de caloricas que pode ser ingeridas por dia.
                        </Text>
                    </View>
                    
                </View>
            
        )
    }
}

const styles = StyleSheet.create({
    subTitle: {
        fontSize: 16,
        marginTop: Platform.OS === 'ios'? 30:10,
        color:'#333'
        
    },
    title: {
        fontSize: 18,
        marginTop: Platform.OS === 'ios'? 30:10,
        color: '#333',
        fontWeight:'bold'
    },
    container: {        
        flex:1,
        backgroundColor: '#87CEEB'
        
    },
    postContainer: {
        marginHorizontal:8,
        marginVertical:5,
        padding: 5,
        backgroundColor: '#FFF',
        borderRadius: 3
    },
})

export default DozeHoras