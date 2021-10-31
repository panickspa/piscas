<template>
    <div class="d-flex flex-column">
        <!-- {{$store.state.kuesioner}} -->
        <div class="d-flex flex-row">
            <v-tabs v-model="tab" show-arrows dark background-color="primary">
                <v-tab
                    v-for="item in items"
                    :key="item"
                >
                    {{ item }}
                </v-tab>
            </v-tabs>
        </div>
        <v-tabs-items v-model="tab">
            <v-tab-item>
                <blok-1></blok-1>
            </v-tab-item>
            <v-tab-item>
                <blok-2></blok-2>
            </v-tab-item>
            <v-tab-item>
                <blok-3></blok-3>
            </v-tab-item>
            <v-tab-item>
                <blok-4></blok-4>
            </v-tab-item>
            <v-tab-item>
                <blok-5></blok-5>
            </v-tab-item>
            <v-tab-item>
                <blok-6></blok-6>
            </v-tab-item>
            <v-tab-item>
                <blok-7></blok-7>
            </v-tab-item>
            <v-tab-item>
                <blok-8></blok-8>
            </v-tab-item>
            <v-tab-item>
                <blok-9></blok-9>
            </v-tab-item>
            <v-tab-item>
                <blok-10></blok-10>
            </v-tab-item>
            <v-tab-item>
                <blok-11></blok-11>
            </v-tab-item>
        </v-tabs-items>
    </div>
</template>

<script>
import Blok_1Vue from '../components/Blok_1.vue'
import Blok_10Vue from '../components/Blok_10.vue'
import Blok_11Vue from '../components/Blok_11.vue'
import Blok_2Vue from '../components/Blok_2.vue'
import Blok_3Vue from '../components/Blok_3.vue'
import Blok_4Vue from '../components/Blok_4.vue'
import Blok_5Vue from '../components/Blok_5.vue'
import Blok_6Vue from '../components/Blok_6.vue'
import Blok_7Vue from '../components/Blok_7.vue'
import Blok_8Vue from '../components/Blok_8.vue'
import Blok_9Vue from '../components/Blok_9.vue'
    export default {
        components:{
            'blok-1': Blok_1Vue,
            'blok-2': Blok_2Vue,
            'blok-3': Blok_3Vue,
            'blok-4': Blok_4Vue,
            'blok-5': Blok_5Vue,
            'blok-6': Blok_6Vue,
            'blok-7': Blok_7Vue,
            'blok-8': Blok_8Vue,
            'blok-9': Blok_9Vue,
            'blok-10': Blok_10Vue,
            'blok-11': Blok_11Vue
        },
        data(){
            return {
                tab: null,
                items: ["I", "II", "III", "IV", "V", "VI", "VIIA", "VIIB", "VIIC", "VIID", "Catatan"]  
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>