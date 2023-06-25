const form = document.getElementById('form-lista');
    let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
});


function adicionaLinha() {
    const nomeTrem = document.getElementById('trem');
    const Links = document.getElementById('link');



    

    let linha = '<tr>';
    linha += `<td>${nomeTrem.value}</td>`;
    linha += `<td>${Links.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    nomeTrem.value = '';
    Links.value = '';
}


function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}