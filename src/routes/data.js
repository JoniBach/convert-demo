import {
    arrayToFlatArray,
    arrayToGroup,
    arrayToObject,
    arrayToSet,
    atmospheresToPascals,
    binaryToDecimal,
    binaryToHexadecimal,
    binaryToString,
    btusToJoules,
    caloriesToJoules,
    celsiusToKelvin, complementaryHsl, compressString, csvToJson, cubicFeetToLiters,
    dateToDayOfWeek,
    dateToISOString,
    dateToLocalString,
    dateToTimestamp,
    decimalToBinary,
    decimalToHexadecimal,
    decimalToOctal,
    decompressToString,
    fahrenheitToKelvin,
    feetToMeters,
    gallonsToLiters,
    hexToHsl,
    // hexToRgb,
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
    jsonStringToObject,
    jsonToCsv,
    jsonToXml,
    jsonToYaml,
    kelvinToCelsius,
    kelvinToFahrenheit,
    kilogramsToOunces,
    kilogramsToPounds,
    litersToCubicFeet,
    litersToGallons,
    mapToObject,
    markdownToHtml,
    metersToFeet,
    metersToInches,
    metersToMiles,
    milesToMeters,
    objectToArray,
    objectToJsonString,
    objectToMap,
    octalToDecimal,
    ouncesToKilograms,
    pascalsToAtmospheres,
    pascalsToPsi,
    poundsToKilograms,
    psiToPascals,
    // rgbToHex,
    rgbToHsl,
    rgbaToString,
    setToArray,
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
    xmlToJson,
    yamlToJson,
    // arrayBufferToString,
    isEqualTo,
    isNotEqualTo,
    isGreaterThan,
    isLessThan,
    isGreaterThanOrEqualTo,
    isLessThanOrEqualTo,
    isStrictlyEqualTo,
    isStrictlyNotEqualTo,
    exists,
    doesNotExist,
    checkType,
    startsWith,
    endsWith,
    contains,
    matches,
    inArray,
    notInArray,
    empty,
    notEmpty,
    and,

    even,
    odd,
    or,
    not,
    divisibleBy,
    regex,
    lengthEquals,
    lengthGreaterThan,
    lengthLessThan,
    before,
    after,
    betweenDates,
    sameDay,
    keyExists,
    keyDoesNotExist,
    // valueForKey,
    validURL,
    validEmail,
    domainMatches,
    // extensionMatches,
    xor,
    nand,
    nor,
    objectValuesToString,
    objectKeysToString,
    objectToString,
    objectToQueryString,
    objectArrayValuesToString,
    objectArrayKeysToString,
    objectArrayToString,
    objectArrayToQueryString,
    objectArrayToArrayOfString,
    nestedObjectArrayValuesToString,
    nestedObjectArrayKeysToString,
    nestedObjectArrayToString,
    nestedObjectArrayToQueryString,
    arrayWithObjectAndString,
    searchString,
    filterArrayByString,
    filterArrayByStringRaw,
    // allMatch,
    // anyMatch,
    // noneMatch
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
                to: 'gallons'
            },
            {
                title: 'cubicFeetToLiters',
                converter: cubicFeetToLiters,
                defaultValue: 1,
                from: 'cubicFeet',
                to: 'liters'
            },
            {
                title: 'litersToCubicFeet',
                converter: litersToCubicFeet,
                defaultValue: 1,
                from: 'liters',
                to: 'cubicFeet'
            },
            {
                title: 'fahrenheitToKelvin',
                converter: fahrenheitToKelvin,
                defaultValue: 32,
                // Freezing point of water in Fahrenheit
                from: 'fahrenheit',
                to: 'kelvin'
            },
            {
                title: 'kelvinToFahrenheit',
                converter: kelvinToFahrenheit,
                defaultValue: 273.15,
                // Freezing point of water in Kelvin
                from: 'kelvin',
                to: 'fahrenheit'
            },
            {
                title: 'celsiusToKelvin',
                converter: celsiusToKelvin,
                defaultValue: 0, // Freezing point of water in Celsius
                from: 'celsius',
                to: 'kelvin'
            },
            {
                title: 'kelvinToCelsius',
                converter: kelvinToCelsius,
                defaultValue: 273.15, // Freezing point of water in Kelvin
                from: 'kelvin',
                to: 'celsius'
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
                from: 'btu',
                to: 'joules'
            },
            {
                title: 'joulesToBtus',
                converter: joulesToBtus,
                defaultValue: 1,
                from: 'joules',
                to: 'btu'
            },
            {
                title: 'psiToPascals',
                converter: psiToPascals,
                defaultValue: 1,
                from: 'psi',
                to: 'pascals'
            },
            {
                title: 'pascalsToPsi',
                converter: pascalsToPsi,
                defaultValue: 1,
                from: 'pascals',
                to: 'psi'
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
                from: 'urlString',
                to: 'encodedUrltring'
            },
            {
                title: 'urlToDecode',
                converter: urlToDecode,
                defaultValue: 'https%3A%2F%2Fexample.com%2F%3Fsearch%3Dquery',
                from: 'encodedUrltring',
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
                to: 'base64'
            },
            {
                title: 'webBase64ToString',
                converter: webBase64ToString,
                defaultValue: 'ZXhhbXBsZSBzdHJpbmc=',
                from: 'base64',
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
                from: 'binaryString',
                to: 'decimalNumber'
            },
            {
                title: 'decimalToBinary',
                converter: decimalToBinary,
                defaultValue: 10, // Example decimal number
                from: 'decimalNumber',
                to: 'binaryString'
            },
            {
                title: 'hexadecimalToDecimal',
                converter: hexadecimalToDecimal,
                defaultValue: 'A', // Example hexadecimal string
                from: 'hexadecimalString',
                to: 'decimalNumber'
            },
            {
                title: 'decimalToHexadecimal',
                converter: decimalToHexadecimal,
                defaultValue: 10, // Example decimal number
                from: 'decimalNumber',
                to: 'hexadecimalString'
            },
            {
                title: 'binaryToHexadecimal',
                converter: binaryToHexadecimal,
                defaultValue: '1010', // Example binary string
                from: 'binaryString',
                to: 'hexadecimalString'
            },
            {
                title: 'hexadecimalToBinary',
                converter: hexadecimalToBinary,
                defaultValue: 'A', // Example hexadecimal string
                from: 'hexadecimalString',
                to: 'binaryString'
            },
            {
                title: 'decimalToOctal',
                converter: decimalToOctal,
                defaultValue: 10, // Example decimal number
                from: 'decimal number',
                to: 'octalString'
            },
            {
                title: 'octalToDecimal',
                converter: octalToDecimal,
                defaultValue: '12', // Example octalString
                from: 'octalString',
                to: 'decimalNumber'
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
                from: 'dateObject',
                to: 'unixTimestamp'
            },
            {
                readOnly: true,
                title: 'timestampToDate',
                converter: timestampToDate,
                defaultValue: Date.now(), // Current unixTimestamp
                from: 'unixTimestamp',
                to: 'dateObject'
            },
            {
                readOnly: true,
                title: 'dateToISOString',
                converter: dateToISOString,
                defaultValue: new Date(), // Current date and time
                from: 'dateObject',
                to: 'iso8601string'
            },
            {
                readOnly: true,
                title: 'isoStringToDate',
                converter: isoStringToDate,
                defaultValue: new Date().toISOString(), // Current date and time in ISO 8601 format
                from: 'iso8601string',
                to: 'dateObject'
            },
            {
                readOnly: true,
                title: 'timestampToISOString',
                converter: timestampToISOString,
                defaultValue: Date.now(), // Current unixTimestamp
                from: 'unixTimestamp',
                to: 'iso8601string'
            },
            {
                readOnly: true,
                title: 'isoStringToTimestamp',
                converter: isoStringToTimestamp,
                defaultValue: new Date().toISOString(), // Current date and time in ISO 8601 format
                from: 'iso8601string',
                to: 'unixTimestamp'
            },
            {
                readOnly: true,
                title: 'dateToLocalString',
                converter: dateToLocalString,
                defaultValue: new Date(), // Current date and time
                additionalParams: 'locale: string, options?: Intl.DateTimeFormatOptions',
                from: 'dateObject',
                to: 'localizedStringRepresentation'
            },
            {
                readOnly: true,
                title: 'dateToDayOfWeek',
                converter: dateToDayOfWeek,
                defaultValue: new Date(), // Current date and time
                additionalParams: 'locale: string = "en-US"',
                from: 'dateObject',
                to: 'dayOfTheWeek'
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
                to: 'CSSstring'
            },
            {
                readOnly: true,
                title: 'hslaToString',
                converter: hslaToString,
                defaultValue: { h: 0, s: 0, l: 100, a: 1 }, // White color with full opacity
                from: 'HSLA',
                to: 'CSSstring'
            },
            {
                readOnly: true,
                title: 'complementaryHsl',
                converter: complementaryHsl,
                defaultValue: { h: 0, s: 100, l: 50 }, // Red color
                from: 'HSL',
                to: 'ComplementaryHSL'
            }
        ]
    },

    {
        title: 'Data ',
        items: [
            {
                readOnly: true,
                title: 'objectToArray',
                converter: objectToArray,
                defaultValue: { key1: 'value1', key2: 'value2' },
                from: 'object',
                to: 'arrayOfKeyValuePairs'
            },
            {
                readOnly: true,
                title: 'arrayToObject',
                converter: arrayToObject,
                defaultValue: [['key1', 'value1'], ['key2', 'value2']],
                from: 'arrayOfKeyValuePairs',
                to: 'object'
            },
            {
                readOnly: true,
                title: 'mapToObject',
                converter: mapToObject,
                defaultValue: new Map([['key1', 'value1'], ['key2', 'value2']]),
                from: 'Map',
                to: 'object'
            },
            {
                readOnly: true,
                title: 'objectToMap',
                converter: objectToMap,
                defaultValue: { key1: 'value1', key2: 'value2' },
                from: 'object',
                to: 'Map'
            },
            {
                readOnly: true,
                title: 'setToArray',
                converter: setToArray,
                defaultValue: new Set(['value1', 'value2']),
                from: 'Set',
                to: 'array'
            },
            {
                readOnly: true,
                title: 'arrayToSet',
                converter: arrayToSet,
                defaultValue: ['value1', 'value2'],
                from: 'array',
                to: 'Set'
            },
            {
                readOnly: true,
                title: 'arrayToFlatArray',
                converter: arrayToFlatArray,
                defaultValue: [1, [2, [3, [4, 5]]]],
                from: 'nestedArray',
                to: 'flattenedArray'
            },
            {
                readOnly: true,
                title: 'arrayToGroup',
                converter: arrayToGroup,
                defaultValue: [{ category: 'fruit', name: 'apple' }, { category: 'fruit', name: 'banana' }, { category: 'vegetable', name: 'carrot' }],
                additionalParams: 'key: string',
                from: 'arrayOfObjects',
                to: 'objectGroupedByKey'
            }
        ]
    },
    {
        title: 'Format Conversions & Compression',
        items: [
            {
                readOnly: true,
                title: 'jsonStringToObject',
                converter: jsonStringToObject,
                defaultValue: '{"name": "John", "age": 30}',
                from: 'jsonString',
                to: 'object'
            },
            {
                readOnly: true,
                title: 'objectToJsonString',
                converter: objectToJsonString,
                defaultValue: { name: "John", age: 30 },
                from: 'object',
                to: 'jsonString'
            },
            {
                readOnly: true,
                title: 'yamlToJson',
                converter: yamlToJson,
                defaultValue: 'name: John\nage: 30',
                from: 'yamlString',
                to: 'jsonObject'
            },
            {
                readOnly: true,
                title: 'jsonToYaml',
                converter: jsonToYaml,
                defaultValue: { name: "John", age: 30 },
                from: 'jsonObject',
                to: 'yamlString'
            },
            {
                readOnly: true,
                title: 'csvToJson',
                converter: csvToJson,
                defaultValue: 'name,age\nJohn,30',
                from: 'csvString',
                to: 'jsonObject'
            },
            {
                readOnly: true,
                title: 'jsonToCsv',
                converter: jsonToCsv,
                defaultValue: [{ name: "John", age: 30 }],
                from: 'jsonObject',
                to: 'csvString'
            },
            {
                readOnly: true,
                title: 'xmlToJson',
                converter: xmlToJson,
                defaultValue: '<person><name>John</name><age>30</age></person>',
                from: 'XML string',
                to: 'jsonObject',
                isAsync: true // Indicate this operation is asynchronous
            },
            {
                readOnly: true,
                title: 'jsonToXml',
                converter: jsonToXml,
                defaultValue: { person: { name: "John", age: 30 } },
                from: 'jsonObject',
                to: 'xmlString'
            },
            {
                readOnly: true,
                title: 'markdownToHtml',
                converter: markdownToHtml,
                defaultValue: '# Hello World',
                from: 'Markdown text',
                to: 'HTML',
                isAsync: true // Indicate this operation is asynchronous
            },
            {
                readOnly: true,
                title: 'compressString',
                converter: compressString,
                defaultValue: 'Hello World',
                from: 'string',
                to: 'uint8Array'
            },
            {
                readOnly: true,
                title: 'decompressToString',
                converter: decompressToString,
                defaultValue: new Uint8Array(), // Placeholder for demonstration
                from: 'Uint8Array',
                to: 'string'
            },
            // object to string conversions

            {
                readOnly: true,
                title: 'Object Values to String',
                converter: objectValuesToString,
                defaultValue: { name: "John", age: 30, occupation: "Developer" },
                from: 'object',
                to: 'string'
            },
            {
                readOnly: true,
                title: 'Object Keys to String',
                converter: objectKeysToString,
                defaultValue: { name: "John", age: 30, occupation: "Developer" },
                from: 'object',
                to: 'string'
            },
            {
                readOnly: true,
                title: 'Object to String',
                converter: objectToString,
                defaultValue: { name: "John", age: 30 },
                from: 'object',
                to: 'string'
            },
            {
                readOnly: true,
                title: 'Object to Queryy String',
                converter: objectToQueryString,
                defaultValue: { name: "John Doe", age: "30" },
                from: 'object',
                to: 'queryString'
            },
            {
                readOnly: true,
                title: 'Object Array Values to String',
                converter: objectArrayValuesToString,
                defaultValue: [{ name: "John" }, { age: "30" }],
                from: 'array<object>',
                to: 'string'
            },
            {
                readOnly: true,
                title: 'Object Array Keys to String',
                converter: objectArrayKeysToString,
                defaultValue: [{ name: "John" }, { age: "30" }],
                from: 'array<object>',
                to: 'string'
            },
            {
                readOnly: true,
                title: 'Object Array to String',
                converter: objectArrayToString,
                defaultValue: [{ name: "John", age: "30" }],
                from: 'array<object>',
                to: 'string'
            },
            {
                readOnly: true,
                title: 'Object Array to Query String',
                converter: objectArrayToQueryString,
                defaultValue: [{ name: "John" }, { age: 30 }],
                from: 'array<object>',
                to: 'queryString'
            },

            // array filtering


            {
                type: 'filter',
                readOnly: false,
                title: 'Object Array to Array of Strings',
                converter: objectArrayToArrayOfString,
                from: 'arrayOfObjects',
                to: 'arrayOfStrings',
                defaultValue: 'John',
                data: [{ name: "John", age: 30 }, { name: "Jane", occupation: "Developer" }]
            },
            {
                type: 'filter',
                readOnly: false,
                title: 'Nested Object Array Values to String',
                description: 'Flattens a nested array of objects and concatenates all values into a single string.',
                converter: nestedObjectArrayValuesToString,
                from: 'nestedArrayOfObjects',
                to: 'string',
                defaultValue: 'Developer', // Example search term for demonstration
                data: [[{ name: "John", age: 30 }, [{ name: "Jane", occupation: "Developer" }]]]
            },
            {
                type: 'filter',
                readOnly: false,
                title: 'Nested Object Array Keys to String',
                description: 'Flattens a nested array of objects and concatenates all keys into a single string.',
                converter: nestedObjectArrayKeysToString,
                from: 'nestedArrayOfObjects',
                to: 'string',
                defaultValue: 'occupation', // Example key to search for in demonstration
                data: [[{ name: "John", age: 30 }, [{ name: "Jane", occupation: "Developer" }]]]
            },
            {
                type: 'filter',
                readOnly: false,
                title: 'Nested Object Array to String',
                description: 'Flattens a nested array of objects and converts each object to a string representation.',
                converter: nestedObjectArrayToString,
                from: 'nestedArrayOfObjects',
                to: 'string',
                defaultValue: 'John', // Example name to search for in demonstration
                data: [[{ name: "John", age: 30 }, [{ name: "Jane", occupation: "Developer" }]]]
            },
            {
                type: 'filter',
                readOnly: false,
                title: 'Nested Object Array to Query String',
                description: 'Flattens a nested array of objects and converts each object to a query string representation.',
                converter: nestedObjectArrayToQueryString,
                from: 'nestedArrayOfObjects',
                to: 'string',
                defaultValue: 'age=30', // Example query string piece to search for in demonstration
                data: [[{ name: "John", age: 30 }, [{ name: "Jane", occupation: "Developer" }]]]
            },
            {
                type: 'filter',
                readOnly: false,
                title: 'Array With Object And String',
                description: 'Converts an array of objects into an array with each object accompanied by its string representation.',
                converter: arrayWithObjectAndString,
                from: 'arrayOfObjects',
                to: 'arrayOfOriginalAndString',
                defaultValue: 'Developer', // Example search term for demonstration
                data: [{ name: "John", age: 30 }, { name: "Jane", occupation: "Developer" }]
            },
            {
                type: 'filter',
                readOnly: false,
                title: 'Search String',
                description: 'Searches a string for a partial match regardless of case.',
                converter: searchString,
                from: 'string',
                to: 'boolean',
                defaultValue: "fox", // The term users might search for in the string
                data: "The quick brown fox jumps over the lazy dog."
            },
            {
                type: 'filter',
                readOnly: false,
                title: 'Filter Array by String (Retain Original Format)',
                description: 'Filters an array of transformed objects, returning only those that match the search term, in their original format.',
                converter: filterArrayByString,
                from: 'arrayOfTransformedObjects',
                to: 'arrayOfObjects',
                defaultValue: "Developer", // Search term used for filtering the array
                data: [
                    { original: { name: "Dave", age: 42 }, objectString: "Dave, 42" },
                    { original: { name: "Jane", occupation: "Developer", experience: "5 years" }, objectString: "Jane, Developer, 5 years" }
                ]
            },
            {
                type: 'filter',
                readOnly: false,
                title: 'Filter Array by String (Retain Transformed Format)',
                description: 'Filters an array of transformed objects based on a search term, retaining the transformed format.',
                converter: filterArrayByStringRaw,
                from: 'arrayOfTransformedObjects',
                to: 'arrayOfTransformedObjects',
                defaultValue: "Developer", // Search term used for filtering the array
                data: [
                    { original: { name: "Dave", age: 42 }, objectString: "Dave, 42" },
                    { original: { name: "Jane", occupation: "Developer", experience: "5 years" }, objectString: "Jane, Developer, 5 years" }
                ]
            }


        ]
    },
    {
        title: 'Checks',
        items: [
            {
                type: 'check',
                readOnly: false,
                title: 'isEqualTo',
                converter: isEqualTo,
                from: 'string',
                to: 'number',
                value1: '5',
                value2: 5
            },
            {
                type: 'check',
                readOnly: false,
                title: 'isEqualTo',
                converter: isEqualTo,
                from: 'string',
                to: 'number',
                value1: '5',
                value2: 5
            },
            {
                type: 'check',
                readOnly: false,
                title: 'isNotEqualTo',
                converter: isNotEqualTo,
                from: 'number',
                to: 'number',
                value1: 5,
                value2: 10
            },
            {
                type: 'check',
                readOnly: false,
                title: 'isGreaterThan',
                converter: isGreaterThan,
                from: 'number',
                to: 'number',
                value1: 10,
                value2: 5
            },
            {
                type: 'check',
                readOnly: false,
                title: 'isLessThan',
                converter: isLessThan,
                from: 'number',
                to: 'number',
                value1: 5,
                value2: 10
            },
            {
                type: 'check',
                readOnly: false,
                title: 'isGreaterThanOrEqualTo',
                converter: isGreaterThanOrEqualTo,
                from: 'number',
                to: 'number',
                value1: 10,
                value2: 10
            },
            {
                type: 'check',
                readOnly: false,
                title: 'isLessThanOrEqualTo',
                converter: isLessThanOrEqualTo,
                from: 'number',
                to: 'number',
                value1: 5,
                value2: 5
            },
            {
                type: 'check',
                readOnly: false,
                title: 'isStrictlyEqualTo',
                converter: isStrictlyEqualTo,
                from: 'number',
                to: 'number',
                value1: 5,
                value2: 5
            },
            {
                type: 'check',
                readOnly: false,
                title: 'isStrictlyNotEqualTo',
                converter: isStrictlyNotEqualTo,
                from: 'number',
                to: 'string',
                value1: 5,
                value2: "5"
            },
            // Example for a custom function, you need to adjust the `converter` with an actual function reference
            {
                type: 'custom',
                readOnly: false,
                title: 'exists',
                converter: exists,
                from: 'any',
                to: 'boolean',
                value1: null,
                value2: undefined // This value is not used for this check
            },
            {
                type: 'custom',
                readOnly: false,
                title: 'doesNotExist',
                converter: doesNotExist,
                from: 'any',
                to: 'boolean',
                value1: undefined,
                value2: null // This value is not used for this check
            },
            {
                type: 'check',
                readOnly: false,
                title: 'checkType',
                converter: checkType,
                from: 'string',
                to: 'boolean',
                value1: "Hello",
                value2: 'string'
            },

            // String Conditions
            {
                type: 'check',
                readOnly: false,
                title: 'startsWith',
                converter: startsWith,
                from: 'stringA',
                to: 'stringB',
                value1: "Hello, world!",
                value2: "Hel"
            },
            {
                type: 'check',
                readOnly: false,
                title: 'endsWith',
                converter: endsWith,
                from: 'stringA',
                to: 'stringB',
                value1: "Hello, world!",
                value2: "world!"
            },
            {
                type: 'check',
                readOnly: false,
                title: 'contains',
                converter: contains,
                from: 'stringA',
                to: 'stringB',
                value1: "Hello, world!",
                value2: "lo, wo"
            },
            {
                type: 'check',
                readOnly: false,
                title: 'matches',
                converter: matches,
                from: 'string',
                to: 'RegExp',
                value1: "Hello, world!",
                value2: /world!$/
            },

            // Array and Collection Conditions
            {
                type: 'check',
                readOnly: false,
                title: 'inArray',
                converter: inArray,
                from: 'number',
                to: 'number[]',
                value1: 3,
                value2: [1, 2, 3, 4, 5]
            },
            {
                type: 'check',
                readOnly: false,
                title: 'notInArray',
                converter: notInArray,
                from: 'number',
                to: 'number[]',
                value1: 6,
                value2: [1, 2, 3, 4, 5]
            },
            {
                type: 'check',
                readOnly: false,
                title: 'empty',
                converter: empty,
                from: 'any[]',
                to: 'boolean',
                value1: [],
                value2: undefined // This value is not used for this check
            },
            {
                type: 'check',
                readOnly: false,
                title: 'notEmpty',
                converter: notEmpty,
                from: 'any[]',
                to: 'boolean',
                value1: [1, 2, 3],
                value2: undefined // This value is not used for this check
            },


            // Example for a logical condition
            {
                type: 'check',
                readOnly: false,
                title: 'and',
                converter: and,
                from: 'boolean[]',
                to: 'boolean',
                value1: [true, true, false],
                value2: undefined // This value is not used for this check, the function takes an array
            },

            // Example for numeric conditions
            {
                type: 'check',
                readOnly: false,
                title: 'even',
                converter: even,
                from: 'number',
                to: 'boolean',
                value1: 4,
                value2: undefined // This value is not used for this check
            },
            {
                type: 'check',
                readOnly: false,
                title: 'odd',
                converter: odd,
                from: 'number',
                to: 'boolean',
                value1: 5,
                value2: undefined // This value is not used for this check
            },
            // Logical Conditions
            {
                type: 'check',
                readOnly: false,
                title: 'or',
                converter: or,
                from: 'boolean[]',
                to: 'boolean',
                value1: [false, false, true],
                value2: undefined // This value is not used for this check
            },
            {
                type: 'check',
                readOnly: false,
                title: 'not',
                converter: not,
                from: 'checkBoolean',
                to: 'boolean',
                value1: false,
                value2: undefined // This value is not used for this check
            },

            // Numeric Conditions
            {
                type: 'check',
                readOnly: false,
                title: 'divisibleBy',
                converter: divisibleBy,
                from: 'number',
                to: 'number',
                value1: 10,
                value2: 2
            },

            // String Specific
            {
                type: 'check',
                readOnly: false,
                title: 'regex',
                converter: regex,
                from: 'string',
                to: 'RegExp',
                value1: "Hello, world!",
                value2: /world!$/
            },
            {
                type: 'check',
                readOnly: false,
                title: 'lengthEquals',
                converter: lengthEquals,
                from: 'string',
                to: 'number',
                value1: "Hello",
                value2: 5
            },
            {
                type: 'check',
                readOnly: false,
                title: 'lengthGreaterThan',
                converter: lengthGreaterThan,
                from: 'string',
                to: 'number',
                value1: "Hello, world!",
                value2: 5
            },
            {
                type: 'check',
                readOnly: false,
                title: 'lengthLessThan',
                converter: lengthLessThan,
                from: 'string',
                to: 'number',
                value1: "Hi",
                value2: 5
            },

            // Date and Time Conditions
            {
                type: 'check',
                readOnly: false,
                title: 'before',
                converter: before,
                from: 'Date',
                to: 'Date',
                value1: new Date('2020-01-01'),
                value2: new Date('2020-01-02')
            },
            {
                type: 'check',
                readOnly: false,
                title: 'after',
                converter: after,
                from: 'Date',
                to: 'Date',
                value1: new Date('2020-01-02'),
                value2: new Date('2020-01-01')
            },
            {
                type: 'check',
                readOnly: false,
                title: 'betweenDates',
                converter: betweenDates,
                from: 'Date',
                to: 'Date[]',
                value1: new Date('2020-01-02'),
                value2: [new Date('2020-01-01'), new Date('2020-01-03')]
            },
            {
                type: 'check',
                readOnly: false,
                title: 'sameDay',
                converter: sameDay,
                from: 'Date',
                to: 'Date',
                value1: new Date('2020-01-01'),
                value2: new Date('2020-01-01')
            },

            // JSON and Object Conditions
            {
                type: 'check',
                readOnly: false,
                title: 'keyExists',
                converter: keyExists,
                from: 'object',
                to: 'string',
                value1: { hello: "world" },
                value2: "hello"
            },
            {
                type: 'check',
                readOnly: false,
                title: 'keyDoesNotExist',
                converter: keyDoesNotExist,
                from: 'object',
                to: 'string',
                value1: { hello: "world" },
                value2: "world"
            },


            // Network and URL Conditions
            {
                type: 'check',
                readOnly: false,
                title: 'validURL',
                converter: validURL,
                from: 'string',
                to: 'boolean',
                value1: "https://www.example.com",
                value2: undefined // This value is not used for this check
            },
            {
                type: 'check',
                readOnly: false,
                title: 'validEmail',
                converter: validEmail,
                from: 'string',
                to: 'boolean',
                value1: "email@example.com",
                value2: undefined // This value is not used for this check
            },
            {
                type: 'check',
                readOnly: false,
                title: 'domainMatches',
                converter: domainMatches,
                from: 'stringA',
                to: 'stringB',
                value1: "https://www.example.com",
                value2: "www.example.com"
            },

            // File and Path Conditions


            // Advanced Logical Conditions
            {
                type: 'check',
                readOnly: false,
                title: 'xor',
                converter: xor,
                from: 'checkBoolean',
                to: 'boolean',
                value1: true,
                value2: false
            },
            {
                type: 'check',
                readOnly: false,
                title: 'nand',
                converter: nand,
                from: 'checkBoolean',
                to: 'boolean',
                value1: true,
                value2: false
            },
            {
                type: 'check',
                readOnly: false,
                title: 'nor',
                converter: nor,
                from: 'checkBoolean',
                to: 'boolean',
                value1: false,
                value2: false
            },



        ],

    },
    {
        title: 'Dynamic Checks',
        items: [
            {
                type: 'dynamicCheck',
                title: '',
            },

        ]
    }


];