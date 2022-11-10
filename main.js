const container = document.querySelector(".haikuContainer");
const haikuText = document.getElementById("haikuText").innerHTML;

var paragraphs = haikuText
    .split(/[\n\r]+/g)
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