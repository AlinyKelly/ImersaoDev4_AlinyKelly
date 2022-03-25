function converter() {
    var valorTemp = parseFloat(document.getElementById("temperatura").value);

    var select = document.getElementById("nomeTemperatura");
    var value = select.options[select.selectedIndex].text;
    //console.log(value);

    if (value == "Celsius")
        document.querySelector(
            "#resultado"
        ).innerHTML = valorTemp + ` °F = ` + calcCelsius(valorTemp) + ` Celsius (°C)`;

    //console.log(calcFarenheit(valorTemp));
    if (value == "Farenheit")
        document.querySelector(
            "#resultado"
        ).innerHTML = valorTemp + ` °C = ` + calcFarenheit(valorTemp) + ` Farenheit (°F)`;

    //console.log(calcCelsius(valorTemp));
}

function calcFarenheit(x) {
    return (1.8 * x + 32);
}

function calcCelsius(x) {
    return ((x - 32) * 5 / 9);
}