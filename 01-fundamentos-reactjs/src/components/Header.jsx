import styles from "./Header.module.css"// quando é um module css precisamos dar nome ao exportar
import igniteLogo from "../assets/ignite-logo.svg"

export function Header(){ //exportei um componente chamado header(todos os componentes devem começar com letra maiuscula)
    return(
        <header className={styles.header}> {/* temos que usar o styles como se fosse um arquivo em js*/}
            <img src={igniteLogo} alt="Logotipo do ignite"/>
            <strong>Ignite Feed</strong> 
        </header>
    )
}