<template>
    <div>
        <h1>Manager</h1>
        <h3>Please enter the following information to add manager</h3>



        <form id="managerForm" v-on:submit="addManager" @submit.prevent="false">

            <label for="firstname"> First Name</label>
            <input type="text" id="firstName" name="firstName" v-model="manager.firstName" placeholder="First name" />
            <br />

            <label for="lastname"> Last Name</label>
            <input type="text" id="lastName" name="lastName" v-model="manager.lastName" Placeholder="Last name" />
            <br />

            <label for="email"> Email</label>
            <input type="text" id="email" name="email" v-model="manager.email" placeholder="Email" />
            <br />

            <label for="password"> Password</label>
            <input type="password" id="password" name="password" v-model="manager.password" />
            <br />

            <button type="submit" id="managerButton"> Add Manager</button>
        </form>

    </div>

</template>

<script>

    export default {
        name: 'AddManager',
        data() {
            return {
                manager: {}
            };
        },
        methods: {
            async addManager() {
                    try {
                        let response = await fetch('https://localhost:44368/api/Managers',
                            {
                                method: "POST",
                                body: JSON.stringify(this.manager),
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

<style scoped>
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