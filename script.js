const botaoMenu = document.getElementById("botao-menu");
const menu = document.getElementById("menu");

botaoMenu.addEventListener("click", function () {
    menu.classList.toggle("ativo");
});

const links = document.querySelectorAll("#menu a");

links.forEach(function (link) {

    link.addEventListener("click", function () {
        menu.classList.remove("ativo");
    });

});

const botaoTema = document.getElementById("botao-tema");

if (localStorage.getItem("tema") === "escuro") {

    document.body.classList.add("escuro");

    botaoTema.textContent = "☀";

}

botaoTema.addEventListener("click", function () {

    document.body.classList.toggle("escuro");


    if (document.body.classList.contains("escuro")) {

        localStorage.setItem("tema", "escuro");

        botaoTema.textContent = "☀";

    } else {

        localStorage.setItem("tema", "claro");

        botaoTema.textContent = "☾";

    }

});

const texto = document.getElementById("texto-digitando");

const frases = [
    "ESTUDANTE DE TI",
    "E CRIADORA DE PROJETOS",
    "Construindo minha jornada na tecnologia: aprendendo rápido, errando cedo e evoluindo sempre."
];

let fraseAtual = 0;
let letraAtual = 0;
let apagando = false;


function escrever() {

    const frase = frases[fraseAtual];


    if (!apagando) {

        texto.textContent = frase.substring(0, letraAtual + 1);

        letraAtual++;


        if (letraAtual === frase.length) {

            apagando = true;

            setTimeout(escrever, 1500);

            return;
        }

    } else {

        texto.textContent = frase.substring(0, letraAtual - 1);

        letraAtual--;


        if (letraAtual === 0) {

            apagando = false;

            fraseAtual++;


            if (fraseAtual === frases.length) {
                fraseAtual = 0;
            }

        }

    }


    setTimeout(
        escrever,
        apagando ? 50 : 100
    );

}

escrever();

const elementos = document.querySelectorAll(".revelar");

function mostrarElementos() {

    elementos.forEach(function (elemento) {

        const distancia =
            elemento.getBoundingClientRect().top;


        if (distancia < window.innerHeight - 100) {

            elemento.classList.add("aparecer");
        }
    });

}


window.addEventListener(
    "scroll",
    mostrarElementos
);

mostrarElementos();

const telefone = document.getElementById("telefone");


telefone.addEventListener("input", function () {

    let numero = telefone.value.replace(/\D/g, "");

    if (numero.length > 11) {

        numero = numero.substring(0, 11);
    }

    if (numero.length <= 10) {

        numero = numero.replace(
            /^(\d{2})(\d)/,
            "($1) $2"
        );

        numero = numero.replace(
            /(\d{4})(\d)/,
            "$1-$2"
        );

    }
    else {

        numero = numero.replace(
            /^(\d{2})(\d)/,
            "($1) $2"
        );

        numero = numero.replace(
            /(\d{5})(\d)/,
            "$1-$2"
        );

    }

    telefone.value = numero;

});

const formulario =
    document.getElementById("formulario");

const modal =
    document.getElementById("modal");

const fecharModal =
    document.getElementById("fechar-modal");


formulario.addEventListener(
    "submit",
    function (evento) {
        evento.preventDefault();

        modal.classList.add("ativo");

        formulario.reset();

    }
);

fecharModal.addEventListener(
    "click",
    function () {

        modal.classList.remove("ativo");

    }
);

modal.addEventListener(
    "click",
    function (evento) {

        if (evento.target === modal) {

            modal.classList.remove("ativo");

        }

    }
);

document.addEventListener(
    "keydown",
    function (evento) {

        if (evento.key === "Escape") {

            modal.classList.remove("ativo");

        }

    }
);
