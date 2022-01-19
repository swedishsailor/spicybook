// Create HTML for recipy divs 
export const mainHtmlMaker = (id, img, name) => 
    `<div class="recipeDiv" id="${id}"><img class="recipeImg" src="${img}"><p class="recipeTitle">${name}</p></div>`;


export const generalHtmlMaker = (name,text, steps, bigImg, ingredients) => 
    '<i class="far fa-arrow-alt-circle-left back"></i>' + 
    '<div class="recipeDetails">' + 
    '<div class="leftPanel"><div class="details">' + 
    '<h2 class="recipeName">' + name + '</h2>' +
    '<p class="text">' + text + '</p>' +
    '<img class="textDecoration" src="https://i.postimg.cc/mgXxXCCY/squirrels.png" alt="Decoration"/>' +
    '<ul class="stepsList">' + 
    // Mapping steps and ingredients
     steps.map(element => `<li class="steps"><span>Krok ${steps.indexOf(element) + 1}</span> : ${element.name}</li>`).join('') + 
     '</ul></div></div><div class="rightPanel"><img class="img" src="' + bigImg + '"><div class="ingredients">' + '<ul class="list"><p class="listName">Ingredients</p>' +
      ingredients.map(element => `<li class="listItem">${element.name}</li>`).join('') + '</ul>' + '</div></div></div>';


      // Function made to get html from DOM nodelist
export const getHTML = (who, deep) => {
    if (!who || !who.tagName) return '';
    let txt, ax, el = document.createElement("div");
    el.appendChild(who.cloneNode(false));
    txt = el.innerHTML;
    if (deep) {
        ax = txt.indexOf('>') + 1;
        txt = txt.substring(0, ax) + who.innerHTML + txt.substring(ax);
    }
    el = null;
    return txt;
}