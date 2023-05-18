import { useState } from "react"


export const useDragAndDrop = (initialState, tariffdata) => {
    const [isDragging, setIsDragging] = useState(false)
    const [listItems, setListItems] = useState(initialState);
    const arr = { normal: [], bad: [] }
    const handleUpdateList = (id, status) => {

        let card = listItems.find(item => item.id === id)
        console.log('setListItems', listItems)
        if (card && card.status !== status) {

            card.status = status

            setListItems(prev => ([
                card,
                ...prev.filter(item => item.id !== id)
            ]));
            listItems.map((item) => {
                if (item.status !== 'good') {
                    arr[item.status].push(item.id)
                }
            });
            tariffdata(arr)
        }
    }
    const handleDragging = (dragging) => setIsDragging(dragging);
    return {
        isDragging,
        listItems,
        handleUpdateList,
        handleDragging,
    }
}