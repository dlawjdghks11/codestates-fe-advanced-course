import styled from "styled-components";

function Pagination({ total, page, setPage }) {
  const numPages = Math.ceil(total / 10);

  return (
    <>
      <Nav>
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt; 이전
        </Button>
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <Button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? "page" : null}
            >
              {i + 1}
            </Button>
          ))}
        <Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
          다음 &gt;
        </Button>
      </Nav>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;

const Button = styled.button`
  border: none;
  border-radius: 2px;
  padding: 8px;
  margin: 0;
  font-size: 1rem;

  &:hover {
    background: rgba(232, 232, 232, 1);
    cursor: pointer;
  }

  &[disabled] {
    background: rgba(232, 232, 232, 1);
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: rgba(232, 232, 232, 1);
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

export default Pagination;