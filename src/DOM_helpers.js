function getRandomCoords() {
    return [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]
}

function getRandomOrientation() {
    return ['horizontal', 'vertical'][Math.floor(Math.random() * 2)];
}

export {getRandomCoords, getRandomOrientation}