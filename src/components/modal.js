import styled from "styled-components";
import {useState} from "react";

const ModalBackdrop = styled.div`
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,0.4);
    display: grid;
    place-items: center;
    overflow-y: auto;
`;

const BackgroundContainer = styled.div`
    width: 700px;
    height: 700px;
    margin-top: 50px;
    background-color: #ffffff;
    border: 1px solid black;
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;
`;

const TitleContainer = styled.div`
    width: 600px;
    height: 80px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    font-weight: bold;
`;

const WriterContainer = styled.div`
    width: 600px;
    height: 20px;
    margin-left: auto;
    margin-right: auto;
    text-align: right;
    font-size: 15px;
`;

const BodyContainer = styled.div`
    width: 600px;
    height: 110px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
`;

const TextContainer = styled.span`
    &:hover{
        cursor: pointer;
    }
`;

const CommentsContainer = styled.div`
    width: 600px;
    height: 80px;
    margin-left: auto;
    margin-right: auto;
`;

const TextContainer2 = styled.span`
    font-weight: bold;
`;

const TextContainer3 = styled.span`
    font-weight: lighter;
`;

const BoundaryLine = styled.h1`
    font-size: 20px;
    text-align: center;
    border-bottom:1px solid rgba(232, 232, 232, 1);
`;

function Modal({openModalHandler, postInfo}){
  const [isOn, setisOn] = useState(true);

  const toggleHandler = () => {
    setisOn(!isOn);
  };
    return (
      <>
        <ModalBackdrop onClick={openModalHandler}>
          <BackgroundContainer onClick={(e) => e.stopPropagation()}>
            <TitleContainer>{postInfo.title}</TitleContainer>
            <WriterContainer>작성자{postInfo.userId}</WriterContainer>
            <BoundaryLine />
            <BodyContainer>{postInfo.body}</BodyContainer>
            <WriterContainer>
              <TextContainer onClick={toggleHandler}>댓글{postInfo.comments.length}개</TextContainer>
            </WriterContainer>
            <BoundaryLine />
            {isOn ? postInfo.comments.map(({id, name, body}) => {
              return (
                <CommentsContainer key={id}>
                  <TextContainer2>{name}</TextContainer2><br/>
                  <TextContainer3>{body}</TextContainer3>
                </CommentsContainer>
                )
            }) : null}
          </BackgroundContainer>
        </ModalBackdrop>
      </>
    )
};

export default Modal;