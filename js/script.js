const celciusEl     = document.getElementById("Celcius");
const fahrenheitEl  = document.getElementById("Fahrenheit");
const kelvinEl      = document.getElementById("Kelvin");

function computeTemp(event) {
    const currentValue = event.target.value;
    const inputId = event.target.id;
    const value = parseFloat(event.target.value);
    let fahrenheit, kelvin, celsius;

    if (inputId === "Celcius") {
        fahrenheit = (value * 9/5) + 32;
        kelvin = value + 273.15;
        document.getElementById("resultCelsius").innerHTML = `°F = (9/5 x ${value}) + 32 = ${fahrenheit.toFixed(2)}, K = ${value} + 273.15 = ${kelvin.toFixed(2)}`;
    } else if (inputId === "Fahrenheit") {
        celsius = (value - 32) * 5/9;
        kelvin = celsius + 273.15;
        document.getElementById("resultFahrenheit").innerHTML = `°C = (${value} - 32) x 5/9 = ${celsius.toFixed(2)}, K = ${celsius.toFixed(2)} + 273.15 = ${kelvin.toFixed(2)}`;
    } else if (inputId === "Kelvin") {
        celsius = value - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
        document.getElementById("resultKelvin").innerHTML = `°C = ${value} - 273.15 = ${celsius.toFixed(2)}, °F = (9/5 x ${celsius.toFixed(2)}) + 32 = ${fahrenheit.toFixed(2)}`;
    }
    
    switch (event.target.name) {
        case "Celcius":
            fahrenheitEl.value = (currentValue * 9 / 5) + 32;
            kelvinEl.value = parseFloat(currentValue) + 273.15;
            break;

        case "Fahrenheit":
            celciusEl.value = (currentValue - 32) * 5 / 9;
            kelvinEl.value = (currentValue - 32) * 5 / 9 + 273.15;
            break;

        case "Kelvin":
            celciusEl.value = currentValue - 273.15;
            fahrenheitEl.value = (currentValue - 273.15) * 9 / 5 + 32;
            break;

        default:
            break;
    }
}

function resetForm() {
    document.getElementById("Celcius").value = "";
    document.getElementById("Fahrenheit").value = "";
    document.getElementById("Kelvin").value = "";
    document.getElementById("resultCelsius").innerHTML = "";
    document.getElementById("resultFahrenheit").innerHTML = "";
    document.getElementById("resultKelvin").innerHTML = "";
}