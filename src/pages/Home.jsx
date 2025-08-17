import React from 'react'
import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";

const Home = () => {
  return (
    <div>
      <Header
        title={"2024.10"}                      // 현재 연도와 월을 표시
        leftChild={<Button text={"<"} />}       // 왼쪽 버튼 ("<")
        rightChild={<Button text={">"} />}      // 오른쪽 버튼 (">")
      />
      <DiaryList />                            
    </div>
  )
}

export default Home