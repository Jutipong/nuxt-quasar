<script setup lang="ts">
definePageMeta({ layout: 'empty' })

const route = useRouter()
const store = useLoginStore()

function login() {
  store.toggleLoading()
  const lt = setTimeout(() => {
    route.push('/').then(() => {
      clearTimeout(lt)
      store.toggleLoading()
      store.$reset()
    })
  }, Math.random() * 3000)
}
</script>

<template>
  <q-page class="row items-center">
    <div class="q-pa-md full-width">
      <div class="column">
        <div class="col self-center">
          <div class="row base-card-shadow">
            <div class="col flex justify-center items-center pa-5">
              <q-form :greedy="true" @submit="login">
                <q-card square class="no-shadow">
                  <q-card-section class="text-center">
                    <!-- <h1 class="text-uppercase">
                    <q-icon name="mdi-vuejs" />
                  </h1> -->

                    <q-icon
                      style="margin: 16px;"
                      size="120px"
                      name="mdi-vuejs"
                      color="green"
                    />

                    <q-input
                      v-model="store.User.UserName"
                      autofocus
                      bottom-slots
                      label="User" :rules="[(val) => !!val || '']"
                    >
                      <template #prepend>
                        <q-icon name="mdi-account" />
                      </template>
                    </q-input>

                    <q-input
                      v-model="store.User.Password"
                      label="Password"
                      :type="store.Option.isShowPassword ? 'text' : 'password'"
                      :rules="[(val) => !!val || '']"
                    >
                      <template #prepend>
                        <q-icon name="mdi-lock" />
                      </template>
                      <template #append>
                        <q-icon
                          class="cursor-pointer"
                          :name="!store.Option.isShowPassword ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                          @click="store.Option.isShowPassword = !store.Option.isShowPassword"
                        />
                      </template>
                    </q-input>

                    <q-btn
                      type="submit"
                      :loading="store.Option.isLoading"
                      class="logon-btn bg-logon-card-input"
                      text-color="white"
                      style="font-size: medium"
                      label="Login"
                      icon="mdi-login"
                    />

                    <p class="text-grey q-mt-lg">
                      Developed with
                      <q-icon size="sm" name="mdi-vuejs" color="green" class="q-mr-sm q-ml-sm" />+
                      <q-icon size="sm" name="mdi-heart-outline" color="pink" class="q-mr-sm" />
                    </p>
                  </q-card-section>
                </q-card>
              </q-form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style scoped>
.base-card-shadow {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 12px 0px;
  border-radius: 4px;
  width: 30vw;
}

.q-form {
  min-width: 80%;
}

.logon-btn {
  font-size: large;
  margin-top: 0px;
  margin-bottom: 20px;
  width: 100%;
}

.bg-logon-card-input {
  background: linear-gradient(to right, #36d1dc 1%, #5b86e5 99%);
  transition: all 0.3s ease-in-out;
  background-size: 200% auto;
  margin-top: 10px;
}

.bg-logon-card-input:hover {
  background-position: right center;
  box-shadow: 0 12px 20px -11px #5b86e5;
}
</style>
