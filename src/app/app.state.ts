import { ActionReducerMap } from "@ngrx/store";
import * as bananaStore from "./banana/state";

export interface AppState {
  banana: bananaStore.State;
}

export const initialState: AppState = {
  banana: bananaStore.initialState,
};

export const reducers: ActionReducerMap<AppState> = {
  banana: bananaStore.reducer,
};

export const effects: Array<any> = [bananaStore.BananaEffects];

/**
 * !!! This method is exposed to any component of files from want info on the knowledge of "Banana" state
 * @param state
 */
export const getMyBanana = (state: AppState) => state.banana;
