import Modal from "../components/modal";

function DetailPage({openModalHandler, posts}){
    return (
        <>
            <Modal openModalHandler={openModalHandler} posts={posts}/>
        </>
    )
};

export default DetailPage;