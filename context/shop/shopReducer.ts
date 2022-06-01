import { ShopState } from './ShopProvider'


   type ShopActionType = 
   | {type: 'Shop - ActionName'}

     export const ShopReducer = (state: ShopState, action: ShopActionType): ShopState =>{

        switch (action.type) {
            case 'Shop - ActionName':
                return{
                 ...state,
                  }

                default:
                  return state
               }
     }