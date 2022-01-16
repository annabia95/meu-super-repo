const myRemove = require('./myArrayRemove');

describe ('Requisito 1, 2 e 3:', () => {
    it ('A chamada myRemove([1, 2, 3, 4], 3) retorna o array sem o item 3', () => {
    const myArray = [1, 2, 3, 4];
    expect([1, 2, 4]).toEqual(myRemove(myArray,3));
    }
    )
    it ('A chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
        const myArray = [1, 2, 3, 4];
        expect(myRemove(myArray, 3)).not.toEqual([1, 2, 3, 4]);
    }
    )
    it ('A chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
        const myArray = [1, 2, 3, 4];
        expect(myRemove(myArray, 5)).toEqual([1, 2, 3, 4]);
        }
    )
});
  