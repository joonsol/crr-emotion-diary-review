import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { DiaryStateContext } from '../App'
const useDiary = (id) => {
    const data = useContext(DiaryStateContext)
    const [curDiaryItem, setCurDiaryItem] = useState(null)
    const nav = useNavigate()

    useEffect(() => {

        const currentDiaryItem = data.find(
            (item) => String(item.id) === String(id))
        if (!currentDiaryItem) {
            window.alert("존재하지 않는 일기 입니다.")
            nav("/", {
                replace: true
            })
        } else {
            setCurDiaryItem(currentDiaryItem);
        }

    }, [id, data, nav])
    return curDiaryItem;



}

export default useDiary