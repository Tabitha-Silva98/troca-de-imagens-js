var imagemAtual = 1;

function trocarImagem() {
    var foto = document.getElementById('imagemPrincipal');

    if (imagemAtual === 1) {
        foto.src = "fotos/euCasaBranca.png";
        imagemAtual = 2;
    } else if (imagemAtual === 2) {
        foto.src = "fotos/poco.png";
        imagemAtual = 3;
    } else {
        foto.src = "fotos/STL.png";
        imagemAtual = 1;
    }
}
