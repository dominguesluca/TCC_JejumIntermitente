import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Platform,
    ScrollView

} from 'react-native'

class Peixe extends Component{
    render(){
        return(
           
                
                <View style={styles.container}>
                    <View style={styles.postContainer}>
                        <Text style={styles.title}>Peixe assado a vapor.</Text>
                        <Text style={styles.subTitle}>
                            Resulta em um prato saboroso e com 280 calorias.
                        </Text>

                        <Text style={styles.title}>Ingredientes:</Text>
                        <Text style={styles.subTitle}>◉ 1 kg de peixe cortado em cubos grandes .</Text>    
                        <Text style={styles.subTitle}>◉ 1/2 xícara (chá) de coco fresco ralado. </Text>    
                        <Text style={styles.subTitle}>◉ 1/4 xícara (chá) de hortelã fresca picada (reserve algumas folhas para decorar). </Text> 
                        <Text style={styles.subTitle}>◉ 4 dentes de alho amassados</Text>     
                        <Text style={styles.subTitle}>◉ 4 pimenta-dedo-de-moça sem sementes picadas </Text>     
                        <Text style={styles.subTitle}>◉ 1/2 xícara (chá) de suco de limão </Text>     
                        <Text style={styles.subTitle}>◉ 1/4 xícara (chá) de vinagre branco </Text>    
                        <Text style={styles.subTitle}>◉ 3/4 xícara (chá) de Água  </Text>
                        <Text style={styles.subTitle}>◉ sal a gosto </Text>  


                        <Text style={styles.title}>Modo de preparo</Text>
                        <Text style={styles.subTitle}>
                                Corte 2 folhas duplas de papel-alumínio em 4 quadrados de 30 cm. Reserve.
                                Tempere o peixe com o sal e a pimenta.
                                Misture o coco, a hortelã, o alho, o cominho, as pimentas e o suco de limão.
                                Divida o peixe entre as folhas de papel.
                                Espalhe a mistura de tempero sobre o peixe, feche o pacote e amarre com um barbante.
                                Dilua o vinagre na água e coloque em uma panela,
                                Cubra a panela com uma cestinha para cozimento a vapor e, na cesta, disponha os pacotes de peixe.
                                Cozinhe por 15 minutos depois que a água ferver.
                                Abra os pacotinhos e decore com folhas de hortelã ou ervas 
                                frescas, de sua preferência, picadas.

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

export default Peixe