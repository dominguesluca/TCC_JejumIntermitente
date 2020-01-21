import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Platform,
    ScrollView

} from 'react-native'
class DietaDukan extends Component{
    render(){
        return(
            
                <View style={styles.container}>
                    <View style={styles.containerTexto}>
                            <Text style={styles.title}>Dieta Dukan</Text>
                            <Text style={styles.subTitle}>◉ A alimentação deve ser baseada em proteínas, com redução considerável de carboidratos e também frutas, legumes e verduras.</Text>
                            <Text style={styles.subTitle}>◉ O consumo das proteínas ajuda a preservar a massa magra do corpo;</Text>
                            <Text style={styles.subTitle}>◉ baixo consumo de carboidratos pode resultar na falta de energia e também a constipação pelo pouco consumo de fibras;</Text>
                            <Text style={styles.subTitle}>◉ Há quem sinta um desconforto gástrico maior, pois as proteínas têm um processo de digestão mais lento.</Text>      
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
        alignItems:'center',
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
         textAlign:'justify',
         color: '#1C1C1C',
         
 
     }
})

export default DietaDukan