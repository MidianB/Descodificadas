// Validação de formulário
document.querySelector("form").addEventListener("submit", function(event) {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    if (nome === "" || email === "") {
        alert("Por favor, preencha todos os campos.");
        event.preventDefault(); // Impede o envio do formulário se os campos estiverem vazios
    } else {
        alert("Cadastro realizado com sucesso!"); // Mensagem de confirmação
    }
});

// Efeito de rolagem suave para os links do menu
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão de clique
        const targetID = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetID);

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth' // Rolagem suave
        });
    });
});

// Animação simples para a galeria
const images = document.querySelectorAll('.galeria img');
images.forEach(img => {
    img.addEventListener('mouseover', function() {
        this.style.transform = "scale(1.1)"; // Aumenta o tamanho da imagem ao passar o mouse
        this.style.transition = "transform 0.3s ease"; // Transição suave
    });
    
    img.addEventListener('mouseout', function() {
        this.style.transform = "scale(1)"; // Volta ao tamanho normal quando o mouse sai
    });
});
