import s from './Menu.module.scss';
import {v1} from "uuid";
import Search from "../../Components/Search/Search.tsx";
import Headling from "../../Components/Headling/Headling.tsx";
import Card from "../../Components/Card/Card.tsx";

const Menu = () => {
    return (<>
        <div className={s.head}  >
            <Headling >Меню</Headling>
            <Search placeholder='Поиск по меню...' />
        </div>
    <Card id={v1()} title={"Еда"} description={"Вкусная еда"} image={"./product-demo.png"} price={300} rating={5}/>
        </>
    );
};

export default Menu;