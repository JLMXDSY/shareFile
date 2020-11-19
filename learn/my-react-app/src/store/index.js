import {createStore,combineReducers} from 'redux';

// store
const initialUser = {
    isLogin:false,
    user:{name:null}
}


// reducer
function loginReducer(state,action){
    switch(action.type){
        case 'getUserInfo':
            return {...initialUser};
        case 'loginSuccess':
            return {...state,isLogin:true,user:{name:'小明'}};
        default:
            return {...initialUser};
    }
}

function countReducer (state=0,action){
    switch(action.type){
        case 'ADD':
            return state+1;
        case 'MINUS':
            return state-1;
        default:
            return state;
    }
}

// 合并reducers

const reducers = combineReducers({
    countReducer,
    user:loginReducer
})
const store = createStore(reducers);
export default store;