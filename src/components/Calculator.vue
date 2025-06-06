<template>
    <div class="container mt-5">
        <div class="card mx-auto" style="max-width: 300px;">
            <div class="card-body">
                <!-- Este input é como o Visor da calculadora -->
                <input type="text"
                    v-model="display"
                    class="form-control mb-3 text-end"
                    readonly
                >
                <!-- Tecaldo -->
                <div class="row g-2">
                    <div v-for="btn in buttons" :key="btn" class="col-3">
                        <button
                        @click="handleClick(btn)"
                        class="btn w-100"
                        :class="{
                            'btn-primary': !isOperator(btn),
                            'btn-warning': isOperator(btn),
                            'btn-danger': btn === 'C'
                        }"
                        >
                        {{ btn }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            display: '0',
            buttons: [
                '7', '8', '9', '/',
                '4', '5', '6', '*',
                '1', '2', '3', '-',
                'C', '0', '=', '+'
            ]
        };
    },
    methods: {
        isOperator(btn) {
            return ['+', '-', '*', '/', '='].includes(btn)
        },
        handleClick(btn) {
            if (btn === 'C') {
                this.display = '0';
            } else if (btn === '=') {
                try {
                this.display = eval(this.display).toString();
                } catch {
                this.display = 'Erro';
                }
            } else if (this.isOperator(btn)) {
                // Permite operadores apenas se o último caractere não for outro operador
                if (!this.isOperator(this.display.slice(-1))) {
                this.display += btn;
                }
            } else {
                // Substitui "0" inicial ou concatena se já houver número
                this.display = this.display === '0' ? btn : this.display + btn;
        }
        }
    }
}
</script>