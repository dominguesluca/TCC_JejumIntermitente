import React, { Component } from 'react'
//import { connect } from 'react-redux'
import { StyleSheet, FlatList, View } from 'react-native'
import Header from '../components/Header'
import  Post from '../components/Post'

class Feed extends Component{
    
    state = {
        posts: [{
            id: Math.random(),
            nickname: 'Heitor Zannuto',
            email: 'heitorznutto@gmail.com',
            imagem: require('../../assets/imgs/jejum1.jpg'),
            comments: [{
                nickname: 'Roger Oliveira',
                comment: 'Gostei !!'
            },{
                nickname: 'Geneilson',
                comment: 'Agora ja sei o que comer :).'
            }]
        },{
            id: Math.random(),
            nickname: 'Angelica Mayara',
            email: 'angelica@gmail.com',
            imagem: require('../../assets/imgs/agachamento.jpg'),
            comments: [{
                nickname: 'Leonardo Siqueira',
                comment: 'Esse exercicio ajuda a emagrecer? !!'
            },{
                nickname: 'Angelica Mayara',
                comment: 'É muito eficaz.!'
            }]
        }]
    }
    render(){
        return(
            <View style={styles.container}>
                <Header/>
                <FlatList
                    data={this.props.posts}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({item}) =>
                        <Post key={item.id}{...item}/>}/>            
            </View>
        )
    }
    /**
     * render(){
        return(
            <View style={styles.container}>
                <Header/>
                <FlatList
                    data={this.props.posts}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({item}) =>
                        <Post key={item.id}{...item}/>}/>            
            </View>
        )
    }
     */
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
})

/*const mapStateToProps =({posts})=>{
    return{
        posts:posts.posts
    }
}
*/
//export default connect(mapStateToProps)(Feed)
export default Feed