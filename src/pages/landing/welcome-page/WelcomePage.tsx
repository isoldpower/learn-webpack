import {FC} from "react";
import classes from './WelcomePage.module.scss';
import {cutePreview} from "@/pages/landing/welcome-page/assets";

interface WelcomePageProps {
}

const WelcomePage: FC<WelcomePageProps> = ({}: WelcomePageProps) => {
    return (
        <div className={`${classes.welcomePage__wrapper}`}>
            <div className={`${classes.welcomePage__content}`}>
                <p className={`${classes.welcomePage__text}`}>Everything is working</p>
                <img className={`${classes.welcomePage__image}`} src={cutePreview} alt='cartoony image of a deer standing on a pixel island and shaking its tail' />
                <p className={`${classes.welcomePage__imageCredentials}`}>image taken from giphy.com</p>
            </div>
        </div>
    );
};

export default WelcomePage;