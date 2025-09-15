function Title({ index, titleText, dateText, like, setLike, handleTitle }) {
  return (
    <div>
      <h4 onClick={() => handleTitle(index)}>
        {titleText}
        <span
          onClick={(e) => {
            e.stopPropagation(); // 👍 클릭 시 모달 열리는 것 방지
            const newLikes = [...like];
            newLikes[index]++;
            setLike(newLikes);
          }}
        >
          👍
        </span>
        {like[index]}
      </h4>
      <p>작성일 : {dateText}</p>
    </div>
  )
}

export default Title
