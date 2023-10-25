import { Calculadora } from '../calculadora'; 

describe('Calculadora', () => {
  let calculadora: Calculadora;

  beforeEach(() => {
    calculadora = new Calculadora();
  });

  it('deve calcular a diferença corretamente', () => {
    expect(calculadora.diferenca(5, 3)).toBe(2);
  });

  it('deve calcular a divisão corretamente', () => {
    expect(calculadora.divisao(10, 2)).toBe(5);
  });

  it('deve lançar uma exceção ao tentar dividir por zero', () => {
    expect(() => calculadora.divisao(5, 0)).toThrowError("Divisão por zero não é permitida");
  });

  it('deve calcular o produto corretamente', () => {
    expect(calculadora.produto(4, 3)).toBe(12);
  });

  it('deve calcular a soma corretamente', () => {
    expect(calculadora.soma(7, 8)).toBe(15);
  });
});

describe('Calculadora', () => {
  let calculadora: Calculadora;

  beforeEach(() => {
    calculadora = new Calculadora();
  });

  it('deve calcular a diferença corretamente', () => {
    expect(calculadora.diferenca(5, 3)).toBe(2);
  });

  it('deve calcular a divisão corretamente', () => {
    expect(calculadora.divisao(10, 2)).toBe(5);
  });

  it('deve lançar uma exceção ao tentar dividir por zero', () => {
    expect(() => calculadora.divisao(5, 0)).toThrowError("Divisão por zero não é permitida");
  });

  it('deve calcular o produto corretamente', () => {
    expect(calculadora.produto(4, 3)).toBe(12);
  });

  it('deve calcular a soma corretamente', () => {
    expect(calculadora.soma(7, 8)).toBe(15);
  });
});