<template>
    <div class="home" id="homepage">
        <h1>Velkommen</h1>
        <p>Login her</p>
        <input type="text" name="username" v-model="username" placeholder="Username" />
        <br/>
        <input type="password" name="password" v-model="password" placeholder="Password" />
        <br/>
        <button type="button" v-on:click="login()">Login</button>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        props: {
        },
        data() {
            return {
                Token: '',
                email: '',
                password: '',
            };
        },
        methods: {
            async login() {
                try {
                    let response = await fetch('https://localhost:44368/api/Account/login',
                        {
                            method: 'POST',
                            body: JSON.stringify({
                                email: this.username,
                                password: this.password
                            }),
                            headers: new Headers({
                                'Content-Type': 'application/json'
                            })
                        });
                    if (response.ok) {
                        let token = await response.json();
                        localStorage.setItem("token", token.jwt);
                        this.Token = localStorage.getItem("token")
                        this.$router.push('/home')
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #homepage{
        width: 500px;
        border: 1px solid;
        background-color: seagreen;
        margin: auto;
        padding: 20px;
        text-align: center;
    }

    h1 {
        text-align: center;
    }
    input{
        text-align: center;
        margin: 0 auto;
        display: block;
    }
    button{
        text-align: center;
        margin: 0 auto;
        display: block;
    }

</style>

