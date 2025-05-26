require('dotenv').config()
const nodemailer = require('nodemailer') // для отправки email
const express = require('express') 
const cors = require('cors') 

// Отладочный вывод
console.log('Environment variables:', {
    email: process.env.GOOGLE_EMAIL,
    password: process.env.GOOGLE_APP_PASSWORD
})

const app = express()
const PORT = process.env.PORT || 3002

app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))
app.use(express.json())

const transporter = nodemailer.createTransport({
    service: "gmail", 
    auth: {
        user: process.env.GOOGLE_EMAIL,
        pass: process.env.GOOGLE_APP_PASSWORD,
    },
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

// Валидация email
const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

app.post('/send', (req, res) => {
    const { name, email, message } = req.body

    // Валидация данных
    if (!name || !email || !message) {
        return res.status(400).send('Все поля обязательны для заполнения');
    }

    if (!validateEmail(email)) {
        return res.status(400).send('Некорректный email адрес');
    }

    if (message.trim().length < 10) {
        return res.status(400).send('Сообщение должно содержать минимум 10 символов');
    }

    const mailOptions = {
        from: process.env.GOOGLE_EMAIL,
        to: process.env.GOOGLE_EMAIL,
        subject: 'New message from your website',
        html: `
            <div style="
                font-family: Arial, sans-serif;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f5f5f5;
                border-radius: 10px;
            ">
                <h1 style="
                    color: #333;
                    text-align: center;
                    border-bottom: 2px solid #ddd;
                    padding-bottom: 10px;
                ">Новое сообщение с вашего сайта</h1>
                
                <div style="background-color: white; padding: 20px; border-radius: 5px; margin-top: 20px;">
                    <p style="margin: 10px 0;"><strong>Имя:</strong> ${name}</p>
                    <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #0066cc;">${email}</a></p>
                    <p style="margin: 10px 0;"><strong>Сообщение:</strong></p>
                    <p style="
                        background-color: #f9f9f9;
                        padding: 15px;
                        border-left: 4px solid #0066cc;
                        margin: 10px 0;
                    ">${message}</p>
                </div>
                
                <div style="
                    text-align: center;
                    margin-top: 20px;
                    padding-top: 20px;
                    border-top: 1px solid #ddd;
                    color: #666;
                ">
                    <p>Сообщение было отправлено с портфолио</p>
                </div>
            </div>
        `
    }
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending email:', error)
            res.status(500).send(error)
        } else {
            console.log('Email sent: ' + info.response)
            res.status(200).send('Email sent successfully')
        }
    })
})