<template>

    <div class="joblist" id="joblist">
        <h1>
            All Jobs
        </h1>

        <button type="button" id="jobbutton" v-on:click="JobList()">Show jobs</button>

        <table>
            <tr>
                <td>{{job.efJobId}}</td>
                <td>{{job.customer}}</td>
                <td>{{job.startDate}}</td>
                <td>{{job.days}}</td>
                <td>{{job.location}}</td>
                <td>{{job.comments}}</td>
            </tr>
        </table>

    </div>
</template>

<script>
    export default {

        name: 'joblist',
        data: function () {
            return { jobs: [] };
        },

        methods: {
            async JobList() {
                try {
                    let response = await fetch('https://localhost:44368/api/Jobs',
                        {
                            method: "GET",
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
                        alert("Server error: " + response.statusText);
                    }
                }
                catch (error) {
                    alert("Error: " + error);
                }
            }
        }
    }



</script>

<style scoped>
    h1 {
        text-align: center;
    }

    button {
        text-align: center;
        margin: 0 auto;
        display: block;
    }

    #joblist {
        width: 500px;
        border: 1px solid;
        background-color: seagreen;
        margin: auto;
        padding: 20px;
        text-align: center;
    }
</style>