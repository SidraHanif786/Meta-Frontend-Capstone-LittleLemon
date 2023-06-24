import React from 'react'
import Container from '../common/Container'
import CustomerCard from '../common/CustomerCard'
import devid from '../../images/devid.jpg'
import elizabth from '../../images/elizabet.jpg'
import sara from '../../images/sara.jpg'
import jhon from '../../images/jhon.jpg'

const Testimonials = () => {
    const data=[
        {
            img: devid,
            name: 'Devid Gordon' ,
            des: 'Visiting the restaurant was an absolute delight! I highly recommend trying their signature dish, it was bursting with flavors. A memorable dining experience indeed!'
        },
        {
            img: sara,
            name: 'Sara Stone' ,
            des: 'Their Bolognese pasta is a true delight! The rich meat sauce perfectly complements the al dente pasta, creating a mouthwatering experience that keeps me coming back for more.'
        },
        {
            img: elizabth,
            name: 'Elizabet Mathn' ,
            des: 'As a vegetarian, this restaurant exceeded my expectations! Their vegetarian menu is extensive and offers creative and delicious dishes that even non-vegetarians would enjoy. '
        },
        {
            img: jhon,
            name: 'Jhon Chion' ,
            des: 'Greek salad is a fresh and flavorful masterpiece! The crisp lettuce, tangy Kalamata olives, and creamy feta cheese create a perfect harmony of flavors that is simply irresistible.'
        },
    ]
  return (
    <Container className={'bg-bg-grey '}>
        <h1 className="font-markazi font-bold text-center text-[32px] ">Testimonials</h1>
        <div className="flex  flex-wrap md:justify-between sm:justify-center sm:gap-[20px] ">
        {data.map((item)=>(<CustomerCard img={item.img} name={item.name} des={item.des}/>))}
        </div>

    </Container>
  )
}

export default Testimonials