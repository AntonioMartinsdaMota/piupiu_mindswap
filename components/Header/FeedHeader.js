import styles from './Header.module.css'

function PageHeader(){

    return <>
    <div className={styles.logo}>
    <img src="https://i.ibb.co/3c94bFF/logo.png" height={75} alt="" />
    <h2>PiuPiu</h2>
    <input className="search_bar" type="text" placeholder="🔍  Search" />
    </div>
    </>
}

export default PageHeader;