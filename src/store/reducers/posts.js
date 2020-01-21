import { ADD_POST, ADD_COMMENT } from '../actions/actionTypes'

const initialState = {
        posts:[{
            id: Math.random(),
            nickname: 'Heitor Zannuto',
            email: 'heithor@gmail.com',
            image: require('../../../assets/imgs/jejum.jpg'),
            comments:[{
                nickname: ' Lucas Domingues',
                comment: '  Melhorou minha vida!!'
            },{
                nickname: 'Angelica Mayara',
                comment: '  Uaaau!!.'
            }]
        },{
            id:Math.random(),
            nickname: 'Lucas Prissinotto',
            email: 'prissinotoo@gmail.com',
            image: require('../../../assets/imgs/jejum1.jpg'),
            comments: [{
                nickname: 'Roger Oliveira',
                comment: 'Gostei deste Estilo de vida! '
            }]
        }]
    
}

const reducer = (state = initialState, action) =>{
    switch (action.tipy){
        case ADD_POST:
            return{
                ...state,
                posts: state.posts.concat({
                    ...action.payload
                })
            }
        case ADD_COMMENT:
            return{
                ...state,
                posts: state.posts.map(post => {
                    if(post.id === action.payload.postId){
                        if(post.comments){
                            post.comments = post.comments.concat(
                                action.payload.comment
                            )
                        }else{
                            post.comments = [action.payload.comment]
                        }
                    }
                    return post
                })
            }    
        default:
            return state    
    }
}

export default reducer