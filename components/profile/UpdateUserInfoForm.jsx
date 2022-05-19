import {useState, useEffect} from 'react';

function getUser(){
    return fetch("api/me")
        .then(res => res.json())
        .then(json => json.data);
}


function UpdateUserInfoForm(){
    const [avatar, setAvatar] = useState('');
    const [role, setRole] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [about, setAbout] = useState('');
    const [isToggled, setIsToggled] = useState(false);

    useEffect(() => {
        getUser().then(user => {
            setAvatar(user.avatar);
            setRole(user.role);
            setName(user.name);
            setEmail(user.email);
            setAbout(user.about);
        });
    }

    , []);

    function handleSubmit(e){
        e.preventDefault();
        fetch("api/users", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                avatar,
                role,
                name,
                email,
                password,
                passwordConfirm,
                about,
            }),
        })
        .then(res => res.json())
        .then(json => {
            console.log(json);
            console.log("User info updated");
        });
    }

    return (
        <div>
            <button onClick={() => setIsToggled(!isToggled)}>
                {isToggled ? "Hide" : "Update User Info"}
            </button>
            {isToggled && (
            <form onSubmit={handleSubmit}>
                <label>
                    Avatar:
                    <input type="text" value={avatar} onChange={e => setAvatar(e.target.value)} />
                </label>
                <label>
                    Role:
                    <input type="text" value={role} onChange={e => setRole(e.target.value)} />
                </label>
                <label>
                    Name:
                    <input type="text" value={name} onChange={e => setName(e.target.value)} />
                </label>
                <label>
                    Email:
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                </label>
                <label>
                    Password:
                    <input type="text" value={password} onChange={e => setPassword(e.target.value)} />
                </label>
                <label>
                    Password Confirm:
                    <input type="text" value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)} />
                </label>
                <label>
                    About:
                    <input type="text" value={about} onChange={e => setAbout(e.target.value)} />
                </label>
                <button type="submit">Update</button>
            </form>
            )}
        </div>
    );
}


export default UpdateUserInfoForm;
       

