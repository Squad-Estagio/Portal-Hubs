
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subjectSelect = document.getElementById("subject");
        const subjectText = subjectSelect.options[subjectSelect.selectedIndex].text;
        document.getElementById("assuntoTexto").value = subjectText;
        const message = document.getElementById("message").value.trim();
        const phone = document.getElementById("phone");
        const origem = document.getElementById("pagina_origem");

        origem.value = document.title;

        if (name.length < 2 || !/^[a-zA-Z\s]+$/.test(name) || name.length > 100) {
            Swal.fire({
                icon: 'error',
                title: 'Nome inválido',
                text: 'O nome precisa ter pelo menos 2 caracteres e conter apenas letras.'
            });
            return;
        }

        if (!email.includes("@") || !email.includes(".") || email.length > 350) {
            Swal.fire({
                icon: 'error',
                title: 'E-mail inválido',
                text: 'Por favor, insira um e-mail válido.'
            });
            return;
        }

        if (!subject) {
            Swal.fire({
                icon: 'error',
                title: 'Assunto inválido',
                text: 'Por favor, selecione um assunto.'
            });
            return;
        }

        if(phone.value.trim() === "" || !/^\d{10,11}$/.test(phone.value.trim()) || phone.value.trim().length < 10 || phone.value.trim().length > 11) {
            Swal.fire({
                icon: 'error',
                title: 'Telefone inválido',
                text: 'O número de telefone deve ter 10 ou 11 dígitos.'
            });
            return;
        }

        if (message.length < 5 || message.length > 500) {
            Swal.fire({
                icon: 'error',
                title: 'Mensagem inválida',
                text: 'A mensagem deve ter no minimo 5 caracteres.'
            });
            return;
        }

        emailjs.sendForm("service_cd07671", "template_42qfvrn", form)
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Mensagem enviada com sucesso!',
                    text: 'Sua mensagem foi enviada com sucesso.'
                });
                form.reset();
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Erro ao enviar mensagem',
                    text: 'Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.'
                });
            });
    });
});
