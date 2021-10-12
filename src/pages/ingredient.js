import styles from "./ingredient.module.css";

export const IngredientPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.main}>
                    <div className={styles.header + " text text_type_main-large"}>Детали ингредиента</div>
                    <div className={styles.image}>
                        <img src="https://code.s3.yandex.net/react/code/bun-02-large.png" alt="Краторная булка N-200i" />
                    </div>
                    <div className={styles.description}>
                        Биокотлета из марсианской говядины
                    </div>
                    <div className={styles.digits}>
                            <div className={styles.item}>
                                <div> Калории, ккал</div>
                                <div className={"mt-2 text text_type_digits-default"}>244,4</div>
                            </div>
                        <div className={styles.item}>
                            <div> Белки, г</div>
                            <div className={"mt-2 text text_type_digits-default"}>20</div>
                        </div>
                        <div className={styles.item}>
                            <div> Жиры, г</div>
                            <div className={"mt-2 text text_type_digits-default"}>15</div>
                        </div>
                        <div className={styles.item}>
                            <div> Углеводы, г</div>
                            <div className={"mt-2 text text_type_digits-default"}>23</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}