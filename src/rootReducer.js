//Root Reducer for meme-generator 
const INITIAL_STATE =[
			 {
			  id:1,
			  url: "https://www.google.com/",
			  topMessage: "James Bond",
			  bottomMessage: "GoldenEye"
			}
	]

function rootReducer(state=INITIAL_STATE, action){
	switch(action.type)
	{
	case "ADD":
		return [...state, {...action.meme}]
	case "REMOVE":
		return [...state, {meme:state.filter(m=> m.id !== action.meme.id)}]
	default:
		return state 
	}
}


export default rootReducer