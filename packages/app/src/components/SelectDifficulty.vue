<template>
    <div class="flex justify-around" >
        <div class="flex column items-center" style="min-width: 160px;" @click="setDifficultyandColor('basic')">
            <div class="flex justify-center items-center">
                <div class="easy-vertical-div" :class="{'selected-color': isEasy}" />
                <div class="horizontal-div" :class="{'selected-color': isEasy}" />
                <div class="easy-vertical-div" :class="{'selected-color': isEasy}" />
            </div>
            <h6>Easy</h6>
        </div>
        <div class="flex column items-center" style="min-width: 160px;" @click="setDifficultyandColor('normal')">
            <div class="flex justify-center items-center">
                <div class="medium-vertical-div" :class="{'selected-color': isMedium}" />
                <div class="easy-vertical-div" :class="{'selected-color': isMedium}" />
                <div class="horizontal-div" :class="{'selected-color': isMedium}" />
                <div class="easy-vertical-div" :class="{'selected-color': isMedium}" />
                <div class="medium-vertical-div" :class="{'selected-color': isMedium}" />
            </div>
            <h6>Medium</h6>
        </div>
        <div class="flex column items-center" style="min-width: 160px;" @click="setDifficultyandColor('advanced')" >
            <div class="flex justify-center items-center">
                <div class="hard-vertical-div" :class="{'selected-color': isHard}" />
                <div class="medium-vertical-div" :class="{'selected-color': isHard}" />
                <div class="easy-vertical-div" :class="{'selected-color': isHard}" />
                <div class="horizontal-div" :class="{'selected-color': isHard}" />
                <div class="easy-vertical-div" :class="{'selected-color': isHard}" />
                <div class="medium-vertical-div" :class="{'selected-color': isHard}" />
                <div class="hard-vertical-div" :class="{'selected-color': isHard}" />
            </div>
            <h6>Hard</h6>
        </div>
    </div>
</template>

<script>
import { Difficulty } from "../engine/math_questions/expression/models";
import { mapGetters, mapActions } from 'vuex'
import { PracticeGetters, PracticeActions } from '../store/practice/practice';

    export default {
        data: function() {
            return {
                isEasy: false,
                isMedium: false,
                isHard: false,
            };
        },
        computed: {
            ...mapGetters({ difficulty : PracticeGetters.DIFFICULTY })
        },
        methods: {
            ...mapActions({setDifficulty: PracticeActions.SET_DIFFICULTY}),
            setDifficultyandColor(difficulty){
                this.isEasy = false;
                this.isMedium = false;
                this.isHard = false;
                if(difficulty === 'advanced') 
                    this.isHard = true;
                else if (difficulty === 'normal')
                    this.isMedium = true;
                else
                    this.isEasy = true;
                this.setDifficulty(difficulty);
            }
        }
    }
</script>

<style scoped>
    .horizontal-div {
        min-width: 80px;
        min-height: 10px;
        max-width: 80px; 
        max-height: 10px;
        background-color: grey;
        margin: 5px;
    }
    .easy-vertical-div {
        min-width: 10px;
        min-height: 60px;
        max-width: 10px; 
        max-height: 60px; 
        background-color: grey;
    }
    .medium-vertical-div{
        min-width: 10px;
        min-height: 40px;
        max-width: 10px; 
        max-height: 40px; 
        background-color: grey;
        margin: 3px;
    }
    .hard-vertical-div {
        min-width: 10px;
        min-height: 20px;
        max-width: 10px; 
        max-height: 20px; 
        background-color: grey;
    }
    h6 {
        margin: 0px;
        margin-top: 5px;
    }
    .selected-color {
        background-color: #1976D2;
    }
</style>