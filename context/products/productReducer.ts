import { GetBestQualificated } from '../../interfaces'
import { ProductState } from './ProductProvider'


   type ProductActionType = 
   | {type: 'Product - bestProducts', payload: GetBestQualificated[]}
   | {type : 'Product - selectedProduct', payload: GetBestQualificated}

     export const productReducer = (state: ProductState, action: ProductActionType): ProductState =>{

        switch (action.type) {
            case 'Product - bestProducts':
                return{
                 ...state,
                 bestProducts: action.payload
                  }
            case 'Product - selectedProduct': 
                  return{
                  ...state,
                  product: action.payload
                  }

                default:
                  return state
               }
     }