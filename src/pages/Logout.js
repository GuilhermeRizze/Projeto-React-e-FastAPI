import { Button } from '@mui/material'


const Logout = () => {
    const Deslogar = () =>{
        //axios.post(url,data).then(retorno => {})
       // localStorage.removeItem('token')
        window.location = '/'
    }
    return(
        <div>
            <h3> Logout do usuário </h3>
            <Button variant='contained' onClick={ () => Deslogar ()}>
            Sair
            </Button>

        </div>
    )
}

export default Logout