import {Route} from "react-router-dom";
import {Modal} from "../../components/Modal/Modal";
import {IngredientPage} from "../ingredient/ingredient";
import {FC} from "react";
import {IModalPage} from "../../serivice/interfaces/IModalPage";
import {OrderSummary} from "../../components/ClientOrderSummary";

export const ModalPage: FC<IModalPage> = ({location, history}) => {
    const type = location.state.type;
    return (
            type ?
                    type === "ingredient" ?
                            <Route path={"/ingredients/:id"}
                                   children={
                                       <Modal header={'Детали ингредиента'} onClose={() => {
                                           history.goBack()
                                       }}>
                                           <IngredientPage modal={true}/>
                                       </Modal>
                                   }
                            />
                            : type === "order" ?
                                    <Route path={"/feed/:id"}
                                           children={
                                               <Modal header={'Детали заказа'} onClose={() => {
                                                   history.goBack()
                                               }}>
                                                   <OrderSummary modal={true}/>
                                               </Modal>
                                           }
                                    /> :
                                    <Route path={"/profile/orders/:id"}
                                           children={
                                               <Modal header={'Детали приватного заказа'} onClose={() => {
                                                   history.goBack()
                                               }}>
                                                   <OrderSummary modal={true}/>
                                               </Modal>
                                           }
                                    />
                    :
                    <div />

    )
}