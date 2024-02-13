const showEncryptedBox = document.querySelector("main section:last-child");
const encryptButton = document.querySelector(".encrypt-button");
const decryptButton = document.querySelector(".decrypt-button");
const textArea = document.querySelector("textarea");
const encryptedMessage = document.querySelector(".encrypted_message");
const copyButton = document.querySelector(".copy-button");
const alertText = document.getElementById("alertText");

// Função para criptografar uma palavra
function criptografar(palavra) {
  palavra = palavra
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
  return palavra;
}

// Função para descriptografar uma palavra
function descriptografar(palavraCriptografada) {
  palavraCriptografada = palavraCriptografada
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  return palavraCriptografada;
}

function executarOperacao() {
  let resultado;

  if (textArea.value === "") {
    document.getElementById("alertModal").style.display = "flex";
    alertText.innerText = "Por favor, preencha este campo antes de prosseguir.";
    return;
  } else if (/[^a-z0-9]/.test(textArea.value) || /[A-Z]/.test(textArea.value)) {
    document.getElementById("alertModal").style.display = "flex";
    alertText.innerText =
      "Apenas letras minúsculas ou números, sem acento e sem caracteres especiais.";
    return;
  } else {
    if (encryptButton && encryptButton.classList.contains("active")) {
      resultado = criptografar(textArea.value);
    } else if (decryptButton && decryptButton.classList.contains("active")) {
      resultado = descriptografar(textArea.value);
    }

    showEncryptedBox.classList.add("encrypted_message-box");
    encryptedMessage.innerText = resultado;

    // Adicionar lógica para copiar para a área de transferência
    copyButton.addEventListener("click", function () {
      let message = encryptedMessage.innerHTML;
      navigator.clipboard.writeText(message);
    });
  }
}

function verificarAtualizarClasse() {
  // Verifica se o conteúdo do textarea está vazio ou contém apenas espaços em branco
  if (!textArea.value.trim()) {
    // Remove a classe encrypted_message-box se o conteúdo estiver vazio
    showEncryptedBox.classList.remove("encrypted_message-box");
  }
}

// Adicionars listeners para os botões
encryptButton.addEventListener("click", function () {
  encryptButton.classList.add("active");
  decryptButton.classList.remove("active");
  executarOperacao();
});

decryptButton.addEventListener("click", function () {
  encryptButton.classList.remove("active");
  decryptButton.classList.add("active");
  executarOperacao();
});

textArea.addEventListener("input", function () {
  // Utiliza uma função para verificar e atualizar a classe em tempo real
  verificarAtualizarClasse();
});

function showAlert() {}

function closeAlert() {
  document.getElementById("alertModal").style.display = "none";
}
