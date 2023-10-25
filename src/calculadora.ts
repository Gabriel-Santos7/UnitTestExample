export class Calculadora {
  diferenca(a: number, b: number): number {
    return a - b;
  }

  divisao(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Divisão por zero não é permitida");
    }
    return a / b;
  }

  produto(a: number, b: number): number {
    return a * b;
  }

  soma(a: number, b: number): number {
    return a + b;
  }
}