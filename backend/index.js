import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json());
dotenv.config();
app.use(cookieParser());

//routes imports

import pingRoutes from './routes/ping.routes.js';
import authRoutes from './routes/auth.routes.js';
import paymentMethodsRoutes from './routes/paymentMethods.routes.js';
import acomRoutes from './routes/acom.routes.js';
import reservationRoutes from '/.routes/reservation.routes.js';

app.use('/ping', pingRoutes);
app.use('/auth', authRoutes);
app.use('/payment-methods', paymentMethodsRoutes);
app.use('/host/accommodations', acomRoutes);
app.use('/host/accomodations/reservations', reservationRoutes)

app.listen(5001);