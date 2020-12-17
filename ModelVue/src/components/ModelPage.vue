<template>
    <div id="ModelPage">

        <button type="button" @click="$router.push('./AddExpense')">Add expense</button>
        <br />
        <button @click="$router.push('./JobList')" type="button">Joblist</button><br />
        <br/>

    </div>
</template>

<script>

    import JobList from "./JobList";
    import AddExpense from "./AddExpense";

    export default {
        name: "Model",
        components: {
            JobList,
            AddExpense
        }
    }
</script>

<style scoped>
    button {
        text-align: center;
        margin: 0 auto;
        display: block;
    }

    #ModelPage {
        width: 500px;
        border: 1px solid;
        background-color: seagreen;
        margin: auto;
        padding: 20px;
        text-align: center;
    }

</style>