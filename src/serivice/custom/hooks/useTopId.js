import {useRef,useState,useCallback} from "react";

export const useTopId = () => {
    const listRef = useRef();
    const items = useRef({});
    const [topId, setTopId] = useState('');

    const itemsRef = useCallback((el) => {
        if (el) items.current[el.id] = el;
    }, [items])

    const onScroll = useCallback(() => {
        const listTop = listRef.current.getBoundingClientRect().top;
        console.log(items.current);
        let id = '';
        let minDiff = Number.MAX_VALUE;
        for (let item in items.current) {
            const diff = Math.abs(items.current[item].getBoundingClientRect().top - listTop);
            if (diff >= 0 && minDiff > diff) {
                minDiff = diff;
                id = items.current[item].id;
            }
        }
        if (id && id !== topId) setTopId(id);
    }, [topId])

    return {listRef, itemsRef, onScroll, topId}
}