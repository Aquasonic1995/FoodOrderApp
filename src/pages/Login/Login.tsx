import Input from "../../Components/Input/Input.tsx";
import Button from "../../Components/Button/Button.tsx";
import {Link} from "react-router-dom";
import s from'./Login.module.scss';
import Headling from "../../Components/Headling/Headling.tsx";
import {FormEvent} from "react";
import axios from "axios";
import {BASE_URL} from "../../helpers/API.ts";
export type LoginFormType = {
    email: {
        value: string;
    };
    password: {
        value: string;
    };
}

const Login = () => {
  const onFormSubmit = async (e:FormEvent) => {
        e.preventDefault();
        const target = e.target as typeof e.target & LoginFormType;
        const {email, password } = target;
        await sendLogin(email.value, password.value);
    };
    const sendLogin = async( email:string, password:string) =>{
        const {data} = await axios.post(`${BASE_URL}/auth/login`,{
            email,
            password
        });
        console.log(data);
    };
    return (
        <div className={s.login}>
            <Headling>Вход</Headling>
        <form className={s.form} onSubmit={onFormSubmit}>
            <div className={s.field}>
                <label htmlFor="email"></label>
                <Input id="email" name="email" placeholder="Email..."/>
            </div>
            <div className={s.field}>
                <label htmlFor="password"></label>
                <Input id="password" name="password" placeholder="Password..." type="password"/>
            </div>

            <Button appearance="big">Вход</Button>
            <div className={s.links}>
            <div>Нет аккаунта?</div>
            <div>
                <Link to="/auth/register">Регистрация</Link>
            </div>
            </div>
        </form>
        </div>
    );
};

export default Login;