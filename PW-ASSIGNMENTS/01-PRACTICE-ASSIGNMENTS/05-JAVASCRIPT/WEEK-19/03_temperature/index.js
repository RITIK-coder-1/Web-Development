class Temperature {
    #celcius // privatised
    #fahrenheit 

    constructor(){
        this.#celcius = 0 // initial value
        this.#fahrenheit = 32 // initial value
    }

    get getCelsius(){
        return this.#celcius
    }

    get getFahrenheit(){
        return this.#fahrenheit
    }

    set setCelsius(value){
        if (typeof value === 'number'){
            this.#celcius = value
            this.#fahrenheit = ((9/5) * this.#celcius) + 32
        } else {
            console.log("Please input a number!");
        }
    }

    set setFahrenheit(value){
        if (typeof value === 'number'){
            this.#fahrenheit = value
            this.#celcius = (this.#fahrenheit - 32) * (5/9)
        } else {
            console.log("Please input a number!");
        }
    }
}

const temperature = new Temperature()

console.log(`Initial Celsius: ${temperature.getCelsius} C`);
console.log(`Initial Fahrenheit: ${temperature.getFahrenheit} F`);

temperature.setCelsius = "abc"
console.log(`Celsius: ${temperature.getCelsius} C`);
console.log(`Fahrenheit: ${temperature.getFahrenheit} F`);

temperature.setCelsius = 25
console.log(`Celsius: ${temperature.getCelsius} C`);
console.log(`Fahrenheit: ${temperature.getFahrenheit} F`);

temperature.setFahrenheit = "ritik"
console.log(`Celsius: ${temperature.getCelsius} C`);
console.log(`Fahrenheit: ${temperature.getFahrenheit} F`);

temperature.setFahrenheit = 68
console.log(`Celsius: ${temperature.getCelsius} C`);
console.log(`Fahrenheit: ${temperature.getFahrenheit} F`);