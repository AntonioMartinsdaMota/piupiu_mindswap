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
            <img src="https://yt3.ggpht.com/ytc/AKedOLQZzLP2_xx8UhD6Y54T_b6rB6JrLrFWIAr0Wb6weQ=s900-c-k-c0x00ffffff-no-rj"alt=""/>
        </div>
    );

}

export default Avatar;