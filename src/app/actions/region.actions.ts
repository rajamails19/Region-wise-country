import { Action } from '@ngrx/store';

export enum ActionTypes {
    Add = '[Country Component] Get',
}

export class ActionEx implements Action {
    readonly type;
    payload: any;
}

export class CountryAdd implements ActionEx {
    readonly type = ActionTypes.Add;
    constructor(public payload: any) {
    }
}
