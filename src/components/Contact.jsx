import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
// API URL в зависимости от окружения
const API_URL = process.env.NODE_ENV === 'production' 
    ? 'https://portfolio-production-2ac9.up.railway.app'  // URL API на Railway
    : 'http://localhost:3002';                // локальный URL для разработки

const StyledContact = styled.section`
    padding: 50px 20px;
    background-color: #282c34;
    text-align: center;
    position: relative;
    overflow: hidden;

    h2 {
        color: white;
    }

    form {
        max-width: 600px;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        gap: 15px;
    }

    input, textarea, button {
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 1rem;
        outline: none;
    }

    button {
        background-color: white;
        color: black;
        cursor: pointer;

        &:hover {
            background-color: #d3d3d3;
        }

        &:disabled {
            background-color: #cccccc;
            cursor: not-allowed;
        }
    }

    .error {
        color: #ff9a9a;
        font-size: 1.2rem;
        text-align: left;
        margin-top: -10px;
    }

    .input-error {
        border-color: #ff6b6b;
    }

    .loader-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    .loader {
        width: 50px;
        height: 50px;
        border: 5px solid #f3f3f3;
        border-top: 5px solid #3498db;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    .success-message {
        position: fixed;
        bottom: 20px;
        right: 0;
        background-color: #4CAF50;
        color: white;
        padding: 15px 30px;
        border-radius: 5px 0 0 5px;
        box-shadow: -2px 2px 5px rgba(0,0,0,0.2);
        z-index: 1000;
    }
`;
console.log(API_URL);
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isSent, setIsSent] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const validateForm = () => {
        const newErrors = {};

        // Проверка имени
        if (!formData.name.trim()) {
            newErrors.name = 'Имя обязательно для заполнения';
        }

        // Проверка email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = 'Email обязателен для заполнения';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Введите корректный email';
        }

        // Проверка сообщения
        if (!formData.message.trim()) {
            newErrors.message = 'Сообщение обязательно для заполнения';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Сообщение должно содержать минимум 10 символов';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch(`${API_URL}/send`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Имитируем задержку для показа лоадера
                await new Promise(resolve => setTimeout(resolve, 1500));
                setIsSent(true);
                setShowSuccess(true);
                setFormData({ name: '', email: '', message: '' });

                // Скрываем сообщение об успехе через 3 секунды
                setTimeout(() => {
                    setShowSuccess(false);
                    setIsSent(false);
                }, 3000);
            } else {
                const error = await response.text();
                setErrors({ submit: 'Ошибка при отправке: ' + error });
            }
        } catch (error) {
            setErrors({ submit: 'Ошибка соединения с сервером' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <StyledContact id='contacts'>
            <AnimatePresence>
                {isSubmitting && (
                    <motion.div
                        className="loader-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="loader"></div>
                    </motion.div>
                )}

                {showSuccess && (
                    <motion.div 
                        className="success-message"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 1 }}
                    >
                        Сообщение успешно отправлено!
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.h2
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Контакты
            </motion.h2>

            <form onSubmit={handleSubmit}>
                <motion.input
                    type="text"
                    placeholder='Ваше Имя'
                    className={errors.name ? 'input-error' : ''}
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                    value={formData.name}
                    onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) {
                            setErrors({ ...errors, name: '' });
                        }
                    }}
                />
                {errors.name && <div className="error">{errors.name}</div>}

                <motion.input
                    type="email"
                    placeholder='Ваш email'
                    className={errors.email ? 'input-error' : ''}
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    value={formData.email}
                    onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) {
                            setErrors({ ...errors, email: '' });
                        }
                    }}
                />
                {errors.email && <div className="error">{errors.email}</div>}

                <motion.textarea
                    placeholder='Ваше сообщение'
                    rows={5}
                    className={errors.message ? 'input-error' : ''}
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2, duration: 1 }}
                    value={formData.message}
                    onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) {
                            setErrors({ ...errors, message: '' });
                        }
                    }}
                />
                {errors.message && <div className="error">{errors.message}</div>}

                {errors.submit && <div className="error">{errors.submit}</div>}

                <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.5, duration: 1 }}
                >
                    {isSubmitting ? 'Отправка...' : isSent ? 'Отправлено!' : 'Отправить'}
                </motion.button>
            </form>
        </StyledContact>
    );
};

export default Contact;