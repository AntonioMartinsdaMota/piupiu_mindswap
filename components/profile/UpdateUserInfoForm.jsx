import {useState, useEffect} from 'react';
import styles from './UpdateUserInfoForm.module.css';

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

    function refreshPage(){
        window.location.reload();
    }

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

        refreshPage();

    }

    return (
        <div className={styles.box}>
            <button className={styles.btnLogin}onClick={() => setIsToggled(!isToggled)}>
                {isToggled ? "Hide" : "Update User Info"}
            </button>
            {isToggled && (
            <form className={styles.updateForm} onSubmit={handleSubmit}>
                <label className={styles.label}>
                    avatar:
                    <input className={styles.input} type="text" value={avatar} onChange={e => setAvatar(e.target.value)} />
                </label>
                <label className={styles.label}>
                    role:
                    <input className={styles.input} type="text" value={role} onChange={e => setRole(e.target.value)} />
                </label>
                <label className={styles.label}>
                    name:
                    <input className={styles.input} type="text" value={name} onChange={e => setName(e.target.value)} />
                </label>
                <label className={styles.label}>
                    e-mail:
                    <input className={styles.input} type="text" value={email} onChange={e => setEmail(e.target.value)} />
                </label>
                <label className={styles.label}>
                    password:
                    <input className={styles.input} type="text" value={password} onChange={e => setPassword(e.target.value)} />
                </label>
                <label className={styles.label}>
                    about:
                    <input className={styles.input} type="text" value={about} onChange={e => setAbout(e.target.value)} />
                </label>
                <button className={styles.btnLogin} type="submit">Update</button>
            </form>
            )}
        </div>
    );
}


export default UpdateUserInfoForm;
       

