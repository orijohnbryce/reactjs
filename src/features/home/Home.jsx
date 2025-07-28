import React, { useState } from 'react'
import BasicExample from '../../components/BasicExamle'
import {  Modal } from 'react-bootstrap'
import ModalExample from '../../components/ModalExample';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import { Button, Slider } from '@mui/material'

const Home = () => {
    const [showModal, setShowModal] = useState(false);

    const [minPrice, setMinPrice] = useState(50)
    return (
        <div>This is home page
            <BasicExample />

            {/* custom Modal */}
            <Button size="large" onClick={() => setShowModal(true)}> Open Modal </Button>

            <br />
            <br />
            <br />
            {/* react-bootstrap example */}
            <ModalExample />

            <AccessAlarmsIcon/>
            

            <Slider aria-label="Volume" value={minPrice} min={0} max={100} onChange={(e, v)=>{setMinPrice(v)}} />
                <p> { minPrice }</p>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                {/* <Modal show={showModal} onHide={()=>alert("You can't run away from me")}> */}
                <h3> This is a nice modal </h3>
                <Button variant='danger' className='my-btn' onClick={() => setShowModal(false)}> Close </Button>
            </Modal>
        </div>
    )
}

export default Home