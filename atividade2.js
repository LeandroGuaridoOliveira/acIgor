
/*O id em que voce colocou no constructor estava em maiusculo,
diferente de quando voce foi especificar a classe oque poderia estar dando alguns problemas na hora de usar
a classe, que estava em minusculo, no seu constructor tem atributos que não são usados,
pelo menos até agora, como o endereço, data de nascimento e etc, não é algo desnecessario mas pode te confundir na hora de programar, é recomendavel colocar essas partes em comentário, só uma dica! 
e na parte do this.ctps,é necessario colocar this.#ctps,
e na parte da demissão, eu pensei no seguinte codigo
*/
    demissao(status); {
        if (status === true) {
            this.onJob = status;
            console.log("Continue com  bom trabalho");
            // o status true é significado de bom trabalho e o false é demissão
        }
        else{
            this.onJob = status;
            console.log("demissão por status ruim");
        } 
    }
 
