import { Route, Routes } from 'react-router-dom';
import MainPage from 'pages/MainPage';
import MemoRerendering from 'pages/MemoRerendering';
import PropsChange from './PropsChange';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/memo-rerendering" element={<MemoRerendering />} />
      <Route path="/prop-change" element={<PropsChange />} />
    </Routes>
  );
};
