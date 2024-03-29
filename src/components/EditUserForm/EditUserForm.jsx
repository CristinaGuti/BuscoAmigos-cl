import { useContext, useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import userService from '../../services/user.service'
import uploadServices from "../../services/upload.service"
import { AuthContext } from '../../contexts/auth.context'
import FormError from '../FormError/FormError'
import { useNavigate } from 'react-router-dom'
import './EditUserForm.css'
import Loader from '../Loader/Loader'

const EditUserForm = () => {

    const { user, authenticateUser } = useContext(AuthContext)

    const navigate = useNavigate()

    const [userData, setUserData] = useState({
        username: user.username,
        email: user.email,
        avatar: user.avatar
    })
    const [errors, setErrors] = useState([])
    const [loadinImage, setLoadingImage] = useState(false)

    const handleInputChange = e => {
        const { value, name } = e.target
        setUserData({ ...userData, [name]: value })
    }

    const handleFormSubmit = e => {

        e.preventDefault()

        userService
            .editUser(userData)
            .then(({ data }) => {
                localStorage.setItem('authToken', data.authToken)
                authenticateUser()
                navigate('/')
            })
            .catch(err => setErrors(err.response.data.errorMessages))
    }

    const handleFileUpload = e => {

        setLoadingImage(true)

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(formData)
            .then(({ data }) => {
                setUserData({ ...userData, avatar: data.cloudinary_url })
                setLoadingImage(false)
            })
            .catch(err => {
                console.log(err)
                setLoadingImage(false)
            })
    }

    if (!userData) {
        return (
            <Loader />
        )
    }




    return (

        <Container onSubmit={handleFormSubmit}>

            <Form >

                <img className='Avatar mt-4 mb-3' src={userData.avatar} alt="Avatar" />

                <Form.Group className="mb-3" controlId="avatar">
                    <Form.Label>Avatar</Form.Label>
                    <Form.Control type="file" onChange={handleFileUpload} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={userData.email} onChange={handleInputChange} name="email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="username">
                    <Form.Label>Nombre de usuario</Form.Label>
                    <Form.Control type="text" value={userData.username} onChange={handleInputChange} name="username" />
                </Form.Group>

                {errors.length > 0 && <FormError>{errors.map(elm => <p key={elm._id}>{elm}</p>)}</FormError>}

                <div className="d-grid">
                    <Button variant="dark" type="submit" disabled={loadinImage}>{loadinImage ? 'Cargando imagen...' : 'Guardar cambios'}</Button>
                </div>

            </Form>



        </Container>
    )
}

export default EditUserForm