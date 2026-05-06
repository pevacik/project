import { Link, NavLink } from 'react-router';
import styles from './header.module.css'
import moment from 'moment';
import 'moment/dist/locale/ru';
import { useContext, useState } from 'react';
import { PopupContext } from '../../context/PopupContext';

function Header() {
    moment.locale('ru');

    const { date, setDate } = useContext(PopupContext)
    const isActive = ({ isActive }) => {
        return isActive ? styles.menu_link + ' ' + styles.active : styles.menu_link
    }

    const dateClick = () => {
        const now = moment().format('LL');
        setDate(now)

        console.log("Сегодня: " + date);


    }

    return (
        <header className={styles.header}>
            <div className="container MainHeaders">
                <ul className={styles.headersList}>
                    <li><NavLink className={isActive} to="/home">Главная</NavLink></li>
                    <li><NavLink className={isActive} to="/language">Язык програмирования</NavLink></li>
                    <li><NavLink className={isActive} to="/raiting">Рейтинг</NavLink></li>
                    <li><NavLink className={isActive} to="/pesochnica">Песочница</NavLink></li>
                    <li><button onClick={dateClick} >Узнать текущую дату</button></li>

                </ul>
            </div>
        </header>
    )
}

export default Header;
