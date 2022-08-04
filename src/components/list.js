import Title from "./title";
import styled from 'styled-components';

const BoundaryLine = styled.h1`
    font-size: 1px;
    text-align: center;
    border-bottom:1px solid rgba(232, 232, 232, 1);
`;

function List({posts = [], comments = [], offset, setIsOpen, setPostInfo}){
    let data = posts;

    for(let i = 0; i < comments.length; i+=5){
        data[Math.floor(i/5)].comments = comments.slice(i, i+5)
    }

    if (data.length === 0) {
        return <div>Loading...</div>
    }
    return data.slice(offset, offset + 10).map(({userId, id, title, body, comments}) => {
        return (
            <div key={id}>
                <Title 
                    key={id} 
                    id={id} 
                    userId={userId} 
                    title={title} 
                    body={body} 
                    comments={comments}
                    setPostInfo={setPostInfo}
                    setIsOpen={setIsOpen}
                />
                <BoundaryLine/>
            </div>
            )
    })
}

export default List;