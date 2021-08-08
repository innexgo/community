import Section from '../components/Section';
import Carousel, { CarouselImage } from '../components/Carousel';

type StoryProps = {
  title: string,
  blurb: string,
  students?: string[],
  date: string,
  images?: CarouselImage[],
}

const Story = (props: StoryProps) => <>
  {
    props.images === undefined ? false :
      <Carousel images={props.images} />
  }
  <Section id="story" name={props.title}>
    <p>{props.blurb}</p>
    <h5>Date</h5>
    <p>{props.date}</p>
    {
      props.students === undefined ? false :
        <>
          <h5>Students</h5>
          <p>{props.students.join(", ")}</p>
        </>
    }
  </Section>
</>

export default Story
