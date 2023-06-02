var login = "adm"
var senha = 123

var acesso = vallogin (login, senha)
if (acesso == true)
{
    console.log("Voce pode acessar o sistema")
} else
{
    console.log ("Voce nao tem permissao")
}

function vallogin (login, senha)
{
    if (login == '' || senha == '')
    {
        return false
    }
    if (login == "adm" && senha == 123)
    {
        return true
    }
    else
    {
        return false
    }
}