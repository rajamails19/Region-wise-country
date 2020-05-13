import { ActionEx, ActionTypes } from '../actions/region.actions';


export const initialState = [];
export function RegionReducer(state = initialState, action: ActionEx) {
    switch (action.type) {
        case ActionTypes.Add:
            return [...state, action.payload];
        default:
            return state;
    }
}
