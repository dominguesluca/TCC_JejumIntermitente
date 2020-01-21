import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Platform,
    ScrollView

} from 'react-native'

class PeitoFrango extends Component{
    render(){
        return(
            
                
                <View style={styles.container}>
                    <View style={styles.postContainer}>
                        <Text style={styles.title}>Peito de frango crocante com queijo.</Text>
                        <Text style={styles.subTitle}>
                            Resulta em um prato saboroso e com 311 calorias.
                        </Text>

                        <Text style={styles.title}>Ingredientes:</Text>
                        <Text style={styles.subTitle}>◉ 3 unidades de peito de frango desossados.</Text>    
                        <Text style={styles.subTitle}>◉ 1 unidade de limão </Text>    
                        <Text style={styles.subTitle}>◉ 1 xícara (chá) de vinho branco </Text> 
                        <Text style={styles.subTitle}>◉ 2 xícaras (chá) de queijo parmesão ralado</Text>     
                        <Text style={styles.subTitle}>◉ 6 dentes de alho picados</Text>     
                        <Text style={styles.subTitle}>◉ sal a gosto</Text>     
                        <Text style={styles.subTitle}>◉ pimenta-do-reino a gosto</Text>    
                        
                        <Text style={styles.title}>Modo de preparo</Text>
                        <Text style={styles.subTitle}>
                                Corte os peitos ao meio.
                                Tempere com o suco de limão, o vinho, o sal e a pimenta.
                                Deixe marinar por 30 minutos no mínimo.
                                Em uma tigela, misture o queijo e o alho.
                                Empane os peitos de frango e coloque-os em uma assadeira untada com margarina.
                                Cubra com papel-alumínio e asse no forno alto, a 200 ºC,
                                preaquecido, durante 40 minutos.
                                Retire o papel e deixe dourar dos dois lados.
                                Sirva em seguida.
                                Dica: sirva acompanhado de salada verde.

                        </Text>
                    </View>    

                        
                </View>
            
        )
    }
}

const styles = StyleSheet.create({
    subTitle: {
        fontSize: 16,
        color:'#333',
        textAlign:'left',
        
    },
    title: {
        fontSize: 18,
        marginTop: Platform.OS === 'ios'? 30:10,
        fontFamily: 'Pacifico-Regular',
        color: '#333'
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

export default PeitoFrango