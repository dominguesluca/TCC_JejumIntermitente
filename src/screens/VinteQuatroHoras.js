import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Platform
} from 'react-native'

class VinteQuatroHoras extends Component{
    render(){
        return(
           
                <View style={styles.container}>
                    <View style={styles.postContainer}>
                        <Text style={styles.title}>〇 24 Horas !!</Text>
                        <Text style={styles.subTitle}>
                           Este tipo de jejum é recomendado para quem ja é hábituado à prática do jejum.
                           Também é recomendado fazer um o dois dias da semana.
                           Ele é basicamente ficar 24 horas sem comer, somente bebendo água, chás, café sem adoçantes ou açúcar.
                           Pode se misturar à agua, pequenas gotas de limão.
                           Caso a pressão abaixe: coloca-se pequena quantidade de sal na agúa. 
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

export default VinteQuatroHoras