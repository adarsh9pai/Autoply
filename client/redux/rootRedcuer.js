import { ServerName } from "../secret";

const initState = {
    companies: [],
    user: {},
}

export const RootReducer = async (state = initState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            console.log('action', action)
            break;

        default:
            // console.log('ran this')
            const allCompanies = await fetch(ServerName + 'company/all').catch(err => console.log(err));
            const companyJson = await allCompanies.json().catch(err => console.log(err));
            console.log(companyJson)
            state = {
                ...state,
                companies:[
                    ...companyJson
                ],
            }
            //free to use allCompanies 
            console.log('got the state')
            return state
    }
}