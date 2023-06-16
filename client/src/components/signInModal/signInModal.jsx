import { useState, useContext } from 'react';
import axios from 'axios';
import { CustomContext } from '../../context/context';
import { useNavigate } from 'react-router-dom';

import { AiOutlineEyeInvisible, AiFillEye, AiOutlineClose } from 'react-icons/ai';

import './signInModal.scss';


const SingInModal = ({onClose, onSign, notShow}) => {

    const {setUser} = useContext(CustomContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [show, setShow] = useState(false);

    // const navigate = useNavigate();

    const loginUser = (e) => {
        e.preventDefault();
        const user = {
            email: e.target[0].value,
            password: e.target[1].value
        }
        
        axios.post('http://localhost:8080/login', user)
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
                        <div className="modal__header_welcome">
                            <div className="close__button" onClick={onClose}><AiOutlineClose className='close__button-icon'/></div>
                            <p className="modal__header_welcome_text">Вход в iwi</p>
                        </div>
                    </div>
                    <div className="modal__body">
                        <form className='modal__form' onSubmit={loginUser}>
                            <div className="modal__form_signIn">
                                <div className="modal__form_field">
                                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="modal__form_input" placeholder='Введите email'/>
                                    <div className='modal__form_field_password'>
                                        <input type={show ? 'text' : 'password'} className="modal__form_input" placeholder='Введите пороль'/>
                                        <span className='modal__form_field_password_icon'>
                                            {
                                                show ? 
                                                        <AiFillEye onClick={() => setShow(false)}/> 
                                                    : 
                                                        <AiOutlineEyeInvisible onClick={() => setShow(true)}/>
                                            }
                                        </span>
                                    </div>
                                </div>
                                <button className='modal__form_button' type="submit">Войти</button>
                                <div className="link_to_signIn" onClick={onSign}>
                                    Зарегистрироваться
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    )
}

export default SingInModal;
