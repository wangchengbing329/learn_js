import { repositoriesReducer } from "./repositories";
import {combineReducers} from 'redux';
import { RepositoryEntity } from "../model";

export interface State{
    repositories:RepositoryEntity[]
}
export const state = combineReducers<State>({
    repositories:repositoriesReducer
})