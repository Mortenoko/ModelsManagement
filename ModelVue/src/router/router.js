import HomeVue from '../components/Home.vue'
import AddExpenseVue from '../components/AddExpense.vue'
import AddManagerVue from '../components/AddManager.vue'
import AddModelVue from '../components/AddModel.vue'
import CreateJobVue from '../components/CreateJob.vue';
import LoginVue from '../components/Login.vue'
import ManagerPageVue from '../components/ManagerPage.vue'
import JobListVue from '../components/JobList.vue'
import ModelJobVue from '../components/ModelJob.vue'
import ModelPageVue from '../components/ModelPage.vue'
import RemoveModelVue from '../components/RemoveModel.vue'
import VueRouter from 'vue-router'
import Vue from 'vue'


Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        component: HomeVue,
        name: 'Home',

    },

    {
        path: '/AddExpense',
        component: AddExpenseVue,
        name: 'AddExpense',

    },

    {
        path: '/AddManager',
        component: AddManagerVue,
        name: 'AddManager',

    },
    {
        path: '/AddModel',
        component: AddModelVue,
        name: 'AddModel',

    },
    {
        path: '/CreateJob',
        component: CreateJobVue,
        name: 'CreateJob',

    },

    {
        path: '/Login',
        component: LoginVue,
        name: 'Login',

    },

    {
        path: '/ManagerPage',
        component: ManagerPageVue,
        name: 'ManagerPage',

    },

    {
        path: '/Joblist',
        component: JobListVue,
        name: 'Joblist',

    },

    {
        path: '/ModelJob',
        component: ModelJobVue,
        name: 'Modeljob',

    },

    {
        path: '/ModelPage',
        component: ModelPageVue,
        name: 'Modelpage',

    },

    {
        path: '/removeModel',
        component: RemoveModelVue,
        name: 'RemoveModel',

    },

]

const router = new VueRouter({
    routes: routes
})

export default router