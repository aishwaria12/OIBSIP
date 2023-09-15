function convert() {
    var result;
    var value = document.Selector('.input-value').value;
    var primary = document.Selector("#temp-pri");
    var type = primary.value;
    
    var Convert = document.Selector("#temp-seg");
    var typeConvert = Convert.value;
    
    if (value == "") {
        value = 0;
    }
    
    
    switch (type) 
    {
        case "Celsius":
            
            //celsius -> celsius
            if (typeConvert == "celsius") {
                document.Selector('.result').innerHTML = (value + "°C is equal to " + value + "°C");
            }
            
            //celsius -> kelvin
            if (typeConvert == "kelvin") {
                result = parseInt(value) + 273.15;
                document.Selector(".result").innerHTML = (value + "°C is equal to " + (result.toFixed(2)) + "K");
            }
            
            //celsius -> fahrenheit
            if (typeConvert == "fahrenheit"){
                result = parseInt(value * 9/5) + 32
                document.Selector(".result").innerHTML = (value + "°C is equal to " + (result.toFixed(2)) + "°F");
            }
            
            break;

        case "Fahrenheit":
            
            //fahrenheit -> celsius
            if (typeConvert == "celsius") {
                result = parseInt(value - 32) * 5/9 
                document.Selector(".result").innerHTML = (value + "°F é igual a " + (result.toFixed(2)) + "°C");
        
            }
            
            //fahrenheit -> kelvin
            if (typeConvert == "kelvin") {
                result = parseInt(value - 32) * 5/9 + 273.15
                document.Selector(".result").innerHTML = (value + "°F is equal to " + (result.toFixed(2)) + "K");
            }
            
            //fahrenheit -> fahrenheit
            if (typeConvert == "fahrenheit"){
                document.Selector('.result').innerHTML = (value + "°F is equal to " + value + "°F");
            }
            
            break;

        case "Kelvin":
            
            //kelvin -> celsius
            if (typeConvert == "kelvin") {
                document.Selector('.result').innerHTML = (value + "K is equal to " + value + "K");
            }
            
            //kelvin-> kelvin
            if (typeConvert == "celsius") {
                result = parseInt(value) - 273.15;
                document.Selector(".result").innerHTML = (value + "°K is equal to " + (result.toFixed(2)) + "°C");
            }
            
            //kelvin -> fahrenheit
            if (typeConvert == "fahrenheit")
            {
                result = parseInt(value - 273.15) * 9/5 + 32
                document.Selector(".result").innerHTML = (value + "°K is equal to " + (result.toFixed(2)) + "°F");
            }
            
            break;
    }
}