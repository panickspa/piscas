<template>
    <div style="height: 100%">
        <v-container>
            <v-card>
                <v-card-title>
                    <h3>{{ $store.state.kuesioner.blok_4.nama }}</h3>
                </v-card-title>
                <div class="d-flex flex-column">
                    <d-rincian-add
                        :rincian="$store.state.kuesioner.blok_4.rincian"
                        :blok="'blok-4'"
                        @insert="insertIsi">
                    </d-rincian-add>
                </div>
                <div class="d-flex flex-column">
                    <h5 v-if="$store.state.kuesioner.blok_4.isi.length < 1" class="text-center">Belum ada ART yang ditambahkan</h5>
                    <v-list dense>
                        <v-list dense>
                            <v-list-item
                                v-for="(item, i) in $store.state.kuesioner.blok_4.isi"
                                :key="i+`-blok4-list`"
                                @click="editRow(i)"
                            >
                                <v-list-item-content>
                                    <v-list-item-title>{{item[0].isi}} {{item[1].isi}}</v-list-item-title>
                                </v-list-item-content>
                                <v-list-item-icon>
                                    <v-icon>edit</v-icon>
                                </v-list-item-icon>
                            </v-list-item>
                        </v-list>
                    </v-list>
                    <!-- <v-data-table
                        disable-filtering
                        disable-sort
                        hide-default-footer
                        :headers="cHeaders" 
                        :items="cIsi" 
                        :items-per-page="1"
                        @click:row="editRow"
                    ></v-data-table> -->
                </div>
            </v-card>
        </v-container>
        <d-rincian-edit
            :showDialog="editDialog"
            :isi="selectedIsi"
            :rincian="$store.state.kuesioner.blok_4.rincian"
            :blok="'blok-4'"
            @deleteIsi="deleteIsi"
            @dStateChange="dialogEditStateChange"
        ></d-rincian-edit>
    </div>
</template>

<script>
import DialogRincianVue from './DialogRincianAdd.vue'
import DialogRincianEditVue from './DialogRincianEdit.vue'
    export default {
        components:{
            'd-rincian-add': DialogRincianVue,
            'd-rincian-edit': DialogRincianEditVue,
        },
        computed:{
            cHeaders(){
                return this.$store.state.kuesioner.blok_4.rincian.map(e => ({
                    text: e.nama,
                    value: e.nama
                }))
            },
            cIsi(){
                return this.$store.state.kuesioner.blok_4.isi.map((e, i) => {
                    return e.reduce((p,c) => {
                        p[c.nama] = c.isi
                        p.index = i
                        return p
                    },{})
                })
            }
        },
        methods:{
            insertIsi(e){
                console.log(e)
                this.$store.commit("insertBlok4", e)
            },
            deleteIsi(){
                this.$store.commit("deleteBlok4", this.selectedIndex)
            },
            editRow(e){
                this.selectedIndex = e
                this.selectedIsi = this.$store.state.kuesioner.blok_4.isi[e]
                this.editDialog = true
                // console.log('editrow', this.editDialog, this.$store.state.kuesioner.blok_4.isi[e])
            },
            dialogEditStateChange(e){
                this.editDialog = e
            }
        },
        data(){
            return {
                new: true,
                edit: false,
                selectedIndex: -1,
                editDialog: false,
                selectedItem: null,
                selectedIsi: null
            }
        },
        errorCaptured(e){
            console.log(e)
        }
    }
</script>

<style lang="scss" scoped>
.table{
    overflow: auto;
}
</style>