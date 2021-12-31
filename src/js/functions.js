// Create HTML for recipy divs 
export const mainHtmlMaker = (id,img,name) => {
    return `<div class="recipeDiv" id="${id}"><img class="recipeImg" src="${img}"><p class="recipeTitle">${name}</p></div>`;
}