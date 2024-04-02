import Input from "../../Components/Input/Input.tsx";
import Button from "../../Components/Button/Button.tsx";
import {Link} from "react-router-dom";
import s from './Login.module.scss';
import Headling from "../../Components/Headling/Headling.tsx";
import {FormEvent, useState} from "react";
import axios, {AxiosError} from "axios";
import {BASE_URL} from "../../helpers/API.ts";
import {LoginResponse} from "../../Components/interfaces/auth.interface.ts";

export type LoginFormType = {
    email: {
        value: string;
    };
    password: {
        value: string;
    };
}

const Login = () => {
    const [error, setError] =
        useState<string | null>(null);
    const onFormSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const target = e.target as typeof e.target & LoginFormType;
        const {email, password} = target;
        await sendLogin(email.value, password.value);
    };
    const sendLogin = async (email: string, password: string) => {
        try {
            setError(null);
            const {data} = await axios.post<LoginResponse>(`${BASE_URL}/auth/login`, {
                email,
                password
            });
            console.log(data);
            localStorage.setItem('jwt', data.access_token);
        } catch (e) {
            if (e instanceof AxiosError) {
                setError(e.response?.data.message);
            }
        }
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
                    {error && <div className={s.error}>{error}</div>}
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