document.addEventListener("DOMContentLoaded", () => {
    // Carrega a Navbar
    const navbar = document.getElementById("navbar");
    if (navbar) {
        fetch("components/navbar.html")
            .then(res => res.text())
            .then(data => {
                navbar.innerHTML = data;
            })
            .catch(err => console.error("Erro ao carregar navbar:", err));
    }

    // Formulário de Contato com Feedback
    const form = document.querySelector("form");
    const mensagemDiv = document.getElementById("mensagem");

    if (form && mensagemDiv) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            mensagemDiv.textContent = "Mensagem enviada com sucesso! Em breve entraremos em contato.";
            mensagemDiv.style.color = "#2cff87";
            form.reset();
        });
    }

    // Botão WhatsApp Interativo
    const whatsapp = document.querySelector(".whatsapp");
    if (whatsapp) {
        const textoOriginal = whatsapp.textContent;
        whatsapp.addEventListener("mouseenter", () => whatsapp.textContent = "Fale Conosco");
        whatsapp.addEventListener("mouseleave", () => whatsapp.textContent = textoOriginal);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const msgStatus = document.getElementById("mensagem-status");

    if (form && msgStatus) {
        form.addEventListener("submit", async function (e) {
            e.preventDefault(); // Impede o recarregamento da página
            
            const data = new FormData(e.target);
            
            // Envia para o Formspree via AJAX
            const response = await fetch(e.target.action, {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                msgStatus.textContent = "Mensagem enviada com sucesso! Em breve entraremos em contato.";
                msgStatus.style.color = "var(--neon-green)";
                form.reset();
            } else {
                msgStatus.textContent = "Ops! Houve um erro ao enviar.";
                msgStatus.style.color = "red";
            }
        });
    }
});