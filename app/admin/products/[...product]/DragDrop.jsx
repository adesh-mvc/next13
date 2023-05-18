"use client";
import { useState } from "react";
import { useDragAndDrop } from "./useDragAndDrop";
const Status = ['good', 'normal', 'bad']
// const data = [
//     {
//         id: 1,
//         content: 'Aqua-man',
//         status: 'good'
//     },
//     {
//         id: 2,
//         content: 'Flash',
//         status: 'good'
//     },
//     {
//         id: 3,
//         content: 'Green Lantern',
//         status: 'good'
//     },
//     {
//         id: 4,
//         content: 'Batman',
//         status: 'good'
//     },
//     {
//         id: 5,
//         content: 'Cricketer',
//         status: 'good'
//     },
// ]
export const CardItem = ({ data, handleDragging }) => {
    const handleDragStart = (e) => {
        e.dataTransfer.setData('text', `${data.id}`)
        handleDragging(true)
    }
    const handleDragEnd = () => handleDragging(false)

    return (
        <div className='card-container'
            draggable
            onDragEnd={handleDragEnd}
            onDragStart={handleDragStart}
        >
            <p>{data.content}</p>
        </div>
    )
}
export const ContainerCards = ({ status, items, isDragging, handleDragging, handleUpdateList }) => {

    const handleDrop = (e) => {
        e.preventDefault();
        handleUpdateList(+e.dataTransfer.getData('text'), status);
        //  console.log([status][+e.dataTransfer.getData('text')])
        // setTarif([status][])
        handleDragging(false)
    }

    const handleDragOver = (e) => e.preventDefault()
    return (
        <div
            className={`layout-cards ${isDragging ? 'layout-dragging' : ''}`}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
            <p>{status} hero</p>
            {/* Cards */}
            {
                items.map(item => (
                    status === item.status
                    && <CardItem
                        data={item}
                        key={item.id}
                        handleDragging={handleDragging}
                    // statusItems={(status)=>set}
                    />
                ))
            }
        </div>
    )
}
const DragDrop = ({ data, mytariff }) => {


    const { isDragging, listItems, handleDragging, handleUpdateList } = useDragAndDrop(data, mytariff);
    // console.log('listItems:', mytariff(listItems))

    return (<>
        <div className="grid">
            {
                Status.map(container => (
                    <ContainerCards
                        status={container}
                        key={container}
                        items={listItems}
                        isDragging={isDragging}
                        handleDragging={handleDragging}
                        handleUpdateList={handleUpdateList}
                        setTarif={mytariff}

                    />
                ))
            }
        </div>
    </>)
};

export default DragDrop;