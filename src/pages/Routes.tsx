import { Route, Routes } from 'react-router-dom';
import MainPage from 'pages/MainPage';
import MemoRerendering from 'pages/MemoRerendering';
import PropsChange from './PropsChange';
import { MovingStateDown } from './MovingStateDown';
import { ChildrenAsProps } from './ChildrenAsProps';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/memo-rerendering" element={<MemoRerendering />} />
      <Route path="/props-change" element={<PropsChange />} />
      <Route path="/moving-state-down" element={<MovingStateDown />} />
      <Route path="/children-as-props" element={<ChildrenAsProps />} />
    </Routes>
  );
};
