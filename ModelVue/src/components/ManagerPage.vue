<template>
    <div id="ManagerPage">

        <button type="button" @click="$router.push('./AddExpense')">Add expense</button>
        <br />
        <button @click="$router.push('./JobList')" type="button">Joblist</button><br />
        <br />
        <button @click="$router.push('./AddManager')" type="button">Add Manager</button><br />
        <br />
        <button @click="$router.push('./AddModel')" type="button">Add Model</button><br />
        <br />
        <button @click="$router.push('./CreateJob')" type="button">Create Job</button><br />
        <br />
        <button @click="$router.push('./RemoveModel')" type="button">RemoveModel</button><br />
        <br />
        <button @click="$router.push('./ModelJob')" type="button">Assign model to job</button><br />
        <br />
    </div>
</template>

<script>

    import JobList from "./JobList";
    import AddExpense from "./AddExpense";
    import AddManager from "./AddManager";
    import AddModel from "./AddModel";
    import CreateJob from "./CreateJob";
    import RemoveModel from "./RemoveModel";
    import ModelJob from "./ModelJob";

    export default {
        name: "Model",
        components: {
            JobList,
            AddExpense,
            AddManager,
            AddModel,
            CreateJob,
            RemoveModel,
            ModelJob
        }
    }
</script>

<style scoped>
    button {
        text-align: center;
        margin: 0 auto;
        display: block;
    }

    #ManagerPage {
        width: 500px;
        border: 1px solid;
        background-color: seagreen;
        margin: auto;
        padding: 20px;
        text-align: center;
    }
</style>