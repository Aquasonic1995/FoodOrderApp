import {Outlet} from "react-router-dom";
import styles from "./LayoutAuth.module.scss";

const LayoutAuth = () => {
    return <div className={styles['layout']}>
        <div className={styles['logo']}>
            <img src="/logo.svg" alt="Логотип компании" />
        </div>
        <div className={styles['content']}>
            <Outlet />
        </div>
    </div>;
};

export default LayoutAuth;