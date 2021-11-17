// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(meow){
    cats.push(meow)
}
function destructivelyPrependCat(meow){
    cats.unshift(meow)
}
function destructivelyRemoveLastCat(meow){
    cats.pop(meow)
}
function destructivelyRemoveFirstCat(meow){
    cats.shift(meow)
}

function appendCat(meow){
    return [...cats, meow]
}

function prependCat(meow){
    return [meow, ...cats]
}

function removeLastCat(meow){
    return cats.slice(0, cats.length -1)
}

function removeFirstCat(meow){
    return cats.slice(1)
}