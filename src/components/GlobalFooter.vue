<script lang="ts" setup>
import router from '@/router'
</script>

<template>
    <q-footer class="bg-transparent">
        <q-toolbar>
            <div class="w-full flex items-center justify-between px-2">
                <div>
                    ©
                    <a
                        href="https://research-ip.com/"
                        class="font-semibold"
                        target="_blank"
                        >Research IP Pty Ltd</a
                    >
                </div>
                <div class="flex items-center">
                    <router-link to="/login" class="font-semibold mr-4"
                        >Terms of Use</router-link
                    >
                    <router-link to="/register" class="font-semibold"
                        >Privacy Policy</router-link
                    >
                </div>
            </div>
        </q-toolbar>
    </q-footer>
</template>
