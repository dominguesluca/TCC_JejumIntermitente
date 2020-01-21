import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Platform,
    ScrollView

} from 'react-native'

class Acem extends Component{
    render(){
        return(
       
                <View style={styles.container}>
                    
                    <View style={styles.postContainer}>
                        <Text style={styles.title}>Cozido de acém e legumes</Text>
                        <Text style={styles.subTitle}>
                            Resulta em um prato saboroso e com 289 calorias
                        </Text>

                        <Text style={styles.title}>Ingredientes:</Text>
                        <Text style={styles.subTitle}>
                            
                            ◉  1,5 kg de acém cortado em cubos grandes
                            ◉  3 colheres (sopa) de óleo
                            ◉  1 cebola picada
                            ◉  2 dentes de alho picados
                            ◉  3 colheres (sopa) de mostarda
                            ◉  1 xícara (chá) de caldo de carne
                            ◉  1 colher (sopa) de manteiga
                            ◉  2 talos de alho-poró cortados em rodelas finas
                            ◉  1 cenoura cortada em rodelas finas
                            ◉  sal a gosto
                            ◉  pimenta-do-reino a gosto

                        </Text>
                        <Text style={styles.title}>Modo de preparo</Text>
                        <Text style={styles.subTitle}>
                                Tempere a carne com o sal e a pimenta.
                                Em uma panela de pressão, aqueça o óleo, doure acarne, junte a cebola, o alho e doure mais um pouco, mexendo para não queimar.
                                Junte a mostarda e refogue mais um pouco, mexendo sem parar.
                                Acrescente o caldo de carne, tampe a panela e cozinhe no fogo baixo (160 ºC), por 30 minutos, após o início da pressão.
                                Deixe sair a pressão e verifique se a carne está macia. Reserve.
                                Em uma frigideira, derreta a manteiga, junte o alho-poró e a cenoura.
                                Acrescente o sal e refogue até os legumes ficarem macios.
                                Sirva a carne com os legumes.

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

export default Acem