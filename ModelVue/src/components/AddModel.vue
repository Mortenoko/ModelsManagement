<template>
    <div class="model" id="model">
        <h1>Models</h1>
        <h3>Please enter the following information to add models</h3>
       
        <form id="modelForm" v-on:submit="addModel" @submit.prevent="false">
            <label for="firstname"> First Name</label>
            <input type="text" id="firstName" name="firstName" v-model="model.firstName" placeholder="First name" />
            <br />

            <label for="lastname"> Last Name</label>
            <input type="text" id="lastName" name="lastName" v-model="model.lastName" Placeholder="Last name" />
            <br />

            <label for="email"> Email</label>
            <input type="text" id="email" name="email" v-model="model.email" placeholder="Email" />
            <br />

            <label for="phone"> Phonenumber</label>
            <input type="text" id="phoneNo" name="phoneNo" v-model="model.phoneNo" placeholder="Phonenumber" />
            <br />

            <label for="address"> Address</label>
            <input type="text" id="addresLine1" name="addresLine1" v-model="model.addresLine1" placeholder="Address" />
            <br />

            <label for="address2"> Address line 2</label>
            <input type="text" id="addresLine2" name="addresLine2" v-model="model.addresLine2" placeholder="Address2" />
            <br />

            <label for="zip"> Zip</label>
            <input type="text" id="zip" name="zip" v-model="model.zip" placeholder="Zip number" />
            <br />

            <label for="city"> City</label>
            <input type="text" id="city" name="city" v-model="model.city" placeholder="City" />
            <br />

            <label for="country"> Country</label>
            <input type="text" id="country" name="country" v-model="model.country" placeholder="Country" />
            <br />

            <label for="birthdate"> Birth date</label>
            <input type="date" id="birthDate" name="birthDate" v-model="model.birthDate" placeholder="Birth date" />
            <br />

            <label for="nationality"> Nationality</label>
            <input type="text" id="nationality" name="nationality" v-model="model.nationality" placeholder="Nationality" />
            <br />

            <label for="height"> Height</label>
            <input type="number" id="height" name="height" v-model="model.height" placeholder="Height" />
            <br />

            <label for="shoesize"> Shoe size</label>
            <input type="number" id="shoeSize" name="shoeSize" v-model="model.shoeSize" placeholder="Shoe size" />
            <br />

            <label for="haircolor"> Hair color</label>
            <input type="text" id="hairColor" name="hairColor" v-model="model.hairColor" placeholder="Hair color" />
            <br />

            <label for="eyecolor"> Eye color</label>
            <input type="text" id="eyeColor" name="eyeColor" v-model="model.eyeColor" placeholder="Eye color" />
            <br />

            <label for="comments"> Comments</label>
            <input type="text" id="comments" name="comments" v-model="model.comments" placeholder="Comments" />
            <br />

            <label for="password"> Password</label>
            <input type="password" id="password" name="password" v-model="model.password" placeholder="password" />
            <br />


            <button type="submit"> Add Model</button>
        </form>
        
        
    </div>



</template>

<script>

    export default {
        name: 'AddModel',
        data() {
            return {
                model: {}
            };
        },
        methods: {
            async addModel() {
                    try {
                        let response = await fetch('https://localhost:44368/api/Models',
                            {
                                method: "POST",
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
                    } else {
                        alert("Server: " + response.statusText);
                    }
                } catch (error) {
                    alert("Error: " + error);
                }
            }
        }
    }

</script>

<style scoped>
    #model {
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