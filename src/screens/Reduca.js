import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView

} from 'react-native'


class Reduca extends Component {
  
    render() {
        return (
        
            <ScrollView >
                <View style={styles.container}>
                    <Text style={styles.titulo}>Passo à passo para mudar hábitos alimentares</Text>
                      <View style={styles.containerItem}>  
                        <Text style={styles.texto}>
                            ◉ Criar o hábito de beber água,
                            quando estiver com fome, ou vontade de comer um doce.
                        </Text>
                      </View>
                      
                      <View style={styles.containerItem}>  
                        <Text style={styles.texto}>
                            ◉ Troque produtos industrializados por verduras e
                            frutas, para reeducar o paladar.
                            Em suas refeições de sua dieta, escolha incialmente vegetais
                            de sua preferência e aos poucos vai variando e eliminando os produtos industrializados
                        </Text>
                      </View>

                      <View style={styles.containerItem}>
                        <Text style={styles.texto}>
                            ◉ Aos poucos substitua bebidas como: refrigerante, suco em caixinha ou em pó.
                            Consuma sucos naturais, de preferência aos sucos da fruta, que pode ser feito em casa
                            seguindo a quantidade de calorias em sua dieta.
                        </Text>
                      </View>

                      <View style={styles.containerItem}>  
                        <Text style={styles.texto}>
                            ◉ Passe a fazer refeições sem acompanhamento, como refrigerants, sucos ou água.
                            Deixe para tomar um compo de água ou suco, após comer.
                        </Text>
                      </View> 

                      <View style={styles.containerItem}> 
                        <Text style={styles.texto}>◉ Coma lentamente. Pois o organismo demora cerca de vinte minutos para passar a 
                            informação de saciedade para o cérebro.
                            Comer rapidamente, você ingere um quantidade maior de comida, do que o seu corpo precisa.
                        </Text>
                      </View>  
                            
                      <View style={styles.containerItem}>      
                        <Text style={styles.texto}>
                             ◉ Entender que nem todo momento que se sente fome, é fome de verdade.
                             Beba água, chá ou café(sem açúcar).
                        </Text>
                      </View>

                      <View style={styles.containerItem}>  
                        <Text style={styles.texto}>
                             ◉ Reduza a ingestão de açúcares e adoçantes.
                        </Text>
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
    containerItem:{
       flex:1,
       alignItems:'center',
       backgroundColor:'#F5FFFA', 
       padding: 25,
       marginHorizontal:4,
       marginVertical:3,
       borderRadius:3,
    },
    titulo:{
        fontSize: 20,
        fontFamily: 'Pacifico-Regular',
        textAlign:'center',
        color: '#FFF'
    },
    texto:{
        fontSize: 18,
        textAlign:'justify',
        color: '#1C1C1C',
        

    }
})

export default Reduca