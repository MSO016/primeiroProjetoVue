<template>
  <div class="text-center">
    <h1 class="mb-4">Bem-vindo ao Meu Projeto Vue!</h1>
    <p>Explore os projetos no menu acima.</p>
    
    <div class="mt-5">
      <button 
        @click="count++" 
        class="btn btn-primary"
      >
        Clicks: {{ count }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const count = ref(0);  // Contador reativo
</script>