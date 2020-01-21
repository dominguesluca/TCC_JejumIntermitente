import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Platform,
    ScrollView

} from 'react-native'
class DietaPaleolitica extends Component{
    render(){
        return(
           
                <View style={styles.container}>
                    <View style={styles.containerTexto}>
                            <Text style={styles.title}>Dieta Paleolítica</Text>
                            <Text style={styles.subTitle}>◉ O segredo é tentar seguir uma alimentação como tinha os ancestrais. </Text>
                            <Text style={styles.subTitle}>◉ Carne vermelha;</Text>
                            <Text style={styles.subTitle}>◉ Castanha;</Text>
                            <Text style={styles.subTitle}>◉ Carboidratos.</Text>
                            <Text style={styles.title}> Riscos:</Text>
                            <Text style={styles.subTitle}>◉ Exclusão de leites e derivados pode levar à deficiência de cálcio, por estes serem as principais fontes;</Text>
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

export default DietaPaleolitica