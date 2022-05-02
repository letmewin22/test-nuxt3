import { defineStore } from 'pinia'

interface IAppState {
  loading: boolean
  loaded: boolean
  isWebp: boolean
}

const state = (): IAppState => ({
  loading: false,
  loaded: false,
  isWebp: false,
})

const actions = {
  setLoading(value: boolean) {
    this.loading = value
  },
  setLoaded(value: boolean) {
    this.loaded = value
  },
  setIsWebp(value: boolean) {
    this.isWebp = value
  },
}

const getters = {}

export const useAppStore = defineStore({
  id: 'app-store',
  state,
  actions,
  getters,
})
