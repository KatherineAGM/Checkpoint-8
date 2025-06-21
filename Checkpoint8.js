const miLista = ["velma", "exploradora", "jane", "john", "harry"];

// Bucle for
console.log("--- Usando un bucle for ---");
for (let i = 0; i < miLista.length; i++) {
  console.log(miLista[i]);
}

// ---

// Bucle while
console.log("\n--- Usando un bucle while ---");
let i = 0; // Inicializamos el contador
while (i < miLista.length) {
  console.log(miLista[i]);
  i++; // Incrementamos el contador para evitar un bucle infinito
}