import { MovieItem, LinkStyled, Image, Title } from './CoursesList.styled';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export function CoursesList({
  id,
  title,
  previewImageLink,
  rating,
  lessonsCount,
  meta: { skills },
}) {
  const location = useLocation();
  return (
    <MovieItem key={id}>
      <LinkStyled to={`/courses/${id}`} state={{ from: location }}>
        <Title>{title}</Title>
        <Image src={previewImageLink + '/cover.webp'} alt={title} />
      </LinkStyled>
      <p>Rating: {rating}</p>
      <p>Lessons: {lessonsCount} </p>
      {skills && (
        <p>
          Skills: {skills.map(skill => skill.trim().toLowerCase()).join(', ')}{' '}
        </p>
      )}
    </MovieItem>
  );
}

CoursesList.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  previewImageLink: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  lessonsCount: PropTypes.number.isRequired,
  meta: PropTypes.shape({
    skills: PropTypes.arrayOf(PropTypes.string),
  }),
};

