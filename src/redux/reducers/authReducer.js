
const initialState={
    isAuthenticated:false,
}
const token=localStorage.getItem('token');
if(token){
    initialState.isAuthenticated=true;
}





const authReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return{
                ...state,
                isAuthenticated:true,
            };
        default:
            return state;
        
    }
};
export default authReducer;