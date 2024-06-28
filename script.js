document.addEventListener('DOMContentLoaded', (event) => {
    const text = "À toi, Johanna, Ma future impératrice, tu es une personne formidable, sympathique et intelligente, remplie de qualités que j'apprends à découvrir davantage chaque jour qui passe. Je suis très heureux de t'avoir rencontrée et j'espère que c'est le début d'une longue aventure.Surtout, ne change pas. Reste telle que tu es. Ton Empereur ♥";
    const container = document.getElementById('typewriter-text');
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            container.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter,100);
        }
    }
   

    typeWriter();
});
