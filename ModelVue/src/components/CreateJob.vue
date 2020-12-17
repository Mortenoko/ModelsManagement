<template>
    <div>
        <h1>Create Jobs</h1>
        <p>Here jobs can be created </p>

        <form id="createJobForm" v-on:submit="createJob" @submit.prevent="false">

            <label for="customer">Customer: </label>
            <input type="text" name="customer" value="" id="customer" v-model="job.customer"  placeholder="Customer">
            <br />

            <label for="startDate">Start date: </label>
            <input type="date" name="startDate" value="" id="startDate" v-model="job.startDate"  placeholder="Start Date">
            <br />

            <label for="days">Days: </label>
            <input type="number" name="days" value="" id="days" v-model="job.days"  placeholder="Days">
            <br />

            <label for="location">Location: </label>
            <input type="text" name="location" value="" id="location" v-model="job.location"  placeholder="Location">
            <br />

            <label for="comments">Comments: </label>
            <input type="text" name="comments" value="" id="comments" v-model="job.comments"  placeholder="Comments">
            <br />
            <br />

            <button type="submit" > Create the job </button>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'CreateJob',
        data() {
            return {
                job: {}
            };
        },
        methods: {
            async createJob() {
                try {
                    let response = await fetch('https://localhost:44368/api/Jobs', {
                            method: "POST",
                            body: JSON.stringify(this.job),
                            headers: new Headers({
                                'Authorization': 'Bearer ' + localStorage.getItem("token"),
                                "Content-Type": "application/json"
                            })

                        });
                    if (response.ok) {
                        let token = await response.json();
                        localStorage.setItem("token", token.jwt);
                        this.Token = localStorage.getItem("token")
                    }
                    else {
                        alert("Server: " + response.statusText);
                    }
                }
                catch (error) {
                    alert("Error: " + error);
                }
            }
        }
    }

</script>


<style>

    .div {
        width: 500px;
        border: 1px solid;
        background-color: seagreen;
        margin: auto;
        padding: 20px;
        text-align: center;
    }

    input {
        text-align: center;
        margin: 0 auto;
        display: block;
    }

    button {
        text-align: center;
        margin: 0 auto;
        display: block;
        font-size: 150%;
    }
</style>