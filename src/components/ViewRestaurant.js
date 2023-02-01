import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image,Button } from 'react-bootstrap';
import Operatingtime from './Operatingtime';
import Review from './Review';



function ViewRestaurant() {

  const params = useParams()
  const [allrestaurant, setAllrestaurant] = useState([])
  //function to api call for datas inside jsonfile
  const getrestaurantdata = async () => {
    await fetch('/restaurants.json')
      .then(data => {
        data.json()
          .then(result => {
            setAllrestaurant(result.restaurants)
          })
      })
  }
  // console.log(allrestaurant);
  const restdata = allrestaurant.find(item=>item.id==params.id)
  console.log(restdata);

  useEffect(() => {
    getrestaurantdata()
  }, [])


  return (
    <>
      {restdata?(

    <Row>
      <Col>
      <Image className='p-5' src={restdata.photograph} fluid></Image>

      </Col>
      <Col className='mt-5'>
      <h1>{restdata.name}</h1>
      <h3>{restdata.neighborhood}</h3>
      <h4>Cusine type: {restdata.cuisine_type}</h4>
      <h4>Address: {restdata.address}</h4>

      <Operatingtime timedata={restdata.operating_hours}></Operatingtime>
      <Review reviewData={restdata.reviews}></Review>

      
      </Col>

    </Row>

):'null'}
    </>
  )
}


export default ViewRestaurant
