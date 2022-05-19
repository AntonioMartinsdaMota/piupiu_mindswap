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

        <div>
            <h1>About</h1>
            <p>{user.name}</p>
            <p>{user.email}</p>

        </div>

    );


}


export default About;
       
       