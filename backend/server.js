const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

dotenv.config();

// const connectDB = require('./config/db');
// connectDB(); // Uncomment when MongoDB is running locally

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/wellbeing', require('./routes/wellbeingRoutes'));
app.use('/api/courses', require('./routes/courseRoutes'));
app.use('/api/ai', require('./routes/aiRoutes'));
app.use('/api/communications', require('./routes/communicationRoutes'));

// Basic route
app.get('/', (req, res) => res.send('API is running...'));

// Global error handler
app.use((err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode).json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
