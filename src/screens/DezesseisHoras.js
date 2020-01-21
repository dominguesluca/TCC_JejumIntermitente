import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Platform
} from 'react-native'

class DezesseisHoras extends Component{
    render(){
        return(

                <View style={styles.container}>
                    <View style={styles.postContainer}>
                        <Text style={styles.title}>〇 16 Horas !!</Text>
                        <Text style={styles.subTitle}>
                           Deve se ficar de jejum por 16 horas, fazendo entre duas e três refeições nas oit horas restantes.</Text>
                           <Text style={styles.title}>Acorde a 7 horas da manhã</Text>
                           <Text style={styles.subTitle}>Beba àgua, café, chás sem açúcar ou adoçante.
                                Não beba sucos ou bebidas calóricas.
                           </Text>
                           <Text style={styles.title}> ๐ Almoce às 12 horas( meio dia)</Text>
                           <Text style={styles.subTitle}>Não coma carboidratos. Prefira proteínas, gorduras boas, legumes e verduras.</Text>
                           <Text style={styles.title}> ๐ Lanche as 16 horas.</Text>
                           <Text style={styles.subTitle}>Refeição opcional.</Text>
                           <Text style={styles.title}> ๐ Jante às 20 horas</Text>
                           <Text style={styles.subTitle}>Não exagere na quantidade, pois esta será a última refeição.</Text>
                           <Text style={styles.title}> ๐ Durma antes das 23 horas</Text>    
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

export default DezesseisHoras