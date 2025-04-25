import styles from './Header.module.css'

import rocketLogo from '../Icons/rocket.svg'



export function Header () {


return (

<header className={styles.header}>ToDo



    <img src={rocketLogo} alt="Logotipo do Site" />
</header>

)

}