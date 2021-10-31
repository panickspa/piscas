<template>
    <v-dialog v-model="show" class="mb-4" scrollable no-click-animation>
        <template v-slot:activator="{ on, attrs }">
            <v-container>
                <div>
                    <v-btn
                        color="primary"
                        dark
                        v-bind="attrs"
                        v-on="on"
                    >
                        <v-icon>add</v-icon> Tambah Isi
                    </v-btn>
                </div>
            </v-container>
        </template>
        <v-card class="mb-4">
            <v-toolbar dark color="primary">
                <h3>Tambah isian</h3>
            </v-toolbar>
            <v-card-text class="mt-4">
                <k-rincian 
                    v-for="r in rincianData" 
                    v-bind:key="`${r.id_rincian}-rincian`"
                    :rincian="r.id_rincian"
                    :type="r.tipe_data"
                    :label="`${r.nomor}. ${r.nama}`"
                    @input="rincianUpdate({
                        isi: $event,
                        id_rincian: r.id_rincian,
                    })">
                </k-rincian>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="save">Simpan</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import RincianVue from './kuesioner/Rincian.vue'
    export default {
        props: ["rincian"],
        components:{
            "k-rincian": RincianVue
        },
        methods:{
            save(){
                this.$emit("insert", this.rincianData.map(e => ({
                    id_rincian: e.id_rincian,
                    nama: e.nama,
                    isi: e.isi
                })))
                this.rincianData = []
                this.show = false
            },
            rincianUpdate(e){
                let i = this.rincianData.findIndex(r => Number(r.id_rincian) == Number(e.id_rincian))
                if(i > -1) this.rincianData[i].isi = e.isi
            }
        },
        created(){
            this.rincianData = this.rincian.map(e => e)
        },
        data(){
            return {
                show: false,
                rincianData: []
            }
        },
        watch:{
            show(e){
                if(e){
                    this.rincianData = this.rincian.map(e => e)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>