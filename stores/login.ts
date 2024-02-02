export const useLoginStore = defineStore('loginStore', {
  state: () => ({
    User: {
      UserName: 'admin',
      Password: '1234',
    },
    Option: {
      Loading: false,
      ShowPassword: false,
    },
  }),
  getters: {},
  actions: {
    toggleLoading() {
      this.Option.Loading = !this.Option.Loading
    },
  },
})
