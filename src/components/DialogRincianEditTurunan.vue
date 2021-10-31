<template>
    <v-dialog 
        :value="showDialog" 
        class="mb-4" 
        scrollable
        no-click-animation >
        <v-card class="mb-4">
            <v-toolbar dark color="primary">
                <h3>Edit isian</h3>
            </v-toolbar>
            <v-card-text class="mt-4" v-if="isi">
                <k-rincian 
                    v-for="(r, i) in rincianParent" 
                    v-bind:key="`${r.id_rincian}-rincian`"
                    :rincian="r.id_rincian"
                    :type="r.tipe_data"
                    :label="`${r.nomor}. ${r.nama}`"
                    v-model="isi[i].isi"
                    @input="rincianUpdate({
                        isi: $event,
                        id_rincian: r.id_rincian,
                    })">
                </k-rincian>
                <k-rincian 
                    v-for="(r, i) in rincianData.slice(2, rincianData.length)" 
                    v-bind:key="`${r.id_rincian}-rincian`"
                    :rincian="r.id_rincian"
                    :type="r.tipe_data"
                    :label="`${r.nomor}. ${r.nama}`"
                    v-model="isi[i+2].isi"
                    @input="rincianUpdate({
                        isi: $event,
                        id_rincian: r.id_rincian,
                    })">
                </k-rincian>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="hapusPrevent = true" color="danger" dark>Hapus</v-btn>
                <v-btn @click="save">Simpan</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import RincianVue from './kuesioner/Rincian.vue'
    export default {
        props: ["rincianParent", "rincian", "showDialog", "isi"],
        components:{
            "k-rincian": RincianVue
        },
        methods:{
            save(){
                this.$emit("update", this.rincianData)
                this.$emit("dStateChange", false)
            },
            deleteIsi(){
                this.$emit("deleteIsi", null)
                this.hapusPrevent = false
                this.$emit("dStateChange", false)
            },
            rincianUpdate(e){
                let i = this.rincianData.findIndex(r => Number(r.id_rincian) == Number(e.id_rincian))
                if(i > -1) this.rincianData[i].isi = e.isi
            }
        },
        created(){
            this.rincianData = this.rincian
        },
        data(){
            return {
                show: false,
                rincianData: [],
                hapusPrevent: false
            }
        },
        watch:{
            show(e){
                if(e){
                    this.rincianData = this.rincian
                }
                this.$emit("dStateChange", e)
            },
            showDialog(e){
                console.log("show dialog", e)
                this.show = e
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>