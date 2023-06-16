import { useState, useContext } from 'react';
import axios from 'axios';
import { CustomContext } from '../../context/context';
import { useNavigate } from 'react-router-dom';

// import { Button, useDisclosure } from '@chakra-ui/react';
import { BsPencilSquare } from 'react-icons/bs';
import { AiOutlineEyeInvisible, AiFillEye, AiOutlineClose } from 'react-icons/ai';

import './registerModal.scss';


const RegisterModal = ({onClose, onSign, notShow}) => {

    const {setUser} = useContext(CustomContext)

    const [status, setStatus] = useState(false);
    const [email, setEmail] = useState('');
    const [show, setShow] = useState(false);

    const navigate = useNavigate();

    const registerUser = async (e) => {
        e.preventDefault();

        const newUser = {
            email, 
            password: e.target[0].value
        };

        axios.post('http://localhost:8080/register', newUser)
            .then(({data}) => {
                setUser({
                    token: data.accessToken,
                    ...data.user
                });

                localStorage.setItem("user", JSON.stringify({
                    token: data.accessToken,
                    ...data.user
                }))
                notShow();
                navigate("/profile")
            })
            .catch((e) => console.log(e))
    }

    return (
            <div className="modal">  
                <div className="modal__inner">
                    <div className="modal__header">
                        {
                            status ? 
                                    <div className="modal__header_welcome">
                                        <div className="close__button" onClick={onClose}><AiOutlineClose className='close__button-icon'/></div>
                                        <p className="modal__header_welcome_text">Здравствуйте</p>
                                        <div className="modal__header_welcome_email" onClick={() => setStatus(false)}>
                                            <p className="modal__header_welcome_email-text">{email}</p>
                                            <BsPencilSquare className='modal__header_welcome_email_icon'/>
                                        </div>
                                    </div>
                                    :
                                    <div className="modal__header_welcome">
                                        <div className="close__button" onClick={onClose}><AiOutlineClose className='close__button-icon'/></div>
                                        <p className="modal__header_welcome_text">Вход или регистрация</p>
                                    </div>
                        
                        }
                    </div>
                    <div className="modal__body">
                        <form className='modal__form' onSubmit={registerUser}>
                            {
                                status ? 
                                        <div className="modal__form_password">
                                            <div className="modal__form_field">
                                                <input type={show ? 'text' : 'password'} className="modal__form_input" placeholder='Придумайте пороль'/>
                                                <span className='modal__form_field_icon'>
                                                    {
                                                        show ? 
                                                                <AiFillEye onClick={() => setShow(false)}/> 
                                                             : 
                                                                <AiOutlineEyeInvisible onClick={() => setShow(true)}/>
                                                    }
                                                </span>
                                            </div>
                                            <button className='modal__form_button' type="submit">Создать аккаунт</button>
                                        </div>
                                        :
                                        <div className="modal__form_email">
                                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="modal__form_input" placeholder='Введите email'/>
                                            <div className='modal__form_button-block' onClick={() => setStatus(true)}>Продолжить</div>
                                            <div className="link_to_signIn" onClick={onSign}>
                                                У меня есть аккаунт
                                            </div>
                                        </div>
                            }
                        </form>
                    </div>
                </div>
            </div>
    )
}

export default RegisterModal;
