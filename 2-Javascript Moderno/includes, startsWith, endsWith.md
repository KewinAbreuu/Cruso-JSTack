## Funções Javascript </hr>

## Includess </hr>
<p>Verifica se dentro de uma string ou array existe alguma string que a gnt ta passado dentro dela</p>
[x] Devolve true ou false
[x] CaseSensitive
[x] No array, precisa passar o nome inteiro que ta dentro de cada posição do array

Exemplo em string:

````
const tech = 'Node.js'

const includesString = tech.includes('node'); --> true
const includesString = tech.includes('ode'); --> true
const includesString = tech.includes('ode.js'); --> true
const includesString = tech.includes('odejs'); --> false
````

Exemplo em array:

````
const array = ['Node.js', 'React']

const includesArray = array.includes('node'); --> false
const includesArray = array.includes('Node.js'); --> true
const includesArray = array.includes('Rea'); --> false
const includesArray = array.includes('React'); --> true
````

## startsWith </hr>

<p>Verifica se uma string começa com alguma sequencia de caracteres</p>

[x] Devolve true ou false
[x] CaseSensitive

Exemplos:

````
const tech = 'Node.js'

const StartWith = tech.startsWith('N'); --> true
const StartWith = tech.startsWith('ode'); --> false
const StartWith = tech.startsWith('Node'); --> true
const StartWith = tech.startsWith('node'); --> false
````

## endsWith </hr>

<p>Verifica se uma string termina com alguma sequencia de caracteres</p>

[x] Devolve true ou false
[x] CaseSensitive

Exemplos:

````
const tech = 'Node.js'

const endsWith = tech.endsWith('N'); --> false
const endsWith = tech.endsWith('de.js'); --> true
const endsWith = tech.endsWith('Node'); --> false
````