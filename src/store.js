import {createStore} from 'redux';


const initialState={
	posts:[]
}



const rootReducer= function( state=initialState,action){

switch(action.type) {


				case 'ADD_POST':
					state.posts = state.posts.concat(action.post)
				break;

				case 'COMMENT_POST':
					state.posts.map(post => {
						if (post.id === action.postId) {
							return post.likes++
						}

						return post
					})
				break;
			}

			return state;
		}



const store= createStore(rootReducer)

export default store;