import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'
import { ThumbsUp, Trash } from "phosphor-react"

export function Comment({ content, deleteComment }) {
    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment() {
        deleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount(likeCount + 1);
    }
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/97633667?v=4" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Musashi Fraco</strong>
                            <time title='11 de maio ás 8:13' dateTime='2023-05-11 08:13:38' >Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar Comentário'>
                            <Trash width={'100%'} height={'100%'} className={styles.lixo} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp width={'1.25rem'} height={'1.25rem'} />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>

        </div>
    )
}