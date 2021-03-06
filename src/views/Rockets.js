import { useState, useEffect } from 'react';
import { Card, Col, Row, Statistic, Button, Image } from 'antd';
import { FlagOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import '../rockets.css'

const axios = require('axios');

const Rockets = () => {

    const [rockets, setRockets] = useState([]);

    useEffect(() => {
        getRocket();
    }, [])

    async function getRocket() {
        try {
            const response = await axios.get('https://api.spacexdata.com/v3/rockets');
            // console.log(response.data);
            setRockets(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Row>{
            rockets.map((rocket) => (

                <Col span={6}>
                    <Card className='Card-Rocket' title={rocket.rocket_name} style={{ width: 300 }}>
                        <div style={{ display: 'flex', justify: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <Image style={{ width: '15vw', height: '25vh' }} src={rocket.flickr_images[0]} /> <br />
                            <p> <FlagOutlined /> {rocket.country} </p>
                            <br />
                            <Link to={"/detail/" + rocket.rocket_id}><Button type="primary"> More detail </Button></Link>
                            {/* <ModalPage data={rocket}/> */}
                        </div>
                    </Card>
                </Col>

            ))
        }
        </Row>
    )
}

export default Rockets;