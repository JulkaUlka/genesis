import { useState, useEffect } from 'react';
import { CoursesAPI } from 'components/helpers/api';
import PropTypes from 'prop-types';
import { CoursesList } from 'components/CoursesList/CoursesList';
import { Loader } from 'components/Loader/Loader';
import { CourseList, Title, Pagination, PageNumber } from './Home.styled';

const coursesAPI = new CoursesAPI();

function Home() {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage] = useState(10);

  useEffect(() => {
    const getLearningCourses = async () => {
      try {
        const { data } = await coursesAPI.getCourses();

        setCourses(data.courses);
      } catch (error) {
        setError(error.message);
      }
    };
    getLearningCourses();
  }, []);

  const totalPages = Math.ceil(courses.length / coursesPerPage);

  const handleClick = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const coursesToDisplay = courses.slice(
    (currentPage - 1) * coursesPerPage,
    currentPage * coursesPerPage
  );

  return (
    <>
      {courses.length ? (
        <>
          <Title>Our courses:</Title>
          <CourseList>
            {coursesToDisplay.map(course => {
              return <CoursesList {...course} key={course.id} />;
            })}
          </CourseList>

          <Pagination>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              pageNumber => (
                <PageNumber
                  key={pageNumber}
                  onClick={() => handleClick(pageNumber)}
                  isActive={currentPage === pageNumber}
                  className={currentPage === pageNumber ? 'active' : ''}
                >
                  {pageNumber}
                </PageNumber>
              )
            )}
          </Pagination>
        </>
      ) : (
        <Loader />
      )}
      {error && <p>Error{error}</p>}
    </>
  );
}

Home.propTypes = {
  courses: PropTypes.array,
};

export default Home;
