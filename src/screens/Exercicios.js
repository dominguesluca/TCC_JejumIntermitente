import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Platform,
    ScrollView,
    Dimensions,
    Image

} from 'react-native'

import abdominal from '../../assets/imgs/abdomnal.jpg'
import afundo from '../../assets/imgs/Afundo.jpg'
import agachamento from '../../assets/imgs/agachamento.jpg'
import burpee from '../../assets/imgs/Burpee-Adaptado.jpg'
import flexoes from '../../assets/imgs/flexoes.jpg'
import joelhoElevado from '../../assets/imgs/joelhos-elevados-4.jpg'
import polichinelo from '../../assets/imgs/polichinelo.jpg'
import prancha from '../../assets/imgs/prancha.jpg'
import pranchaLateral from '../../assets/imgs/pranchaLateral.jpeg'
import step from '../../assets/imgs/step.jpg'
import triceps from '../../assets/imgs/tricps.jpg'

class Exercicios extends Component{
    render(){
        return(
            <ScrollView style={styles.scrollcontainer}>
                <View style={styles.container}>
                    <Text style={styles.title}>Treino de sete minutos</Text>
                        
                        <Text style={styles.subTitle}>◉ 12 exercícios</Text> 
                        <Text style={styles.subTitle}>◉ 30 segundos cada</Text>    
                        <Text style={styles.subTitle}>◉ 10 segundos de descanso entre eles</Text>
                        
                    
                <View style={styles.rowContainer}>
                    <Text style={styles.subTitle}>Abdominal</Text>
                    <Image source={abdominal} style={styles.image} />
                </View>

                <View style={styles.rowContainer}>
                    <Text style={styles.subTitle}> Afundo</Text>
                    <Image source={afundo} style={styles.image} />
                </View>

                <View style={styles.rowContainer}>
                    <Text style={styles.subTitle}>Agachamento</Text>
                    <Image source={agachamento} style={styles.image} />
                </View>

                <View style={styles.rowContainer}>
                    <Text style={styles.subTitle}>Burpee</Text>
                    <Image source={burpee} style={styles.image} />
                </View>

                <View style={styles.rowContainer}>
                    <Text style={styles.subTitle}>Flexões</Text>
                    <Image source={flexoes} style={styles.image} />
                </View>

                <View style={styles.rowContainer}>
                    <Text style={styles.subTitle}>Joelho Elevado</Text>
                    <Image source={joelhoElevado} style={styles.image} />
                </View>

                <View style={styles.rowContainer}>
                    <Text style={styles.subTitle}>Polichinelo</Text>
                    <Image source={polichinelo} style={styles.image} />
                </View>

                <View style={styles.rowContainer}>
                    <Text style={styles.subTitle}>Prancha</Text>
                    <Image source={prancha} style={styles.image} />
                </View>

                <View style={styles.rowContainer}>
                    <Text style={styles.subTitle}>Prancha lateral</Text>
                    <Image source={pranchaLateral} style={styles.image} />
                </View>

                <View style={styles.rowContainer}>
                    <Text style={styles.subTitle}>Step</Text>
                    <Image source={step} style={styles.image} />
                </View>

                <View style={styles.rowContainer}>
                    <Text style={styles.subTitle}>Tríceps com apoio</Text>
                    <Image source={triceps} style={styles.image} />
                </View>
                </View> 
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    scrollcontainer:{
        flex: 1,
        backgroundColor: '#87CEEB'
    },
    subTitle: {
        fontSize: 18,
        marginTop: Platform.OS === 'ios'? 30:10,
        color: '#000000'
   },
    title: {
        fontSize: 18,
        marginTop: Platform.OS === 'ios'? 30:10,
        fontFamily: 'Pacifico-Regular' 
    },
    container: {
        marginHorizontal:8,
        marginVertical:5,
        padding: 5,
        backgroundColor: '#FFF',
        borderRadius: 3
    },
    image:{
        height: 300,
        width: 250,
        resizeMode: 'contain'
        
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    }
    
})

export default Exercicios