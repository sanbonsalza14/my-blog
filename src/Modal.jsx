function Modal(props) {
  return (
    <div className='modal'
    style={{background: props.corlor}}>
      {/* 상세페이지용 모달창 만들기 */}
      <h4> {props.title}[props]</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default Modal;