import {defineStore} from 'pinia'

export const useFiltersStore = defineStore({
  id: 'filter-store',
  state: () => {
    return {
      filtersList: ['youtube', 'twitch'],
    }
  },
  actions: {},
  getters: {
    filteredList: state => state.filtersList,
  },
})
