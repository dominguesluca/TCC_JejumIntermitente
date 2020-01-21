import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Platform,
    ScrollView

} from 'react-native'

class CafeDaManha extends Component{
    render(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.postContainer}>
                        <Text style={styles.title}>Opção 1</Text>
                        <Text style={styles.subTitle}>◉ 1 copo (250 ml) de suco verde (sem açúcar).</Text>
                        <Text style={styles.subTitle}>◉ 1 pedaço (30 g) de coco fresco.</Text>
                    </View>    
                </View>

                <View style={styles.container}>
                    <View style={styles.postContainer}>
                        <Text style={styles.title}>Opção 2</Text>
                        <Text style={styles.subTitle}>◉ 1 copo (250 ml) de leite semidesnatado batido com 1/2 maçã (ou 1 polpa de fruta), 1 col. (sopa) de aveia e canela.</Text>
                        
                    </View>    
                </View>

                <View style={styles.container}>
                    <View style={styles.postContainer}>
                        <Text style={styles.title}>Opção 3</Text>
                        <Text style={styles.subTitle}>◉ 1 xíc. (chá) de café com um pouco de leite semidesnatado(sem açúcar).</Text>
                        
                    </View>    
                </View>

                <View style={styles.container}>
                    <View style={styles.postContainer}>
                        <Text style={styles.title}>Opção 4</Text>
                        <Text style={styles.subTitle}>◉ 2 torradas integrais.</Text>
                        <Text style={styles.subTitle}>◉ 1 Polenguinho Light (ou 4 col./sopa de queijo cottage light).</Text>
                        <Text style={styles.subTitle}>◉ 1 xíc. (chá) de cappuccino light.</Text>
                    </View>    
                </View>

                <View style={styles.container}>
                    <View style={styles.postContainer}>
                        <Text style={styles.title}>Opção 5</Text>
                        <Text style={styles.subTitle}>◉ 1/2 papaia com 2 col. (sopa) de granola sem açúcar.</Text>
                    </View>    
                </View>

                <View style={styles.container}>
                    <View style={styles.postContainer}>
                        <Text style={styles.title}>Opção 6</Text>
                        <Text style={styles.subTitle}>◉ 1 iogurte natural desnatado.</Text>
                        <Text style={styles.subTitle}>◉ 1 banana fatiada com 1 col. (sopa) de mel.</Text>
                    </View>    
                </View>

                <View style={styles.container}>
                    <View style={styles.postContainer}>
                        <Text style={styles.title}>Opção 7</Text>
                        <Text style={styles.subTitle}>◉ 1 copo de suco de laranja batido com acerola.</Text>
                        <Text style={styles.subTitle}>◉ 1/2 queijo quente (1 fatia de pão integral com 1 fatia de  queijo-de-minas).</Text>
                    </View>    
                </View>

                <View style={styles.container}>
                    <View style={styles.postContainer}>
                        <Text style={styles.title}>Opção 8</Text>
                        <Text style={styles.subTitle}>◉ 1 iogurte light.</Text>
                        <Text style={styles.subTitle}>◉ 1 barra de nuts (sem xarope de glicose).</Text>
                        <Text style={styles.subTitle}>◉ 1 maçã.</Text>
                    </View>    
                </View>

                <View style={styles.container}>
                    <View style={styles.postContainer}>
                        <Text style={styles.title}>Opção 9</Text>
                        <Text style={styles.subTitle}>◉ 1 banana cozida com canela e 1 col. (chá) de mel.</Text>
                        <Text style={styles.subTitle}>◉ 1 Yakult.</Text>
                    </View>    
                </View>

                <View style={styles.container}>
                    <View style={styles.postContainer}>
                        <Text style={styles.title}>Opção 10</Text>
                        <Text style={styles.subTitle}>◉ 1 xíc. (chá) de cereal matinal integral sem açúcar com 1 copo (250 ml) de leite semidesnatado gelado.</Text>
                    </View>    
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    subTitle: {
        fontSize: 16,
        marginTop: Platform.OS === 'ios'? 30:10,
        color:'#333',
        alignItems:'center'
        
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

export default CafeDaManha