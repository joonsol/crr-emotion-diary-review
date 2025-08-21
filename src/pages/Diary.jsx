import React, { useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Button from '../components/Button'
import Viewer from '../components/Viewer'
import useDiary from '../hook/useDiary'
import { getStringDate } from '../util/getStringDate'
const Diary = () => {
  const params = useParams()
  const nav = useNavigate()
  const curDiaryItem = useDiary(params.id)
  
  if (!curDiaryItem) {
    return <div>데이터 로딩중...!</div>
  }
  const { createdDate, emotionId, content } = curDiaryItem
  const title = getStringDate(new Date(createdDate))
  return (
    <div>
      <Header
        leftChild={<Button
          onClick={() => nav(-1)}
          text={"< 뒤로 가기"} />}
        title={title}
        rightChild={<Button
          onClick={() => nav(`/edit/${id}`)}
          text={"수정하기"} />}
      />
      <Viewer emotionId={emotionId} content={content} />
    </div>
  )
}

export default Diary