import { QuotationState } from './QuotationProvider'


   type QuotationActionType = 
   | {type: 'Quotation - ActionName'}

     export const quotationReducer = (state: QuotationState, action: QuotationActionType): QuotationState =>{

        switch (action.type) {
            case 'Quotation - ActionName':
                return{
                 ...state,
                  }

                default:
                  return state
               }
     }