import React from 'react'
import {Container, Col, Row } from 'react-bootstrap'
import styles from './header.module.scss'
const Header = () => {
  return (
    <div className={styles.headerDv}>
        <Container>
        <Row>
            <Col md='12'>
                <div className='d-flex justify-content-between'>
                    <div>Prashant_Tiwari</div>
                    <div>ICON</div>
                </div>
            </Col>
        </Row>
        </Container>
    </div>
  )
}

export default Header