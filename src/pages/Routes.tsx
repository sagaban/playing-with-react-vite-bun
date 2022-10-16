import { Route, Routes } from 'react-router-dom';
import Page from 'pages/Page';
import MemoRerendering from 'pages/MemoRerendering';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Page />} />
      <Route path="/memo-rerendering" element={<MemoRerendering />} />
    </Routes>
  );
};
