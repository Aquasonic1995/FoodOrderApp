import s from './Layout.module.scss';
import {Link, Outlet} from "react-router-dom";
import Button from "../Components/Button/Button.tsx";

const Layout = () => {
    return <div className={s['layout']}>
        <div className={s['sidebar']}>
            <div className={s['user']}>
                <img className={s['avatar']} src="/avatar.png" alt="Аватар пользователя" />
                <div className={s['name']}>Антон Ларичев</div>
                <div className={s['email']}>alari@ya.ru</div>
            </div>
            <div className={s['menu']}>
                <Link to='/' className={s['link']}>
                    <img src="/menu-icon.svg" alt="Иконка меню" />
                    Меню</Link>
                <Link to='/cart' className={s['link']}>
                    <img src="/cart-icon.svg" alt="Иконка корзины" />Корзина</Link>
            </div>
            <Button className={s['exit']}>
                <img src="/exit-icon.svg" alt="Иконка выхода" />
                Выход
            </Button>
        </div>
        <div>
            <Outlet />
        </div>
    </div>;
};

export default Layout;