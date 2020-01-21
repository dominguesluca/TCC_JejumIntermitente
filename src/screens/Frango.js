import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Platform,
    ScrollView

} from 'react-native'

class Frango extends Component{
    render(){
        return(
            <ScrollView>
                
                <View style={styles.container}>
                    <View style={styles.postContainer}>
                        <Text style={styles.title}>Cubos de frango com vegetais e ervas</Text>
                        <Text style={styles.subTitle}>
                            Resulta em um prato saboroso e com 228 calorias
                        </Text>

                        <Text style={styles.title}>Ingredientes:</Text>
                        <Text style={styles.subTitle}>
                            ◉ 1 peito + 2 coxas com sobrecoxas de frango sem pele e sem osso
                            ◉ 2 colheres (sopa) de azeite
                            ◉ 1/2 colher (sopa) de cúrcuma (açafrão-da-terra)
                            ◉ 2 colheres (sopa) de suco de limão
                            ◉ Sal e pimenta-do-reino a gosto
                            ◉ 4 batatas médias, sem casca, cortadas em quatro
                            ◉ 2 cenouras, sem casca, em tiras
                            ◉ 1 pimentão verde, 1 vermelho e 1 amarelo em tiras finas
                            ◉ 2 xícaras (chá) de flores de brócolis
                            ◉ 1 xícara (chá) de tomatinhos cortados ao meio
                            ◉ 1/2 xícara (chá) de molho de soja light (shoyu)
                            ◉ 1/2 xícara (chá) de água
                            ◉ 4 colheres (sopa) de folhas  de tomilho, alecrim e manjericão picadas
                            ◉ Salsa picada para polvilhar
                        </Text>
                        <Text style={styles.title}>Modo de preparo</Text>
                        <Text style={styles.subTitle}>
                                Corte a carne em cubos, tempere com azeite, cúrcuma, suco de limão, sal e piment-do-reino.
                                Cubra e gele por uma noite. Aqueça o óleo restante e doure os cubos de carne escorridos 
                                do tempero (reserve a marinada), mexendo sempre.
                                Transfira para um refratário e distribua as batatas, as cenouras, os pimentões, 
                                os brócolis e os tomatinhos por cima. Numa tigela, misture o tempero reservado com o shoyu,
                                a água e as ervas. Espalhe sobre os ingredientes no refratário. Cubra com papel-alumínio e leve ao 
                                forno, preaquecido em temperatura média, por 30 minutos ou até os vegetais ficarem cozidos 
                                (mas sem desmanchar). Remova o papel-alumínio e deixe dourar um pouco. Polvilhe com a salsa e sirva-se.
                        </Text>
                    </View>    

                        
                </View>
            </ScrollView>
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

export default Frango