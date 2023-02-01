import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

function Review({reviewData}) {
    const [open, setOpen] = useState(false);
  return (
    <>
      <Button className='ms-2'
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        See Reviews
      </Button>
      <div style={{ minHeight: '150px' }}>

        <Collapse in={open} dimension="width">
          <div className='mt-2' id="example-collapse-text">
            {
                reviewData.map(item=>(
                    <div className='p-2'>
                        <Card body style={{ width: '400px' }}>
                            <h3>{item.name} {item.date}</h3>
                            <h5> Rating: {item.rating}</h5>
                            <h6>{item.comments}</h6>


             
             </Card>
                    </div>

                ))
            }
            
          </div>
        </Collapse>
      </div>
    </>
  )
}

export default Review
