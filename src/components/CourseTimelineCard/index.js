// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'

import {
  CourseTitleAndDurationContainer,
  CourseTitle,
  DurationContainer,
  Duration,
  CourseDecription,
  CourseTagsList,
  CourseTagItem,
  CourseTag,
} from './styledComponents'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <>
      <CourseTitleAndDurationContainer>
        <CourseTitle>{courseTitle}</CourseTitle>
        <DurationContainer>
          <AiFillClockCircle color="#171f46" />
          <Duration>{duration}</Duration>
        </DurationContainer>
      </CourseTitleAndDurationContainer>
      <CourseDecription>{description}</CourseDecription>
      <CourseTagsList>
        {tagsList.map(eachTag => (
          <CourseTagItem key={eachTag.id}>
            <CourseTag>{eachTag.name}</CourseTag>
          </CourseTagItem>
        ))}
      </CourseTagsList>
    </>
  )
}

export default CourseTimelineCard
