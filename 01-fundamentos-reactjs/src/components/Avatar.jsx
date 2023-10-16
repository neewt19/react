import styles from "./Avatar.module.css";

// eslint-disable-next-line react/prop-types
export function Avatar({hasBorder = true, src}){
    return(
        // eslint-disable-next-line react/prop-types
        <img className={hasBorder? styles.avatarWithBorder : styles.avatar} src={src}/>
    )
}