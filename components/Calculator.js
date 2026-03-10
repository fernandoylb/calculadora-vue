const Calculator = {

    template: `
    <div id="app" class="container">
        <h2>Calculadora Aritmética</h2>
        <input type="number" v-model.number="num1" placeholder="Número 1">
        <select v-model="operacao">
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
        </select>
        <input type="number" v-model.number="num2" placeholder="Número 2">

        <div class="resultado">
            Resultado: {{ resultado }}
        </div>
    </div>`,

    data(){
    return{
        num1:0,
        num2:0,
        operacao:"+"
    }
},

computed:{
    resultado(){
        switch(this.operacao){
            case "+":
                return this.num1 + this.num2
            case "-":
                return this.num1 - this.num2
            case "*":
                return this.num1 * this.num2
            case "/":
                return this.num2 !== 0 
                    ? this.num1 / this.num2 
                    : "Divisão por 0"
        }
    }
}

}