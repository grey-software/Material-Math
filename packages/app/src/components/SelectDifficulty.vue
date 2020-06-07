<template>
    <div class="flex justify-around">
        <q-btn 
        label="Easy" @click="setDifficulty('basic')" />
        <q-btn
        label="Medium" @click="setDifficulty('normal')" />
        <q-btn
        label="Hard" @click="setDifficulty('advanced')" />
    </div>
</template>

<script>
import { Difficulty } from "../engine/math_questions/expression/models";
import { mapGetters, mapActions } from 'vuex'
import { PracticeGetters, PracticeActions } from '../store/practice/practice';

    export default {
        data: function() {
            return {
                
            };
        },
        computed: {
            ...mapGetters({ difficulty : PracticeGetters.DIFFICULTY })
        },
        methods: {
            ...mapActions({
                setDifficulty: PracticeActions.SET_DIFFICULTY,
        })
        }
    }
</script>

<style lang="scss" scoped>

</style>