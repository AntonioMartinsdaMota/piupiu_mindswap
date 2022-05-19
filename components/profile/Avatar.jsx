import {useState, useEffect} from "react";

function Avatar (){

    const [user, setUser] = useState({});
    const [avatar, setAvatar] = useState(null);

    async function getUser(){
        const response = await fetch("api/me");
        const json = await response.json();
        setUser(json.data);
        setAvatar(user.avatar);
    }

    useEffect(() => {
        getUser();
    }, []);

    return(
        <div className="avatar">
            <img src={avatar} alt="avatar" />
        </div>
    );

}

export default Avatar;