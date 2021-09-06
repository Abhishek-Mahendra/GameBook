const intialState={game: {platforms: []},screen: {results: []}, isLoading:true};


const detailReducer =(state=intialState,action)=>{
    switch(action.type){
        case "GET_DETAIL":
            return{
                ...state,
                game: action.payload.game,
                screen: action.payload.screen,
                isLoading: false,
            };
        case "LOADING_DETAIL":
            return{
                ...state,
                isLoading:true,
            };
        case "CLEAR_SEARCHED":
            return{...state,
                    searched:[]}
        default:
            return{...state}
    }
}
export default detailReducer;