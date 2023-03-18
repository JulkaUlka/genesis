import React from 'react';
import { useState, useEffect } from 'react';
import { CoursesAPI } from 'components/helpers/api';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { Block, InfoBlock, Button, List } from './CourseDetails.styled';
import PropTypes from 'prop-types';
import { VideoJS } from 'components/Video/Video';

const coursesAPI = new CoursesAPI();

function getLessonKey(coursesId) {
  return `lesson-${coursesId}`;
}

function getCurrentTimeKey(coursesId, lessonIndex) {
  return `lesson-${coursesId}-time-${lessonIndex}`;
}

function CourseDetails() {
  const { coursesId } = useParams();
  const [course, setCourse] = useState({});
  const [error, setError] = useState('');
  const [currentLesson, setCurrentLesson] = useState(0);

  useEffect(() => {
    const getCourse = async () => {
      try {
        const { data } = await coursesAPI.getCourseInfo(coursesId);
        setCourse(data);
      } catch (error) {
        setError(error.message);
      }
    };
    getCourse();
  }, [coursesId]);

  useEffect(() => {
    const currentLessonIndex = localStorage.getItem(getLessonKey(coursesId));
    if (currentLessonIndex !== null) {
      setCurrentLesson(parseInt(currentLessonIndex));
    }
  }, [coursesId]);

  const { lessons, title, description } = course;

  const handleLessonClick = index => {
    setCurrentLesson(index);
    localStorage.setItem(getLessonKey(coursesId), index);
    localStorage.setItem(getCurrentTimeKey(coursesId, index), 0);
  };

  const playerRef = React.useRef(null);

  const handlePlayerReady = player => {
    playerRef.current = player;

    player.on('timeupdate', () => {
      const currentTime = player.currentTime();
      localStorage.setItem(
        getCurrentTimeKey(coursesId, currentLesson),
        currentTime
      );
    });

    const currentTime = localStorage.getItem(
      getCurrentTimeKey(coursesId, currentLesson)
    );
    if (currentTime !== null) {
      player.currentTime(parseInt(currentTime));
    }
  };

  if (!lessons) {
    return <Loader />;
  }

  const currentLessonSrc = lessons[currentLesson].link;
  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: currentLessonSrc,
        type: 'application/x-mpegURL',
      },
    ],
  };

  return (
    <>
      <Block>
        <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />

        <InfoBlock>
          <h1>{title}</h1>
          <p>{description} %</p>
          <h3>Lessons: </h3>
          <List>
            {lessons.map(({ id, order, title, status }, index) => (
              <li key={id}>
                <Button
                  type="button"
                  className={currentLesson === index ? 'active' : ''}
                  onClick={() => handleLessonClick(index)}
                  disabled={status === 'locked'}
                >
                  <p>
                    Lesson {order}: {title}{' '}
                  </p>
                </Button>
              </li>
            ))}
          </List>
        </InfoBlock>
      </Block>
      {error && <p>Error{error}</p>}
    </>
  );
}

CourseDetails.propTypes = {
  coursesId: PropTypes.string,
};

export default CourseDetails;
