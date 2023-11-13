

(function() {

    const btnExlusao = document.querySelectorAll(".btnExclusao");
    btnExlusao.forEach(btn=>{
        btn.addEventListener("click",(e)=>{
            const confirmacao=confirm("Deseja realmente excluir essa disciplina?")
            if(!confirmacao){
                e.preventDefault();
            }
        });
    });


})();