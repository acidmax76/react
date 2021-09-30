import styles from './ConstructorIngredient.module.css'
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {useRef} from "react";
import {useDrag, useDrop} from "react-dnd";

export function ConstructorIngredient(props) {
    const {index, moveCard, item, deleteCard} = props;
    const {name, image_mobile, price, key} = item;
    const ref = useRef();
    const [isDragging, constructorRef] = useDrag({
        type: "constructor",
        item: () => {
            return {key, index};
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });
    const [{handlerId}, constructorDropTarget] = useDrop({
        accept: "constructor",
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            };
        },
        hover(item, monitor) {
            if (!ref.current) {
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;
            if (dragIndex === hoverIndex) {
                return;
            }
            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            moveCard(dragIndex, hoverIndex);
            item.index = hoverIndex;
        }
    });
    const opacity = isDragging ? styles.opacity__off : styles.opacity__on;
    constructorRef(constructorDropTarget(ref));
    return (
        <li ref={ref} className={styles.constructor__item + " " + opacity + " constructor-element__row mb-2"}
            data-handler-id={handlerId}>
            <div className={styles.constructor__drag + " mr-2"}>
                <DragIcon type={"primary"}/>
            </div>
            <ConstructorElement text={name} thumbnail={image_mobile}
                                price={price}
                                isLocked={false}
                                handleClose={deleteCard}
            />
        </li>
    );
}