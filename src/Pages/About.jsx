import SectionAbout from "../Components/SectionAbout/SectionAbout"
import SectionCourses from './../Components/SectionCourses/SectionCourses';
import data from '../../src/Components/Data/Data.json'

function About() {
  return (
    <>
      <SectionAbout />
      <SectionCourses title={'OUR FITNESS COACHES'} data={data}/>
    </>
  )
}

export default About
