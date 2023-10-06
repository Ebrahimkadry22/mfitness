
import { Outlet } from 'react-router'
import Hero from '../Components/Hero/Hero'
import Offer from '../Components/Offer/Offer'
import SectionCourses from '../Components/SectionCourses/SectionCourses'

function Home() {
  return (
    <>
    <Hero />
    <SectionCourses title={'OUR COURSES'} />
    <Offer />
    </>
  )
}

export default Home
