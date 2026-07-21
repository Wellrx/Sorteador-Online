const minInput = document.getElementById("min-number");
const maxInput = document.getElementById("max-number");
const result = document.getElementById("result");
const button = document.getElementById("button");

function generateNumber() {
    if (minInput.value === "" || maxInput.value === "") {
        alert("Preencha os dois campos.");
        return;
    }

    const min = Number(minInput.value);
    const max = Number(maxInput.value);

    if (min >= max) {
        alert("O mínimo precisa ser menor que o máximo.");
        return;
    }

    const randomNumber =
        Math.floor(Math.random() * (max - min + 1)) + min;

    result.textContent = `Número sorteado: ${randomNumber}`;
}

button.addEventListener("click", generateNumber);