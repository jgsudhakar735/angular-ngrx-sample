import { Component } from "@angular/core";
import { createFeatureSelector, createSelector, Store } from "@ngrx/store";
import { BaseActions } from "src/app/ngrx/actions/BaseActions";
import { IState, IList } from "src/app/ngrx/actions/BaseModule";
import { MODULES } from "src/app/ngrx/modules/Modules";

// @Component({})
export abstract class BaseComponent<T> {

  getFractalState = createFeatureSelector<IState<T>>(MODULES[this.module]);
	getState = createSelector(this.getFractalState, (state: IState<T>) => state);
	getData = createSelector(this.getFractalState, (state: IState<T>): T => (state.data) ? state.data[0] : <T>{});
	getList = createSelector(this.getFractalState, (state: IState<T>): IList<T> => (state.list) ? state.list : <IList<T>>{});

	// state$: Store<IState<T>> = this.store.select(this.getState);
	// data$: Store<T> = this.store.select(this.getData);
	// list$: Store<IList<T>> = this.store.select(this.getList);

	constructor(
		private module: MODULES,
		protected store: Store<IState<T>>
	) { }

	protected dispatchGet() {
		this.store.dispatch(new BaseActions.GET_DATA(this.module));
	}

	protected dispatchGetById(id: string) {
		this.store.dispatch(new BaseActions.GETBYID(this.module, id));
	}

	// protected extractId(url: string): string {
	// 	const matches = url.match(/\/(\d+)(?:.(?!\/\d+))+$/);
	// 	return matches === null ? null : parseInt(matches[1], 10).toString();
	// }

}
