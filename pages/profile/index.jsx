import Avatar from "../../components/profile/Avatar";
import About from "../../components/profile/About";
import UpdateUserInfoForm from "../../components/profile/UpdateUserInfoForm";

function Profile(){
    return(
        
        <div>
            <Avatar />
            <About />
            <UpdateUserInfoForm />
        </div>
    );
}


export default Profile;