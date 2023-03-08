import { useContext, useEffect, useState } from 'react'
import userService from '../../service/user.service'
import { Card, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/auth.context'


const ProfileCard = () => {

    const { user: userContext } = useContext(AuthContext)
    const [user, setUser] = useState(userContext)




    return (

        <Container>

            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{user.username}</Card.Title>
                    <p>{user.email}</p>
                    <img src={user.avatar} alt="image" />
                </Card.Body>
            </Card>

            <Link to={'/editUser'}>Edit Profile</Link>
            <Link to='/'>Menssages</Link>



        </Container>
    )
}

export default ProfileCard