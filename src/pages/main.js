import styled from "styled-components";
import postData from "../api/postDataApi";
import commentsData from "../api/commentsDataApi";
import { useEffect, useState } from 'react';
import List from "../components/list";
import Modal from "../components/modal";
import Pagination from "../components/pagination";

const Container = styled.div`
    width: 800px;
    height: 650px;
    margin-left: auto;
    margin-right: auto;
`;

function Main(){
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * 10;
    const [postInfo, setPostInfo] = useState({
        id: 0,
        title: '',
        userId: 0,
        body: '',
        comments: [],
    })
    const openModalHandler = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        postData()
        .then(post => {
            setPosts(post)
        })
    }, [])
    useEffect(() => {
        commentsData()
        .then(comments => {
            setComments(comments)
        })
    }, [])
    console.log(postInfo)
    return (
        <>
            {!isOpen
            ?<Container>
                <List posts={posts} comments={comments} offset={offset} setIsOpen={setIsOpen} setPostInfo={setPostInfo}/>
                <Pagination total={posts.length} page={page} setPage={setPage} />
            </Container>
            : <Modal openModalHandler={openModalHandler} postInfo={postInfo}/>}
        </>
    );
}

export default Main;