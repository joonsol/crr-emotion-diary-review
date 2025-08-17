import { getEmotionImage } from "../util/getEmotionImage";
import Button from "./Button";
import "./DiaryItem.css";

const DiaryItem = () => {
  const emotionId = 5; // 감정 ID (예시로 5를 설정)

  return (
    <div className="DiaryItem">
      <div className={`img_section img_section_${emotionId}`}>
        <img src={getEmotionImage(emotionId)} alt="Emotion Icon" />
      </div>
      <div className="info_section">
        <div className="created_date">
          {new Date().toLocaleDateString()} {/* 현재 날짜 표시 */}
        </div>
        <div className="content">일기 컨텐츠</div> {/* 일기 내용 요약 */}
      </div>
      <div className="button_section">
        <Button text={"수정하기"} /> {/* "수정하기" 버튼 */}
      </div>
    </div>
  );
};

export default DiaryItem;
