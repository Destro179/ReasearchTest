<script setup lang="ts">
import router from '@/router'
import { ref } from 'vue'

const form = ref({
    email: '',
    password: '',
})

const isPassword = ref(true)

const signIn = () => {
    router.push({ name: 'Dashboard' })
}

const terms = ref(false)
const privacy = ref(false)
const userType = ref('Individual Investor')
const userTypeOptions = ref([
    'Individual Investor',
    'Wholesale Investor',
    'Financial Adviser',
    'Fund Manager',
    'Media',
    'Other',
])
</script>

<template>
    <!--Sign up-->
    <div class="grid h-screen-excludingheader place-items-center" id="loginBox">
        <div class="h-fit">
            <h3 class="mb-6">Sign up to Research IP</h3>
            <div class="mb-4">
                <label>Email</label>
                <q-input
                    dense
                    outlined
                    v-model="form.email"
                    type="email"
                ></q-input>
            </div>
            <div class="mb-4">
                <label>Password</label>
                <q-input
                    v-model="form.password"
                    :type="isPassword ? 'password' : 'text'"
                    dense
                    outlined
                >
                    <template v-slot:append>
                        <q-icon
                            :name="isPassword ? 'visibility_off' : 'visibility'"
                            class="cursor-pointer"
                            @click="isPassword = !isPassword"
                        />
                    </template>
                </q-input>
            </div>

            <div class="mb-4">
                <label>Type</label>
                <q-select
                    dense
                    outlined
                    v-model="userType"
                    :options="userTypeOptions"
                    class=""
                ></q-select>
            </div>
            <div class="flex items-center">
                <q-checkbox v-model="terms" /> I have read and agree to the
                <a target="_blank" class="font-semibold ml-1"
                    >Terms of Service</a
                >
            </div>
            <div class="flex items-center mb-4">
                <q-checkbox v-model="privacy" /> I have read and agree to the
                <a target="_blank" class="font-semibold ml-1">Privacy Policy</a>
            </div>
            <q-btn class="w-full" unelevated color="primary" @click="signIn"
                >Sign up</q-btn
            >
            <div class="text-center mt-6">
                Already have an account?
                <router-link to="/login" class="font-semibold"
                    >Sign in</router-link
                >.
            </div>
        </div>
    </div>
    <!--Sign up end-->

    <div class="grid h-screen-excludingheader place-items-center" id="loginBox">
        <div class="h-fit">
            <h3 class="mb-6">Sign in to Research IP</h3>
            <div class="mb-4">
                <label>Email</label>
                <q-input
                    dense
                    outlined
                    v-model="form.email"
                    type="email"
                ></q-input>
            </div>
            <div class="mb-4">
                <div class="flex items-center justify-between">
                    <label>Password</label>
                    <div class="cursor-pointer font-semibold">
                        Forgot password?
                    </div>
                </div>
                <q-input
                    v-model="form.password"
                    :type="isPassword ? 'password' : 'text'"
                    dense
                    outlined
                >
                    <template v-slot:append>
                        <q-icon
                            :name="isPassword ? 'visibility_off' : 'visibility'"
                            class="cursor-pointer"
                            @click="isPassword = !isPassword"
                        />
                    </template>
                </q-input>
            </div>
            <q-btn class="w-full" unelevated color="primary" @click="signIn"
                >Sign in</q-btn
            >
            <div class="text-center mt-6">
                New to Research IP?
                <a class="font-semibold cursor-pointer">Create an account</a>.
            </div>
        </div>
    </div>
</template>
