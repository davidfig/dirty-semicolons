const fs = require('fs')
const readline = require('readline')

const EOL = '\n'

/**
 * remove semicolons from a file
 * @param {string} filename
 * @param {string} [output] filename (uses filename if not provided)
 * @param {function} [callback] callback when complete
 */
module.exports = function(file, output, callback)
{
    const lineReader = readline.createInterface({ input: fs.createReadStream(file) })
    let result = '', count = 0
    lineReader.on('line', function (line)
    {
        const splits = line.split(';')
        if (splits.length === 2)
        {
            line = line.replace(';', '')
            count++
        }
        result += line + EOL
    })
    lineReader.on('close',
        function ()
        {
            const filename = output || file
            fs.writeFileSync(filename, result)
            if (callback)
            {
                callback(count)
            }
        }
    )
}