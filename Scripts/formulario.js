document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value.trim();
        const phone = document.getElementById("phone");
        const origem = document.getElementById("pagina_origem");

        origem.value = window.location.href;


        if (name.length < 2 || !/^[a-zA-Z\s]+$/.test(name)) {
            alert("Nome precisa ter pelo menos 2 caracteres e conter apenas letras.");
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            alert("E-mail inválido.");
            return;
        }

        if (!subject) {
            alert("Selecione um assunto.");
            return;
        }

        if(phone.value.trim() === "" || !/^\d{10,11}$/.test(phone.value.trim())) {
            alert("Telefone é obrigatório e deve ter 10 ou 11 dígitos.");
            return;
        }

        if (message.length < 5) {
            alert("Mensagem precisa ter pelo menos 5 caracteres.");
            return;
        }

        emailjs.sendForm("service_cd07671", "template_42qfvrn", form)
            .then(() => {
                alert("Mensagem enviada com sucesso!");
                form.reset();
            })
            .catch((error) => {
                console.error("Erro:", error);
                alert("Erro ao enviar a mensagem.");
            });
    });
});
