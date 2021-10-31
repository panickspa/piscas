<template>
    <v-menu
      v-if="!disabled"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y>
        <template v-slot:activator="{ on }">
            <v-text-field
                :label="label"
                append-icon="event"
                readonly
                :value="value"
                outlined
                v-on="on"
                hide-details
                ></v-text-field>
        </template>
        <v-date-picker
            v-model="dateVal"
            no-title
            @input="fromDateMenu = false"
        ></v-date-picker>
    </v-menu>
    <v-text-field
        v-else
        :label="label"
        append-icon="event"
        readonly
        :value="value"
        v-on="on"
        disabled
        outlined
        hide-details
        ></v-text-field>
</template>

<script>
    export default {
        props: ['label', 'value', 'disabled'],
        model:{
            prop: 'value',
            event: 'input'
        },
        data(){
            return {
                dateVal: null,
                dateMenu: false
            }
        },
        watch:{
            dateVal(e){
                this.$emit('input', e)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>