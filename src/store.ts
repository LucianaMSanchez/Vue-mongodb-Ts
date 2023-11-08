import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store, ActionContext } from 'vuex'
import { User } from '@/interfaces/User';

export interface State {
  currentUser: User | null;
}

export const key: InjectionKey<Store<State>> = Symbol()
type RootState = State;
export const store = createStore<State>({
  state: {
    currentUser: null,
  },
  mutations: {
    setCurrentUser (state, user) {
      state.currentUser = user
    },
  },
  actions: {
    async setCurrentUserAction(context: ActionContext<State, RootState>, user: User) {
      context.commit('setCurrentUser', user);
    },
  },
})

export function useStore () {
  return baseUseStore(key)
}