import Avatar from "../../components/profile/Avatar";
import About from "../../components/profile/About";
import UpdateUserInfoForm from "../../components/profile/UpdateUserInfoForm";
import styles from "./Profile.module.css";
import Router from "next/router";


function Profile(){
    return(
        <div className={styles.body}>
        <div className={styles.mainCard}>
            <button className={styles.btnHome} onClick={() => Router.push("/home")}>
            <img  src="https://i.ibb.co/Kw0hNY6/logo-Final-Qualidade.png" height="47" alt=""></img>
            </button>
        
            <Avatar/>
            <About />
            <UpdateUserInfoForm />
        </div>
        </div>
    );
}


export default Profile;