// import { defineStore } from 'pinia'

// export const useMyLoginStore = defineStore({
//   id: 'myLoginStore',
//   state: () => ({ }),
//   actions: {}
// })


// import { IOption, IUser } from '@/types/login';

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
            this.Option.Loading = !this.Option.Loading;
        },
    },
});