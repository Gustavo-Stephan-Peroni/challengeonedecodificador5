function encrypt() {
    var inputText = document.getElementById("inputText").value.toLowerCase();
    var encryptedText = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("result").textContent = encryptedText;
}

function decrypt() {
    var inputText = document.getElementById("inputText").value.toLowerCase();
    var decryptedText = inputText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("result").textContent = decryptedText;
}
