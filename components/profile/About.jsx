import {useState, useEffect} from "react";

function About () {

    const [user, setUser] = useState({});

    async function getUser(){
        const response = await fetch("api/me");
        const json = await response.json();
        setUser(json.data);
    }

    useEffect(() => {
        getUser();
    }, []);


    return(
        <div className="about">
            <div className="avatar">
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>{user.password}</p>
            </div>
        </div>
    );

}


export default About;
   





 