function Calcular(){

    let materia = String(document.getElementById("materia").value)
    let res = document.getElementById("res")


    switch (materia){
        case "PHP":
            res.innerHTML = `Este é um aluno do IFMS que estuda PHP`
        break
        case "JavaScript":
            res.innerHTML = `Este é um aluno do IFMS que estuda JavaScript`
        break
        default: 
            res.innerHTML = `Este não é um aluno do IFMS`
    }
}