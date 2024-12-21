const container = document.querySelector('.particles');

for (let i = 0; i < 100; i++) {
    const particle = document.createElement('div');
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.top = `${Math.random() * 100}vh`;
    particle.style.animationDelay = `${Math.random() * 5}s`;
    particle.style.opacity = Math.random();
    container.appendChild(particle);
}

const toggleSwitch = document.querySelector(".toggle");
const encodeText = document.querySelector(".encode-text");

toggleSwitch.addEventListener("change", function () {
    if (toggleSwitch.checked) {
        encodeText.textContent = "Decode";
        encodeText.classList.remove("neon-green");
        encodeText.classList.add("neon-red");
    } else {
        encodeText.textContent = "Encode";
        encodeText.classList.remove("neon-red");
        encodeText.classList.add("neon-green");
    }
});

encodeText.classList.add("neon-green");

function encodeToHex(text) {
    let hex = '';
    for (let i = 0; i < text.length; i++) {
        hex += text.charCodeAt(i).toString(16);
    }
    return hex;
}

function decodeFromHex(hex) {
    let str = '';
    for (let i = 0; i < hex.length; i += 2) {
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    }
    return str;
}

document.querySelector('.submit-button').addEventListener('click', function() {
    const inputText = document.querySelector('.input-box').value;
    const outputBox = document.querySelector('.output-box');
    if (toggleSwitch.checked) {
        outputBox.value = decodeFromHex(inputText);
    } else {
        outputBox.value = encodeToHex(inputText);
    }
});

document.querySelector('.btn-3').addEventListener('click', function() {
    window.open('https://github.com/CH40S-BR', '_blank');
});
