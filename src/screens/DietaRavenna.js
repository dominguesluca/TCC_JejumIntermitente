import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Platform,
    ScrollView

} from 'react-native'
class DietaRavena extends Component{
    render(){
        return(
            
                <View style={styles.container}>
                    <View style={styles.containerTexto}>
                            <Text style={styles.title}>Dieta Ravenna</Text>
                            <Text style={styles.subTitle}>◉  Exclui do grupo alimentar, apenas alimentos feitos com farinha e açúcares refinados – os famosos carboidratos simples;</Text>
                            <Text style={styles.subTitle}>◉  A Ingestão fica limitada à míseras 800 calorias por dia. A recomendação da Organização Mundial da Saúde é de pelo menos 1.000 calorias por dia;</Text>
                            <Text style={styles.subTitle}>◉  São feitas apenas quatro refeições ao dia e elas precisam seguir um ritual rígido de ordem para cada alimento que será ingerido.</Text>
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

export default DietaRavena