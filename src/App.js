import './App.css';
import Main from './pages/main';
import Header from './components/header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

const BoundaryLine = styled.h1`
    font-size: 20px;
    text-align: center;
    border-bottom:1px solid gray;
`;

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <BoundaryLine />
        <Routes>
          <Route path="/" element={<Main />}/>
          {/* <Route path="/post" element={<DetailPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
