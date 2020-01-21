import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Platform,
    ScrollView

} from 'react-native'

class Parmegiana extends Component{
    render(){
        return(
                <View style={styles.container}>
                    <View style={styles.postContainer}>
                        <Text style={styles.title}> Bife à parmegiana light</Text>
                        <Text style={styles.subTitle}>
                            Resulta em um prato saboroso e com 336 calorias
                        </Text>

                        <Text style={styles.title}>Ingredientes:</Text>
                        <Text style={styles.subTitle}>
                            ◉ 6 bifes de frango
                            ◉ 1/2 xícara (chá) de farinha de trigo
                            ◉ 2 unidades de clara de ovo levemente batidas
                            ◉ 1 1/2 xícara (chá) de farinha de rosca light
                            ◉ 1/2 colher (sopa) de azeite de oliva
                            ◉ 1 dente de alho picado
                            ◉ 1 lata de tomate pelado
                            ◉ 1 xícara (chá) de queijo mussarela light ralada grosseiramente
                            ◉ 3 colheres (sopa) de queijo parmesão light ralado fino
                            ◉ alho amassado a gosto
                            ◉ azeite de oliva para untar
                            ◉ sal a gosto
                            ◉ sal e salsa picada a gosto


                        </Text>
                        <Text style={styles.title}>Modo de preparo</Text>
                        <Text style={styles.subTitle}>
                            Tempere a carne com o sal e o alho.
                            Passe os bifes na farinha de trigo.
                            Depois na clara e, posteriormente, na farinha de rosca, cobrindo-os bem.
                            leve ao forno, preaquecido em temperatura média (170 ºC a 190 ºC), por 4 minutos, vire-os e deixe mais 4 minutos
                            Retire do forno e reserve.
                            leve ao fogo uma panela com o azeite.
                            Refogue o alho e junte o tomate pelado.
                            Tempere com o sal e a salsa.
                            Cubra os bifes com o molho quente.
                            Por cima, disponha a mussarela e o queijo ralado.
                            Leve ao forno novamente por cinco minutos apenas para aquecer.
                            Retire do forno e sirva em seguida.

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

export default Parmegiana