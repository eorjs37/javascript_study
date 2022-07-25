const regex = /abc/;
const regex2 = /\{[a-z]\}/g;
const str = `The European Parliament on Wednesday backed EU rules labelling investments in gas and {nuclear power plants} as climate-friendly, {throwing out} an attempt to block the law that has {exposed} deep {rifts} over how to fight climate change.
Gas is a {fossil fuel} that produces planet-warming emissions - but far less than dirtier coal. Some EU states see it as a temporary {alternative} .
Nuclear energy {is free from} CO2 emissions but produces {radioactive waste} . Nuclear backers such as France say it is {vital} to meet emissions-cutting goals, while opponents are concerned about waste disposal.
Out of 639 lawmakers present, 328 opposed a motion that sought to block the EU proposals.
It's highly likely to become law - unless 20 out of 28 members decided to oppose it.
The new rules will allow investors to label and market investments in gas and nuclear as green from 2023.
They aim to clear up the {murky} world of sustainable investing, by ensuring financial products making eco-friendly claims meet certain standards.
The gas and nuclear rules have split EU countries, lawmakers and investors. Brussels redrafted the rules multiple times, flip-flopping over whether to grant gas plants a green tag.
Industry groups have welcomed the law, but climate campaigners criticized it. Greenpeace said it would also mount a legal challenge.`;

const findMatch = str.match(/\{[\w\s]+\}/g);
let newStr = str;
findMatch.forEach((findItem) => {
  const split = findItem.split(/\s/);
  let replaceStr = "";
  //문장
  if (split.length > 1) {
    replaceStr = findItem.replace("{", "<span color='red'>").replace("}", "</span>");
  }
  //단어
  else {
    replaceStr = findItem.replace("{", "<span color='blue'>").replace("}", "</span>");
  }
  newStr = newStr.replace(findItem, replaceStr);
});

console.log(newStr);
