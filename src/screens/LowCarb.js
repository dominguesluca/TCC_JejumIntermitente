import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Platform,
    ScrollView

} from 'react-native'

class LowCarb extends Component{
    render(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.containerTexto}>
                            <Text style={styles.title}>Dieta Low-Carb</Text>
                                <Text style={styles.subTitle}>
                                    Redução do consumo de carboidratos simples na alimentação,
                                    como arroz branco, macarrão e pão. Para compensar a redução no carboidrato, 
                                    deve-se aumentar a ingestão de proteínas como carnes e ovos,
                                    e de gorduras boas, que estão presentes em alimentos como abacate,
                                    castanhas, azeite e peixes como sardinha e salmão.
                                </Text>
                    

                            <Text style={styles.title}>Alimentos Permitidos:</Text>
                                 <Text style={styles.subTitle}>◉ Frutas, verduras e legumes;</Text>
                                 <Text style={styles.subTitle}>◉ Carne, frango e peixes;</Text> 
                                 <Text style={styles.subTitle}>◉ Queijos;</Text> 
                                 <Text style={styles.subTitle}>◉ Ovos</Text> 
                                 <Text style={styles.subTitle}>◉ Azeite, óleo de coco e manteiga;</Text> 
                                 <Text style={styles.subTitle}>◉ Nozes, amêndoas, avelãs, castanha-do-pará, amendoim;</Text> 
                                 <Text style={styles.subTitle}>◉ Sementes em geral, como chia, linhaça, girassol e gergelim;</Text> 
                                 <Text style={styles.subTitle}>◉ Café e chás sem açúcar</Text> 
                                 <Text style={styles.subTitle}>◉ Água, de 2 a 3 litros por dia.</Text> 
                            
                            <Text style={styles.title}>Alimentos Proibidos:</Text>
                                 <Text style={styles.subTitle}>◉ Refrigerantes, sucos de fruta, adoçantes, doces, sorvetes, bolos e biscoitos;</Text>
                                 <Text style={styles.subTitle}>◉ Cereais, como trigo, cevada ou centeio, e alimentos como o pão, biscoitos, salgados, torradas;</Text> 
                                 <Text style={styles.subTitle}>◉ Gorduras trans: batata frita embalada, comida pronta congelada, margarinas;</Text> 
                                 <Text style={styles.subTitle}>◉ Carnes processadas: presunto, peito de peru, salsicha, linguiça, salame, mortadela, bacon</Text> 
                                 <Text style={styles.subTitle}>◉ Outros: arroz branco, macarrão branco, farofa, tapioca e cuscuz;</Text> 

                    </View>
                </View>
            </ScrollView> 
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
        //alignItems:'center',
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
         textAlign:'left',
         color: '#1C1C1C',
         
 
     }
})

export default LowCarb