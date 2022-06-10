// Write function bmi that calculates body mass index(bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

// Crea un script capaz de calcular tu imc en función de tu peso y altura

// Ejemplo

// node imc.js 67 173
// Debería mostrar por consola "Normal"


const args = process.argv.slice(2);

function fIMC (peso, altura) {
    if (!peso || !altura){
        return `Faltan parámetros. 
        Para ejecutar correctamente el cálculo
        debe indicar en este orden "peso y altura"`
    }

    let imc = (peso / (Number(altura/100) * Number(altura/100))).toFixed(2);

    if (imc <= 18.5) {
        return "el peso es muy bajo"
    } else {
        if (imc <= 25) {
            return "el peso es normal"
        } else {
            if (imc <= 30){
                return "hay sobrepeso"
            } else {
                return "problemas de obesidad"
            }
        }
    }
}


console.log(fIMC(args[0], args[1]));