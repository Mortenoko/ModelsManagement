<template>

    <div id="remModel">
        <h1>Remove Model</h1>

        <form v-on:submit="removeModel">

            <label for="jobId"> Job ID: </label>
            <input type="text" id="jobId" name="jId" v-model="jobId" placeholder="Job ID" value="" required />
            <br />

            <label for="modelId"> Model ID: </label>
            <input type="text" id="modelId" name="mId" v-model="modelId" placeholder="Model ID" value="" required />
            <br />

        </form>

    </div>
</template>

<script>

    export default {
        name: 'RemoveModel',
        data() {
            return {
                jobId: 0,
                modelId: 0
            };
        },
        methods: {
            async removeModel() {
                let url = "https://localhost:44368/api/Jobs/" + this.jobId + "/model/" + this.modelId;
                try {
                    let response = await fetch(url,
                        {
                            method: "DELETE",
                            body: JSON.stringify(this.model),
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
                return;
            }
        }

    }
   

</script>

<style scoped>
    h1 {
        text-align: center;
    }

    label {
        font-size: 150%
    }

    button {
        text-align: center;
        margin: 0 auto;
        display: block;
    }

    #remModel {
        width: 500px;
        border: 1px solid;
        background-color: seagreen;
        margin: auto;
        padding: 20px;
        text-align: center;
    }

    input {
        text-align: center;
    }
</style>