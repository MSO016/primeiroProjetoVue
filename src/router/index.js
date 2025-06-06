import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue'; //Importe seu componetes " Home "
import TodoList from "../components/TodoList.vue"; //Importe seu componetes " TodoList "
import Calculator from '../components/Calculator.vue'; // Importe seu componentes " Calculadora "
import WeatherApp from '../components/WeatherApp.vue'; //Importe seu componetes " Weather "

const routes = [
    { path: '/', component: Home }, // Rota para a Home
    { path: '/todo-list', component: TodoList }, // Rota para a To-Do List
    { path: '/calculadora', component: Calculator }, // Rota para a calculadora
    { path: '/clima', component: WeatherApp } // Rota para o Clima
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
