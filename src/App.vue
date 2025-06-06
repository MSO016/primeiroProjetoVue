<script>
export default {
  data() {
    return {
      message: "Bem-vindo ao Meu Projeto Vue!"  // Mensagem central opcional
    };
  }
};
</script>

<template>
  <div>
    <!-- Barra de navegação -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-4 shadow-sm">
      <div class="container">
        <div class="d-flex">
          <router-link 
            to="/" 
            class="nav-link fw-bold me-3" 
            :class="{ 'text-primary': $route.path === '/' }"
          >
            Home
          </router-link>
          <router-link 
            to="/todo-list" 
            class="nav-link me-3" 
            :class="{ 'text-primary': $route.path === '/todo-list' }"
          >
            To-Do List
          </router-link>
          <router-link 
            to="/calculadora" 
            class="nav-link me-3" 
            :class="{ 'text-primary': $route.path === '/calculadora' }"
          >
            Calculadora
          </router-link>
          <router-link 
            to="/clima" 
            class="nav-link" 
            :class="{ 'text-primary': $route.path === '/clima' }"
          >
            Clima
          </router-link>
        </div>
      </div>
    </nav>

    <!-- Conteúdo principal -->
    <div class="container text-center" v-if="$route.path === '/'">
      <h1 class="display-4">{{ message }}</h1>  <!-- Mensagem só na Home -->
    </div>
    
    <router-view />
  </div>
</template>

<style scoped>
.nav-link {
  color: #6c757d;
  transition: color 0.3s;
}
.nav-link:hover,
.nav-link.router-link-exact-active {
  color: #0d6efd !important;
  transform: scale(1.05);
}
</style>