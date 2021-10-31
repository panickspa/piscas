<template>
    <div style="height: 100%">
        <v-container>
            <v-card>
                <v-card-title>
                    <h3>{{ $store.state.kuesioner.blok_8.nama }}</h3>
                    <h4>Sumber Penghasilan</h4>
                </v-card-title>
                <div class="d-flex flex-column">
                    <v-list dense>
                        <v-list dense>
                            <v-list-item
                                v-for="(item, i) in $store.state.kuesioner.blok_8.isi"
                                :key="i+`-blok8-list`"
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
            title="Sumber Penghasilan"
            :showDialog="editDialog"
            :isi="selectedIsi"
            :rincianParent="c_r_parent"
            :rincian="$store.state.kuesioner.blok_8.rincian"
            :blok="'blok-4'"
            @dStateChange="dialogEditStateChange"
        ></d-rincian-edit>
    </div>
</template>

<script>
import DialogRincianEditTurunanVue from './DialogRincianEditTurunan.vue'
    export default {
        components:{
            'd-rincian-edit': DialogRincianEditTurunanVue,
        },
        computed:{
            c_r_parent(){
                return [this.$store.state.kuesioner.blok_4.rincian[0], this.$store.state.kuesioner.blok_4.rincian[1]]
            },
            cIsi(){
                return this.$store.state.kuesioner.blok_8.isi.map((e, i) => {
                    return e.reduce((p,c) => {
                        p[c.nama] = c.isi
                        p.index = i
                        return p
                    },{})
                })
            }
        },
        methods:{
            editRow(e){
                this.selectedIndex = e
                this.selectedIsi = this.$store.state.kuesioner.blok_8.isi[e]
                this.editDialog = true
                // console.log('editrow', this.editDialog, this.$store.state.kuesioner.blok_8.isi[e])
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
        }
    }
</script>

<style lang="scss" scoped>
.table{
    overflow: auto;
}
</style>