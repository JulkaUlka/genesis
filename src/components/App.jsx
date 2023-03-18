import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Header } from './Header/Header';
import { Loader } from 'components/Loader/Loader';

const LazyHome = lazy(() => import('../pages/Home/Home'));
const LazyMovieDetails = lazy(() =>
  import('../pages/CourseDetails/CourseDetails')
);


export const App = () => {
  return (
    <div>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<LazyHome />} />
            <Route path="/courses/:coursesId/*" element={<LazyMovieDetails />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </Suspense>
    </div>
  );
};
