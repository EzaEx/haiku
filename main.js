var haikus = `SPRING - Blossom falls. I stand 
by and observe its beauty. 
Happiness follows 

FLOWERS - Flowers line the moor,
Bee's sing praise to the colours
and the beauty shown

STARS - Night reveals the stars,
so small twinkling above. 
Candles in darkness

WINTER - Cold air settles now,
covering the ground with small
beautiful crystals

SUNRISE - Warmth covers the earth
Calming even the most stressed
people in small parts

SKY - Now the clouds part ways, 
I gaze upon the blue sky,
causing some comfort

SNOWFALL - White powdery flakes
litter the ground, covering
everything there

SUNRISE #2 - As the tar black sky 
disappears into blue light, 
colours mark its death

DREAMS - Dreams illuminate
sleeping minds like small lanterns
in a dark chamber

LOVE - Love scorns my hurt mind,
Falsifying happiness;
Natures true illusion

LOVE #2 - Love. A deceptive
illusion which manifests
in everyone

THOUGHTS - Boredom consumes me,
causing me to crave the void. 
Darkness calls to me

THOUGHTS #2 - My thoughts are dammed, 
Dark, desolate and yet free
It's its own young beast

ESCAPE - Ever thought of trying
to disappear completely
and live life unknown? 

LORRY - Alone cityfied
An old dreary lorry squeaks
betrayed by the girls

PEOPLE - Though I know people
I dont understand them all
I guess I'll eat pie

SMILES - Smiles solve nothing.
They are a nebula of
questions; no answers`

const container = document.querySelector(".haikuContainer");

var paragraphs = haikus
    // Split on new line
    .split(/[\n\r]+/g)
    // Remove blank lines
    .filter((p) => p.trim());

var numberHaikus = paragraphs.length / 3;
var selected = Math.floor(Math.random() * numberHaikus);

var haikuLines = [
    paragraphs[selected * 3],
    paragraphs[selected * 3 + 1],
    paragraphs[selected * 3 + 2],
]

var haikuName = haikuLines[0].split(" - ")[0];
haikuLines[0] = haikuLines[0].split(" - ")[1];


container.innerHTML =  `
    <h1>${haikuName}</h1>
    ${haikuLines[0]}<br>
    ${haikuLines[1]}<br>
    ${haikuLines[2]}<br>
`