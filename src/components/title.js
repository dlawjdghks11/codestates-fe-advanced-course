import styled from "styled-components";

const PostContainer = styled.ul`
    width: 760px;
    height: 50px;
    display: flex;
    margin: 0;
`;

const TitleContainer = styled.div`
    width: 640px;
    height: 50px;
    margin-left: -20px;
    display: flex;
    align-items: center;
`;

const WriterContainer = styled.div`
    width: 115px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const TextContainer = styled.span`
    &:hover{
        cursor: pointer;
        text-decoration:underline;
    }
`;


function Title({ id, title, userId, body, comments, setPostInfo, setIsOpen }){
    const postInfoHandler = () => {
        setPostInfo({
            id: id,
            title: title,
            userId: userId,
            body: body,
            comments: comments,
        })
        setIsOpen(true)
    }
    return (
        <PostContainer>
            <TitleContainer>
                <TextContainer onClick={postInfoHandler}>{title}</TextContainer>
            </TitleContainer>
            <WriterContainer>{`작성자${userId}`}</WriterContainer>
        </PostContainer>
    );
};

export default Title;