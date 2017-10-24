const commander = require('commander')
const glob = require('glob')
const semicolons = require('.')

commander
    .version('0.0.1')
    .usage('[options] <file...>')
    .option('-o, --output', 'Output file (default is to overwrite original file)')
    .description('Quick and dirty semicolon remover for javascript. WARNING: does not use a real parser; please check https://github.com/davidfig/dirty-semicolons before using.')
    .parse(process.argv)

let current = 0
let files = []

for (let arg of commander.args)
{
    files.push(...glob.sync(arg))
}

function next(count)
{
    if (count)
    {
        console.log('removed ' + count + ' semicolons.')
    }
    else if (count !== null)
    {
        console.log('no removeable semicolons found.')
    }
    if (current === commander.args.length)
    {
        console.log('All files processed.')
        process.exit(0)
    }
    const file = files[current++]
    process.stdout.write('"Parsing" ' + file + '...')
    semicolons(file, commander.output, next)
}

if (!process.argv.slice(2).length)
{
    commander.outputHelp()
}
else
{
    next(null)
}