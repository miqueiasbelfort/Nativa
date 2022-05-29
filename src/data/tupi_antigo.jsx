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
            "Tu",
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
        tip: 'Segunda pessoa do singular',
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
        colum_01: ["Ixé", "Endé", "A'e", "oré", "Îande", "Peê"],
        colum_02: ["Eu", "Tu", "Ele", "Nós", "NóS", "Vos"],
        desc: `
            Os pronomes "oré" e "endé", representam "nós".
            O endé é inclusivo, ou seja inclui quem está ouvindo.
            O oré é exclusivo, ou seja não representa quem está ouvindo. 
        `
    }
]