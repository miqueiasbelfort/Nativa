export const tupi_atg = [
    {
        optionId: 1,
        type: "int",
        res: "Eu",
        ask: "Ixé",
        tip: 'Primeira pessoa do singular:',
        options: [
            "Eu",
            "Casa",
            "Eles",
            "Lua"
        ]
    },
    {
        optionId: 2,
        type: "int",
        res: "Comer",
        ask: "Karu",
        tip: 'Não podemos ficar sem!',
        options: [
            "Morrer",
            "Correr",
            "Nadar",
            "Comer"
        ]
    },
    {
        optionId: 3,
        type: "int",
        res: "Você",
        ask: "Endé",
        tip: '... vai para a praia amanhã?',
        options: [
            "Eles",
            "Rio",
            "Você",
            "Amar"
        ]
    },
    {
        optionId: 4,
        type: "exp",
        form: "table",
        text: "Pronomes pessoas em tupi antigo:",
        colum_01: ["Ixé", "Endé", "A'e", "Oré", "Îande", "Peê"],
        colum_02: ["Eu", "Tu", "Ele", "Nós", "Nós", "Vos"],
        desc: `
            Os pronomes "oré" e "îande", representam "nós".
            O îande é inclusivo, ou seja inclui quem está ouvindo.
            O oré é exclusivo, ou seja não representa quem está ouvindo. 
        `
    },
    {
        optionId: 5,
        type: "int",
        res: "Em",
        ask: "Pe",
        tip: 'Serve para juntar as palavras!',
        options: [
            "Viver",
            "Em",
            "Canoa",
            "Música"
        ]
    },
    {
        optionId: 6,
        type: "int",
        res: "Morar",
        ask: "Ikó",
        tip: 'Eu quero ... em São Paulo!',
        options: [
            "Morar",
            "Mulher",
            "Lança",
            "Português"
        ]
    },
    {
        optionId: 7,
        type: "text_form",
        to: "Português",
        res: "Eu moro em Brasília",
        ask: "Ixé aîko Brasília pe",
        options: [
            "durmo",
            "moro",
            "Eu",
            "Brasília",
            "para",
            "em"
        ]
    },
    {
        optionId: 8,
        type: "text_form",
        to: "Português",
        res: "Ele está comendo peixe",
        ask: "A'e okaru pirá",
        options: [
            "Ele",
            "peixe",
            "está",
            "morrendo",
            "comendo",
            "nadando"
        ]
    },
    {
        optionId: 9,
        type: "text_form",
        to: "Tupi Antigo",
        res: "Ixé akaru pirá",
        ask: "Eu estou comendo peixe",
        options: [
            "a'e",
            "syk",
            "pirá",
            "Ixé",
            "îande",
            "akaru"
        ]
    },
    {
        optionId: 10,
        type: "int",
        res: "Peixe",
        ask: "Pirá",
        tip: 'Fica nos rios e mares!',
        options: [
            "Mar",
            "Ondas",
            "Peixe",
            "Lua"
        ]
    },
    {
        optionId: 11,
        type: "int",
        res: "Rio",
        ask: "Y",
        tip: 'Onde pescamos!',
        options: [
            "Rio",
            "Flor",
            "Montanha",
            "Braco"
        ]
    },
    {
        optionId: 12,
        type: "end",
        text: "Você finalizou a introdução:",
        to: "/"
    }
]