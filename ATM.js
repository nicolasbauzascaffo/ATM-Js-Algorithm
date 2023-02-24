/* 
Algoritmo de extracción de billeres:
-Para el algoritmo, primero se colocan los límites de la extracción.
-Luego se establece un arreglo con los billetes.
-Se itera sobre cada billete y se divide el monto por cada billete.
-Se coloca el resultado de la división en la constante 'change' y luego de va restado del monto.
-Finalmente se devuelve el cambio y son la catnidad de billetes de cada tipo.
*/

const ATM = (amount) => {
  if (amount < 100 || amount > 2500) {
    return "La cantidad debe estar entre 100 y 2500.";
  }

  const bills = [100, 50, 20, 5, 1];
  const change = [];

  for (const bill of bills) {
    const count = Math.floor(amount / bill);
    change.push(count);
    amount -= count * bill;
  }

  return change;
};

console.log(ATM(100));

