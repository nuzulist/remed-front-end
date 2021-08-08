import React from 'react'
import Axios from 'axios'

import NavigationBar from '../component/navigationBar'
import { Card, Button } from 'react-bootstrap'

class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        Axios.get('http://localhost:2000/products')
            .then(res => {
                this.setState({ products: res.data })
            })
    }

    showProducts = () => {
        return (
            this.state.products.map((item, index) => {
                return (
                    <Card style={{ width: '30rem', marginTop: '15px', marginRight: '15px' }} key={index}>
                        <div>
                            <Card.Img variant="top" src={item.img} />
                        </div>
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>IDR {item.price.toLocaleString()},00</Card.Text>
                            <Card.Text>Stock {item.stock} pcs</Card.Text>
                            <div>
                                <Button className="me-2" variant="outline-dark">
                                    <i className="far fa-bookmark"></i>
                                </Button>
                                <Button variant="outline-dark">
                                    <i className="fas fa-cart-plus"></i> Buy Now
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                )
            })
        )
    }

    render() {
        return (
            <div>
                <NavigationBar />
                <div style={{ marginTop: '3rem' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {this.showProducts()}
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage