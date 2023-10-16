import styles from "./Sidebar.module.css";
import {PencilLine} from 'phosphor-react'
import { Avatar } from "./Avatar";

export function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            <img className = {styles.cover} src="https://images.unsplash.com/photo-1560972550-aba3456b5564?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=40" />
            <div className={styles.profile}>
                <Avatar src="https://avatars.githubusercontent.com/u/83426341?v=4" alt="" />
                <strong>Newthon Silveira</strong>
                <span>Jovem Aprendiz</span>
            </div>

        <footer>
            <a href="#">
                <PencilLine size={20}/>
                Editar seu perfil
            </a>
        </footer>
        </aside>
    )
}