import s from './LayoutMenu.module.scss';
import {NavLink, Outlet, useNavigate} from "react-router-dom";
import Button from "../../Components/Button/Button.tsx";
import cn from "clsx";
import {useDispatch} from "react-redux";
import {userActions} from "../../store/user.slice.ts";
import {AppDispatch} from "../../store/store.ts";

const LayoutMenu = () => {
 const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const onExitClick = ()=>{
          dispatch(userActions.logout());
        navigate('./auth/login/');
    };
    return <div className={s['layout']}>
        <div className={s['sidebar']}>
            <div className={s['user']}>
                <img className={s['avatar']} src="/avatar.png" alt="Аватар пользователя"/>
                <div className={s['name']}>Антон Ларичев</div>
                <div className={s['email']}>alari@ya.ru</div>
            </div>
            <div className={s['menu']}>
                <NavLink to='/' className={ ({isActive})=>cn(s['link'],{[s.active]:isActive})}>
                    <img src="/menu-icon.svg" alt="Иконка меню"/>
                    Меню
                </NavLink>
                <NavLink to='/cart' className={ ({isActive})=>cn(s['link'],{[s.active]:isActive})}>
                    <img src="/cart-icon.svg" alt="Иконка корзины"/>Корзина
                </NavLink>
            </div>
            <Button className={s['exit']} onClick={onExitClick}>
                <img src="/exit-icon.svg" alt="Иконка выхода"/>
                Выход
            </Button>
        </div>
        <div className={s.content}>
            <Outlet/>
        </div>
    </div>;
};

export default LayoutMenu;