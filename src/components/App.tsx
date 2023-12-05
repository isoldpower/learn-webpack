import classes from '@/components/App.module.scss';
import {Outlet} from 'react-router-dom';
import Counter from "@/components/counter/Counter";
import NavBar from "@/components/NavBar/NavBar";

export const App = () => {

    return (
        <div>
            <NavBar />
            <div className={classes.content}>
                <Outlet />
            </div>
            <Counter />
        </div>
    );
};