import {
    atmospheresToPascals,
    binaryToDecimal,
    binaryToHexadecimal,
    binaryToString,
    btusToJoules,
    caloriesToJoules,
    celsiusToKelvin, complementaryHsl, cubicFeetToLiters,
    dateToDayOfWeek,
    dateToISOString,
    dateToLocalString,
    dateToTimestamp,
    decimalToBinary,
    decimalToHexadecimal,
    decimalToOctal,
    fahrenheitToKelvin,
    feetToMeters,
    gallonsToLiters,
    hexToHsl,
    hexToRgb,
    hexToString,
    hexadecimalToBinary,
    hexadecimalToDecimal,
    horsepowerToWatts,
    hslToHex,
    hslToRgb,
    hslaToString,
    inchesToMeters,
    isoStringToDate,
    isoStringToTimestamp,
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
    octalToDecimal,
    ouncesToKilograms,
    pascalsToAtmospheres,
    pascalsToPsi,
    poundsToKilograms,
    psiToPascals,
    rgbToHex,
    rgbToHsl,
    rgbaToString,
    stringToBinary,
    stringToHex,
    timestampToDate,
    timestampToISOString,
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

    },
    {
        title: 'Numeric',
        items: [
            {
                title: 'binaryToDecimal',
                converter: binaryToDecimal,
                defaultValue: '1010', // Example binary string
                from: 'binary string',
                to: 'decimal number'
            },
            {
                title: 'decimalToBinary',
                converter: decimalToBinary,
                defaultValue: 10, // Example decimal number
                from: 'decimal number',
                to: 'binary string'
            },
            {
                title: 'hexadecimalToDecimal',
                converter: hexadecimalToDecimal,
                defaultValue: 'A', // Example hexadecimal string
                from: 'hexadecimal string',
                to: 'decimal number'
            },
            {
                title: 'decimalToHexadecimal',
                converter: decimalToHexadecimal,
                defaultValue: 10, // Example decimal number
                from: 'decimal number',
                to: 'hexadecimal string'
            },
            {
                title: 'binaryToHexadecimal',
                converter: binaryToHexadecimal,
                defaultValue: '1010', // Example binary string
                from: 'binary string',
                to: 'hexadecimal string'
            },
            {
                title: 'hexadecimalToBinary',
                converter: hexadecimalToBinary,
                defaultValue: 'A', // Example hexadecimal string
                from: 'hexadecimal string',
                to: 'binary string'
            },
            {
                title: 'decimalToOctal',
                converter: decimalToOctal,
                defaultValue: 10, // Example decimal number
                from: 'decimal number',
                to: 'octal string'
            },
            {
                title: 'octalToDecimal',
                converter: octalToDecimal,
                defaultValue: '12', // Example octal string
                from: 'octal string',
                to: 'decimal number'
            }
        ]
    },
    {
        title: 'Date',
        items: [
            {
                readOnly: true,
                title: 'dateToTimestamp',
                converter: dateToTimestamp,
                defaultValue: new Date(), // Current date and time
                from: 'Date object',
                to: 'UNIX timestamp'
            },
            {
                readOnly: true,
                title: 'timestampToDate',
                converter: timestampToDate,
                defaultValue: Date.now(), // Current UNIX timestamp
                from: 'UNIX timestamp',
                to: 'Date object'
            },
            {
                readOnly: true,
                title: 'dateToISOString',
                converter: dateToISOString,
                defaultValue: new Date(), // Current date and time
                from: 'Date object',
                to: 'ISO 8601 string'
            },
            {
                readOnly: true,
                title: 'isoStringToDate',
                converter: isoStringToDate,
                defaultValue: new Date().toISOString(), // Current date and time in ISO 8601 format
                from: 'ISO 8601 string',
                to: 'Date object'
            },
            {
                readOnly: true,
                title: 'timestampToISOString',
                converter: timestampToISOString,
                defaultValue: Date.now(), // Current UNIX timestamp
                from: 'UNIX timestamp',
                to: 'ISO 8601 string'
            },
            {
                readOnly: true,
                title: 'isoStringToTimestamp',
                converter: isoStringToTimestamp,
                defaultValue: new Date().toISOString(), // Current date and time in ISO 8601 format
                from: 'ISO 8601 string',
                to: 'UNIX timestamp'
            },
            {
                readOnly: true,
                title: 'dateToLocalString',
                converter: dateToLocalString,
                defaultValue: new Date(), // Current date and time
                additionalParams: 'locale: string, options?: Intl.DateTimeFormatOptions',
                from: 'Date object',
                to: 'localized string representation'
            },
            {
                readOnly: true,
                title: 'dateToDayOfWeek',
                converter: dateToDayOfWeek,
                defaultValue: new Date(), // Current date and time
                additionalParams: 'locale: string = "en-US"',
                from: 'Date object',
                to: 'day of the week'
            }
        ]
    },
    {
        title: 'Color',
        items: [
            // {
            //     title: 'rgbToHex',
            //     converter: rgbToHex,
            //     defaultValue: { r: 255, g: 255, b: 255 }, // White color
            //     from: 'RGB',
            //     to: 'Hex'
            // },
            // {
            //     title: 'hexToRgb',
            //     converter: hexToRgb,
            //     defaultValue: '#ffffff', // White color
            //     from: 'Hex',
            //     to: 'RGB'
            // },
            {
                readOnly: true,
                title: 'rgbToHsl',
                converter: rgbToHsl,
                defaultValue: { r: 255, g: 255, b: 255 }, // White color
                from: 'RGB',
                to: 'HSL'
            },
            {
                readOnly: true,
                title: 'hslToRgb',
                converter: hslToRgb,
                defaultValue: { h: 0, s: 0, l: 100 }, // White color
                from: 'HSL',
                to: 'RGB'
            },
            {
                readOnly: true,
                title: 'hexToHsl',
                converter: hexToHsl,
                defaultValue: '#ffffff', // White color
                from: 'Hex',
                to: 'HSL'
            },
            {
                readOnly: true,
                title: 'hslToHex',
                converter: hslToHex,
                defaultValue: { h: 0, s: 0, l: 100 }, // White color
                from: 'HSL',
                to: 'Hex'
            },
            {
                readOnly: true,
                title: 'rgbaToString',
                converter: rgbaToString,
                defaultValue: { r: 255, g: 255, b: 255, a: 1 }, // White color with full opacity
                from: 'RGBA',
                to: 'CSS string'
            },
            {
                readOnly: true,
                title: 'hslaToString',
                converter: hslaToString,
                defaultValue: { h: 0, s: 0, l: 100, a: 1 }, // White color with full opacity
                from: 'HSLA',
                to: 'CSS string'
            },
            {
                readOnly: true,
                title: 'complementaryHsl',
                converter: complementaryHsl,
                defaultValue: { h: 0, s: 100, l: 50 }, // Red color
                from: 'HSL',
                to: 'Complementary HSL'
            }
        ]
    },



];