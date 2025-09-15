function Blog(){
  
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

export default 