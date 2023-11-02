import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { User } from '@/interfaces/User';

export interface State {
  currentUser: User | null;
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    currentUser: null,
  },
  mutations: {
    setCurrentUser (state, user) {
      state.currentUser = user
    }
  }
})

export function useStore () {
  return baseUseStore(key)
}