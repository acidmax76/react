import styles from './not-found.module.css';

export const NotFoundPage =() =>{
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.main}>
                    <div className={"text text_type_main-large"}>
                        Страница не найдена
                    </div>
                    <div className={"text text_type_main-medium text_color_inactive"}>
                        Ошибка 404
                    </div>
                </div>
            </div>
        </div>
    );
}