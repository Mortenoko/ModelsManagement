<template>
    <div class="jobs" id="jobs">
        <h1> Add expense </h1>
        <form id="expenseform" v-on:submit="addExpense">

            <div class="formgrp">
                <label for="jobId">Job: </label>
                <input type="number" v-model="expense.jobId" required />
                <br />

                <label for="modelId">Model ID </label>
                <input type="number" v-model="expense.modelId" required />
                <br />

                <br />


                <label for="date">Date: </label>
                <br />
                <input type="date" v-model="expense.date" placeholder="Enter date" />

                <br />


                <label for="text">Expense: </label>
                <br />
                <input v-model="expense.text" placeholder="Enter Expense" />

                <br />


                <label for="amount">Expenditure: </label>
                <br />
                <input type="number" v-model="expense.amount" placeholder="Enter expense" />

                <br />
                <br />

                <button type="submit" id="expenseButton"> Add Expense </button>
            </div>
            <br />

        </form>
        <br />

    </div>
</template>

<script>
    export default {
        name: 'AddExpense',

        data() {
            return {
                expense: {}
            };
        },

        methods: {
            async addExpense() {
                try {
                    let response = await fetch('https://localhost:44368/api/Expenses',
                        {
                            method: "POST",
                            body: JSON.stringify(this.expense),
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

    #jobs {
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