import Avatar from "../../components/profile/Avatar";
import About from "../../components/profile/About";
import UpdateUserInfoForm from "../../components/profile/UpdateUserInfoForm";
import styles from "./Profile.module.css";


function Profile(){
    return(
        
        <div className={styles.body}>
            <Avatar/>
            <About />
            <UpdateUserInfoForm />
        </div>
    );
}


export default Profile;