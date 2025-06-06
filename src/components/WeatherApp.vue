<template>
  <div class="container mt-5">
    <div class="card mx-auto" style="max-width: 400px;">
      <div class="card-body text-center">
        <h2 class="card-title">Clima Agora</h2>

        <!-- Input de busca -->
        <div class="input-group mb-3">
          <input
            v-model="city"
            @keyup.enter="fetchWeather"
            class="form-control"
            placeholder="Digite a cidade"
          >
          <button @click="fetchWeather" class="btn btn-primary">
            Buscar
          </button>
        </div>

        <!-- Resultado -->
        <div v-if="weather" class="mt-4">
          <h3>{{ weather.name }}, {{ weather.sys.country }}</h3>
          <img 
            :src="`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`"
            :alt="weather.weather[0].description"
            class="weather-icon"
          >
          <p class="display-4">{{ Math.round(weather.main.temp) }}°C</p>
          <p class="text-capitalize">{{ weather.weather[0].description }}</p>
          <div class="row mt-3">
            <div class="col">
              <p>Mínima: {{ Math.round(weather.main.temp_min) }}°C</p>
            </div>
            <div class="col">
              <p>Máxima: {{ Math.round(weather.main.temp_max) }}°C</p>
            </div>
          </div>
        </div>

        <div v-else-if="error" class="alert alert-danger mt-3">
          {{ error }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      apiKey: import.meta.env.VITE_WEATHER_API_KEY,
      city: '',
      weather: null,
      error: ''
    };
  },
  methods: {
    async fetchWeather() {
      if (!this.city.trim()) {
        this.error = "Digite uma cidade!";
        return;
      }

      try {
        const API_KEY = '204f1edee50d5d1e3edf56082a864c04'; //  Substitua por variável de ambiente em produção
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&lang=pt_br&appid=${API_KEY}`
        );
        const data = await response.json();

        if (data.cod === 200) {
          this.weather = data;
          this.error = '';
        } else {
          this.error = "Cidade não encontrada!";
          this.weather = null;
        }
      } catch (err) {
        this.error = 'Erro ao buscar dados. Tente novamente!';
        this.weather = null;
      }
    }
  }
};
</script>

<style scoped>
.weather-icon {
  width: 100px;
  height: 100px;
}
.card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>