import styles from './profile.module.css';
import React, {SyntheticEvent, useEffect, useState} from "react";
import {useDispatch,useSelector} from "../../serivice/types";
import {changeUserInfo, logoutUser, USER_CLOSE_ERROR} from "../../serivice/User/actions";
import {EditUser} from "../../components/EditUser/EditUser";
import {Modal} from "../../components/Modal/Modal";
import {Error} from "../../components/Error/Error";
import {getUser} from "../../serivice/User/selectors";
import {Link, useRouteMatch} from "react-router-dom";
import {OrdersList} from "../../components/ClientOrders";

export const ProfilePage = () => {
    const profileMatch = useRouteMatch({path: "/profile", strict: true, sensitive: true});
    const ordersMatch = useRouteMatch({path: "/profile/orders", strict: true, sensitive: true});
    const exitMatch = useRouteMatch({path: "/profile/exit", strict: true, sensitive: true});
    const userState = useSelector(getUser);
    const [state, setState] = useState({name: "", email: "", password: ""});
    const dispatch = useDispatch();
    useEffect(() => {
        if ("name" in userState.user && "email" in userState.user && userState.user.name !== undefined && userState.user.email !== undefined) {
            setState({
                name: userState.user.name,
                email: userState.user.email,
                password: ""
            });
        }
    }, [userState]);
    const handleCancel = (event: SyntheticEvent<Element,Event>) => {
        event.preventDefault();
        if ("name" in userState.user && "email" in userState.user) {
            setState({
                name: userState.user.name,
                email: userState.user.email,
                password: ""
            });
        }
    };
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(changeUserInfo(state));
    }
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setState({
                ...state,
                [event.target.name]: event.target.value
            }
        )
    }
    const handleCloseModal = () => {
        dispatch({
            type: USER_CLOSE_ERROR
        });
    }
    if (exitMatch?.isExact){
        dispatch(logoutUser());
    }
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.main}>
                    <div className={styles.left}>
                        <Link to={"/profile"} className={profileMatch?.isExact ? styles.menu : styles.menu + " text_color_inactive"}>
                            ??????????????
                        </Link>
                        <Link to={"/profile/orders"} className={ordersMatch?.isExact ? styles.menu : styles.menu + " text_color_inactive"}>
                            ?????????????? ??????????????
                        </Link>
                        <Link to={"/profile/exit"} className={exitMatch?.isExact ? styles.menu : styles.menu + " text_color_inactive"}>
                            ??????????
                        </Link>
                        <div className={styles.description + " text_color_inactive"}>
                            ?? ???????? ?????????????? ???? ???????????? <br/>???????????????? ???????? ???????????????????????? ????????????
                        </div>
                    </div>
                    <div className={styles.right}>
                        {profileMatch?.isExact ?
                            <EditUser name={state.name} password={state.password} email={state.email}
                                      handleSubmit={handleSubmit} handleChange={handleChange}
                                      handleCancel={handleCancel}/>
                            : ""}
                        {ordersMatch?.isExact ? <OrdersList /> : ""}
                    </div>
                </div>
            </div>
            {userState.errorMessage !== "" &&
            <Modal onClose={handleCloseModal}><Error message={userState.errorMessage}/> </Modal>}
        </div>
    );
}