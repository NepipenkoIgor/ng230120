import { Action, createReducer } from '@ngrx/store';

export interface IUser {
  '_id': string;
  'name': string;
  'bonuses': number;
}

export const initialState: IUser = {
  _id: 'asdasd123412as',
  name: 'Igor',
  bonuses: 0.8,
};

const scoreboardReducer = createReducer(
  initialState
);

export function userReducer(state: IUser | undefined, action: Action) {
  return scoreboardReducer(state, action);
}
