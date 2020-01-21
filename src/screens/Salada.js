import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Platform,
    ScrollView

} from 'react-native'

class Salada extends Component{
    render(){
        return(
            
                
                <View style={styles.container}>
                    <View style={styles.postContainer}>
                        <Text style={styles.title}>Salada de frango tropical.</Text>
                        <Text style={styles.subTitle}>
                            Resulta em um prato saboroso e com 216 calorias.
                        </Text>

                        <Text style={styles.title}>Ingredientes:</Text>
                        <Text style={styles.subTitle}>◉ 300 gramas de peito de frango cozido e desfiado.</Text>    
                        <Text style={styles.subTitle}>◉ 2 colheres (sopa) de suco de limão. </Text>    
                        <Text style={styles.subTitle}>◉ 1 xícara (chá) de erva-doce em fatias . </Text> 
                        <Text style={styles.subTitle}>◉ 1 xícara (chá) de uva-itália cortada ao meio, sem semente .</Text>     
                        <Text style={styles.subTitle}>◉ 1/2 xícara (chá) de pimentão vermelho picado .</Text>     
                        <Text style={styles.subTitle}>◉ 1 unidade de cebola pequena picada.</Text>     
                        <Text style={styles.subTitle}>◉ 1/2 xícara (chá) de maionese.</Text>    
                        <Text style={styles.subTitle}>◉ 1/2 maço de alface lisa ou crespa.</Text>
                        <Text style={styles.subTitle}>◉ 1/2 maço de rúcula  </Text>
                        <Text style={styles.subTitle}>◉ sal a gosto </Text>
                        <Text style={styles.subTitle}>◉ pimenta-do-reino a gosto  </Text>  


                        <Text style={styles.title}>Modo de preparo</Text>
                        <Text style={styles.subTitle}>
                                Em uma tigela grande, coloque o frango desfiado.
                                Tempere com o suco de limão.
                                Acrescente a erva-doce, a uva, o pimentão, a cebola e tempere com sal e pimenta.
                                Misture os ingredientes com a maionese.
                                Em uma saladeira, disponha as folhas de alface e rúcula lavadas e secas.
                                Em cima de cada uma, coloque o recheio e enfeite com os cubinhos de manga.
                                Dica: a maionese pode ser substituída por molho rosê.

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

export default Salada