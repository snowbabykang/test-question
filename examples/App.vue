<template>
    <div>
        <question
            icon="error"
            title="本次置业中，您是否需要居理新房继续服务？"
            leftAnswer="不需要"
            rightAnswer="需要"
            @getAnswer="getAnswer"
        ></question>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                // 答案
                answer: '',
            };
        },
        methods: {
            /**
             * @description: 问题组件返回的问题答案
             * @param {string} val 问题答案 1正向 2负向
             * @return:
             */
            getAnswer(val) {
                // 是否继续服务  1不需要，2继续服务
                this.answer = val === '1' ? '2' : '1';
            }
        },
        mounted() {
        }
    };
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
