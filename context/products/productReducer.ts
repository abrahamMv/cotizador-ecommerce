import { ProductState } from './ProductProvider'


   type ProductActionType = 
   | {type: 'Product - ActionName'}

     export const productReducer = (state: ProductState, action: ProductActionType): ProductState =>{

        switch (action.type) {
            case 'Product - ActionName':
                return{
                 ...state,
                  }

                default:
                  return state
               }
     }