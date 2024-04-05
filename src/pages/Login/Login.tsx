import Input from "../../Components/Input/Input.tsx";
import Button from "../../Components/Button/Button.tsx";
import {Link, useNavigate} from "react-router-dom";
import s from './Login.module.scss';
import Headling from "../../Components/Headling/Headling.tsx";
import {FormEvent, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../store/user.slice.ts";
import {AppDispatch, RootStore} from "../../store/store.ts";

export type LoginFormType = {
    email: {
        value: string;
    };
    password: {
        value: string;
    };
}

const Login = () => {
    const [a, setA] = useState('a');
    const [error, setError] =
        useState<string | null>(null);
    const navigate = useNavigate(); // Use useNavigate hook
    const dispatch = useDispatch<AppDispatch>();
    const jwt = useSelector((s: RootStore) => s.user.jwt);
    const onFormSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const target = e.target as typeof e.target & LoginFormType;
        const {email, password} = target;
        await sendLogin(email.value, password.value);
    };
    useEffect(() => {
        if(jwt){navigate('/');}
    }, [jwt]);
    const sendLogin = async (email: string, password: string) => {
        dispatch(login({email, password}));
    };
  const onButtonClick = (a:string) => () => {
      console.log(a);
  };

    return (
        <div className={s.login}>
            <Headling>Вход</Headling>
            <form className={s.form} onSubmit={onFormSubmit} name="form">
                <div className={s.field}>
                    <label htmlFor="email"></label>
                    <Input id="email" name="email" placeholder="Email..."/>
                </div>
                <div className={s.field}>
                    <label htmlFor="password"></label>
                    <Input id="password" name="password" placeholder="Password..." type="password"/>
                </div>
                {error && <div className={s.error}>{error}</div>}
                <Button appearance="big" onClick={onButtonClick(a)}>Вход</Button>
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