import {
    atmospheresToPascals,
    binaryToString,
    btusToJoules,
    caloriesToJoules,
    celsiusToKelvin, cubicFeetToLiters,
    fahrenheitToKelvin,
    feetToMeters,
    gallonsToLiters,
    hexToString,
    horsepowerToWatts,
    inchesToMeters,
    joulesToBtus,
    joulesToCalories,
    kelvinToCelsius,
    kelvinToFahrenheit,
    kilogramsToOunces,
    kilogramsToPounds,
    litersToCubicFeet,
    litersToGallons,
    metersToFeet,
    metersToInches,
    metersToMiles,
    milesToMeters,
    ouncesToKilograms,
    pascalsToAtmospheres,
    pascalsToPsi,
    poundsToKilograms,
    psiToPascals,
    stringToBinary,
    stringToHex,
    urlToDecode,
    urlToEncode,
    wattsToHorsepower,
    // nodeBase64ToString,
    // nodeStringToBase64,
    // stringToArrayBuffer,
    webBase64ToString,
    webStringToBase64,
    // arrayBufferToString,
} from '@jonibach/convert';
export default [
    {
        title: 'SI Units',
        items: [
            {
                title: 'inchesToMeters',
                converter: inchesToMeters,
                defaultValue: 1,
                from: 'inches',
                to: 'meters'
            },
            {
                title: 'metersToInches',
                converter: metersToInches,
                defaultValue: 1,
                from: 'meters',
                to: 'inches' // Corrected spelling mistake
            },
            {
                title: 'feetToMeters',
                converter: feetToMeters,
                defaultValue: 1,
                from: 'feet',
                to: 'meters'
            },
            {
                title: 'metersToFeet',
                converter: metersToFeet,
                defaultValue: 1,
                from: 'meters',
                to: 'feet'
            },
            {
                title: 'milesToMeters',
                converter: milesToMeters,
                defaultValue: 1,
                from: 'miles',
                to: 'meters'
            },
            {
                title: 'metersToMiles',
                converter: metersToMiles,
                defaultValue: 1,
                from: 'meters',
                to: 'miles'
            },
            {
                title: 'poundsToKilograms',
                converter: poundsToKilograms,
                defaultValue: 1,
                from: 'pounds',
                to: 'kilograms'
            },
            {
                title: 'kilogramsToPounds',
                converter: kilogramsToPounds,
                defaultValue: 1,
                from: 'kilograms',
                to: 'pounds'
            },
            {
                title: 'ouncesToKilograms',
                converter: ouncesToKilograms,
                defaultValue: 1,
                from: 'ounces',
                to: 'kilograms'
            },
            {
                title: 'kilogramsToOunces',
                converter: kilogramsToOunces,
                defaultValue: 1,
                from: 'kilograms',
                to: 'ounces'
            },
            {
                title: 'gallonsToLiters',
                converter: gallonsToLiters,
                defaultValue: 1,
                from: 'gallons (US)',
                to: 'liters'
            },
            {
                title: 'litersToGallons',
                converter: litersToGallons,
                defaultValue: 1,
                from: 'liters',
                to: 'gallons (US)'
            },
            {
                title: 'cubicFeetToLiters',
                converter: cubicFeetToLiters,
                defaultValue: 1,
                from: 'cubic feet',
                to: 'liters'
            },
            {
                title: 'litersToCubicFeet',
                converter: litersToCubicFeet,
                defaultValue: 1,
                from: 'liters',
                to: 'cubic feet'
            },
            {
                title: 'fahrenheitToKelvin',
                converter: fahrenheitToKelvin,
                defaultValue: 32,
                // Freezing point of water in Fahrenheit
                from: 'Fahrenheit',
                to: 'Kelvin'
            },
            {
                title: 'kelvinToFahrenheit',
                converter: kelvinToFahrenheit,
                defaultValue: 273.15,
                // Freezing point of water in Kelvin
                from: 'Kelvin',
                to: 'Fahrenheit'
            },
            {
                title: 'celsiusToKelvin',
                converter: celsiusToKelvin,
                defaultValue: 0, // Freezing point of water in Celsius
                from: 'Celsius',
                to: 'Kelvin'
            },
            {
                title: 'kelvinToCelsius',
                converter: kelvinToCelsius,
                defaultValue: 273.15, // Freezing point of water in Kelvin
                from: 'Kelvin',
                to: 'Celsius'
            },
            {
                title: 'caloriesToJoules',
                converter: caloriesToJoules,
                defaultValue: 1,
                from: 'calories',
                to: 'joules'
            },
            {
                title: 'joulesToCalories',
                converter: joulesToCalories,
                defaultValue: 1,
                from: 'joules',
                to: 'calories'
            },
            {
                title: 'btusToJoules',
                converter: btusToJoules,
                defaultValue: 1,
                from: 'British Thermal Units (BTUs)',
                to: 'joules'
            },
            {
                title: 'joulesToBtus',
                converter: joulesToBtus,
                defaultValue: 1,
                from: 'joules',
                to: 'British Thermal Units (BTUs)'
            },
            {
                title: 'psiToPascals',
                converter: psiToPascals,
                defaultValue: 1,
                from: 'pounds per square inch (psi)',
                to: 'pascals'
            },
            {
                title: 'pascalsToPsi',
                converter: pascalsToPsi,
                defaultValue: 1,
                from: 'pascals',
                to: 'pounds per square inch (psi)'
            },
            {
                title: 'atmospheresToPascals',
                converter: atmospheresToPascals,
                defaultValue: 1,
                from: 'atmospheres',
                to: 'pascals'
            },
            {
                title: 'pascalsToAtmospheres',
                converter: pascalsToAtmospheres,
                defaultValue: 1,
                from: 'pascals',
                to: 'atmospheres'
            },
            {
                title: 'horsepowerToWatts',
                converter: horsepowerToWatts,
                defaultValue: 1,
                from: 'horsepower',
                to: 'watts'
            },
            {
                title: 'wattsToHorsepower',
                converter: wattsToHorsepower,
                defaultValue: 1,
                from: 'watts',
                to: 'horsepower'
            }
        ]
    },
    {
        title: 'Strings',
        items: [


            {
                title: 'urlToEncode',
                converter: urlToEncode,
                defaultValue: 'https://example.com/?search=query',
                from: 'URL string',
                to: 'Encoded URL string'
            },
            {
                title: 'urlToDecode',
                converter: urlToDecode,
                defaultValue: 'https%3A%2F%2Fexample.com%2F%3Fsearch%3Dquery',
                from: 'Encoded URL string',
                to: 'URL string'
            },

            {
                title: 'stringToHex',
                converter: stringToHex,
                defaultValue: 'example',
                from: 'string',
                to: 'hexadecimal'
            },
            {
                title: 'hexToString',
                converter: hexToString,
                defaultValue: '6578616d706c65',
                from: 'hexadecimal',
                to: 'string'
            },
            {
                title: 'stringToBinary',
                converter: stringToBinary,
                defaultValue: 'example',
                from: 'string',
                to: 'binary'
            },
            {
                title: 'binaryToString',
                converter: binaryToString,
                defaultValue: '01100101 01111000 01100001 01101101 01110000 01101100 01100101',
                from: 'binary',
                to: 'string'
            },
            {
                title: 'webStringToBase64',
                converter: webStringToBase64,
                defaultValue: 'example string',
                from: 'string',
                to: 'Base64 (Browser)'
            },
            {
                title: 'webBase64ToString',
                converter: webBase64ToString,
                defaultValue: 'ZXhhbXBsZSBzdHJpbmc=',
                from: 'Base64 (Browser)',
                to: 'string'
            },
        ]
        // {
        //     title: 'nodeStringToBase64',
        //     converter: nodeStringToBase64,
        //     defaultValue: 'example string',
        //     from: 'string',
        //     to: 'Base64 (Node.js)'
        // },
        // {
        //     title: 'nodeBase64ToString',
        //     converter: nodeBase64ToString,
        //     defaultValue: 'ZXhhbXBsZSBzdHJpbmc=',
        //     from: 'Base64 (Node.js)',
        //     to: 'string'
        // },
        // {
        //     title: 'stringToArrayBuffer',
        //     converter: stringToArrayBuffer,
        //     defaultValue: 'example',
        //     from: 'string',
        //     to: 'ArrayBuffer'
        // },
        // {
        //     title: 'arrayBufferToString',
        //     converter: arrayBufferToString,
        //     defaultValue: '', // Default value would be an ArrayBuffer, which is tricky to represent here
        //     from: 'ArrayBuffer',
        //     to: 'string'
        // },

    }
];