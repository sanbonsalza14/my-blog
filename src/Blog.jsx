import { useState } from "react";

function Blog(props){
  // 타이틀 저장 용 스테이트 선언
  const [newTitle, setNewTitle] = useState('')
  // 내용 저장 용 스테이트 선언
  const [newContent, setNewContent] = useState('')

  // 제목 클릭 시 모달 보이기
  function handleTitle(index){
    // 조건 : 같은 제목을 클릭하면 나타나고 사라짐
    // 다른 제목을 클릭하면 그냥 보여야 하고..
    if(! props.modal) {
      //1. 현재 모달이 닫혀있으면 연다.
      props.setModal(true);
      props.setCurrentIndex(index);
    } else if(props.currentIndex === index){
      // 2. 같은 타이틀이 선택된 경우
      props.setModal(false);
    } else {
      props.setCurrentIndex(index);
    }
  } 

  // 오늘 날짜를 생성해 주는 함수
  function getCurrentDate(){
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const day = String(today.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }


  // 글 등록 함수 만들기
  function addPost(){
    // 두 개의 입력상자가 비어있는지 확인
    if(newTitle.trim() === ''){
      alert('제목이 비어있어요')
      return
    }

    if(newContent.trim() === ''){
      alert('내용이 비어있어요')
      return
    }
    // 타이틀과 내용을 각 배열에 추가
    props.setTitle([newTitle, ...props.title])
    props.setDetails([newContent, ...props.details])

    // 오늘 날짜 생성 후 날짜 배열에도 추가
    props.setCreateDate([getCurrentDate(), ...props.createDate])

    // 좋아요 배열에도 추가
    props.setLike([0, ...props.like])

    setNewTitle('')
    setNewContent('')
  }
  //게시글 삭제 처리 함수
  function deletePost(index){
    //전달 된 색인값을 제외한 배열을 생성
    //제목
    const newTitles = props.title.filter((_, i)=> i !== index);

    const newContents = props.datails.filter((_, i)=> i  == index);

    const newDate = props.createDate.filter((_, i)=> i !== index);

    const newLikes = props.like.filter((_, i)=> i !== index);

    //부모 스테이트 
    props.setTitle(newIitles);
    props.setNewContent(newContent);
    props.setCreateDate(newcreate);
    props.setLike(newLikes);

  }
    return(
    <>
    {/* 타이틀 정렬하기 */}
      <button onClick={()=>{
        const sortedTitle = [...title].sort()
        setTitle(sortedTitle);
      }}>글 정렬하기</button>

      <div className='list'>
        {title.map((item, index)=>{
          return(
            <div key={index}>
              <h4 onClick={()=> handleTitle(index)}>
                    {title[index]}
                <span onClick={()=>{
                  const newLikes = [... like]
                  newLikes[index]++
                  setLike(newLikes)
                  }}>👍
                </span>{like[index]} 
              </h4>      
              <p>작성일 : {createDate[index]}</p>
            </div>  
          )
        })}
      </div>
    </>
  )
}

export default Blog;