import ACTIONS  from './Actions'

const reducre=(state,action)=>{
switch(action.type){
     case ACTIONS.NOTIFY:
      return{
          ...state,
           notify:action.payload

      };
      case ACTIONS.AUTH:
          return{
              ...state,
               auth:action.payload
    
          };
          case ACTIONS.ADD_CART:
            return {
                ...state,
                cart: action.payload
            };

}
}

export default reducre;