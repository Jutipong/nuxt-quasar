export const useLoginStore = defineStore('loginStore', {
  state: () => ({
    User: {
      UserName: 'admin',
      Password: '!@#$%^&*()_',
    },
    Option: {
      isLoading: false,
      isShowPassword: false,
    },
  }),
  getters: {},
  actions: {
    toggleLoading() {
      this.Option.isLoading = !this.Option.isLoading
    },
  },
})
