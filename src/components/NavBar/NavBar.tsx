import React from 'react';
import classes from '@/components/NavBar/NavBar.module.scss';
import {Link} from "react-router-dom";
import avatarPng from "@/assets/avatar.png";
import Calendar from "@/assets/calendar.svg";

const NavBar = () => {
    return (
        <div className={classes.wrapper} data-testid={'navbar-wrapper'}>
            <div className={classes.content} data-testid={'navbar-content'}>
                <div className={classes.navigation} data-testid={'navbar-navigation'}>
                    <Link to={'/'}>
                        <img src={avatarPng} alt='avatar icon' style={{width: 64, height: 64}} />
                    </Link>
                    <Link to={'/about'} className={classes.link}>about</Link>
                    <Link to={'/shop'} className={classes.link}>shop</Link>
                </div>
                <div>
                    <Calendar fill={'red'} width={32} height={32}/>
                </div>
            </div>
        </div>
    );
};

export default NavBar;