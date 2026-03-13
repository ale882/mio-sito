// Citazioni sull'importanza di rilassarsi
const citazioniRelax = [
    "Il relax è essenziale per la salute mentale e fisica.",
    "Prenditi del tempo per rilassarti, la tua mente ne ha bisogno.",
    "La pace viene da dentro. Non cercarla fuori. — Buddha",
    "Il riposo non è ozio. — John Lubbock",
    "Rilassarsi è il primo passo per ritrovare l'equilibrio.",
    "La calma è la chiave per una vita felice.",
    "Il relax è il nutrimento dell'anima.",
    "Solo chi sa rilassarsi può davvero vivere."
];

function mostraCitazioneRandom() {
    const idx = Math.floor(Math.random() * citazioniRelax.length);
    document.getElementById('citazione-relax').textContent = citazioniRelax[idx];
}

// Mostra una citazione appena la pagina viene caricata
window.addEventListener('DOMContentLoaded', mostraCitazioneRandom);
