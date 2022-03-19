const functions = require('./service');


describe("Mockando funções", () => {
 it("Testando a primeira função", () => {
  functions.retornaNumeroAleatorio = jest.fn().mockReturnValue(10);
  functions.retornaNumeroAleatorio();
  expect(functions.retornaNumeroAleatorio).toBeCalled();
  expect(functions.retornaNumeroAleatorio).toBeCalledTimes(1);
  expect(functions.retornaNumeroAleatorio()).toBe(10);

 });

 it("Testando a segunda função", () => {
  functions.retornaNumeroAleatorio = jest.fn().mockImplementationOnce((a, b) => a / b);
  expect(functions.retornaNumeroAleatorio(10, 2)).toBe(5);
  expect(functions.retornaNumeroAleatorio).toHaveBeenCalled();
  expect(functions.retornaNumeroAleatorio).toHaveBeenCalledTimes(1);
  expect(functions.retornaNumeroAleatorio).toHaveBeenCalledWith(10, 2);
 });
 it("Testando a terceira função", () => {
  const mockMultiplicar = jest
  .spyOn(functions, "retornaNumeroAleatorio")
  .mockImplementation((a, b, c) => a*b*c);
  functions.retornaNumeroAleatorio(1, 2, 4);
  expect(mockMultiplicar(1,2,4)).toBe(8);
  expect(mockMultiplicar).toHaveBeenCalledTimes(2);
  expect(mockMultiplicar).toHaveBeenLastCalledWith(1, 2, 4);
  
  functions.retornaNumeroAleatorio.mockRestore();
  const mockDobro = jest
  .spyOn(functions, "retornaNumeroAleatorio")
  .mockImplementation((a) => a*a);
  functions.retornaNumeroAleatorio(2);
  expect(mockDobro(2)).toBe(4);

 });


})