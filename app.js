const { createApp } = Vue

createApp({

    data(){
        return{
            num1: 0,
            num2: 0,
            operacao: "+"
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

}).mount("#app")