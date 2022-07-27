function printCoord(pt) {
    console.log("O valor da cordenada x é: " + pt.x);
    console.log("O valor da coordenada y é: " + pt.y);
}
function sum(s) {
    console.log("O valor da soma \u00E9: ".concat(s.w + s.z));
}
printCoord({ x: 100, y: 100 });
sum({ w: 10, z: 55 });
