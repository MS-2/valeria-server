import express from 'express';
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import pkg from '../package.json';
import productRoutes from './routes/product.routes';
import companyRoutes from './routes/company.routes';
import userRoutes from './routes/user.routes';
import authRoutes from './routes/auth.routes';
import roleRoutes from './routes/role.routes';
import { createRoles, createAdmin } from "./utils/initialSetup";;


//initSetup
const app = express()
createRoles();
createAdmin();
// const corsOptions = {
//   origin: "http://localhost:4000",
// };
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Settings
app.set('pkg', pkg);


// Welcome Routes
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to valeria api r",
    name: app.get("pkg").name,
    version: app.get("pkg").version,
    description: app.get("pkg").description,
    author: app.get("pkg").author,
  });
});

// Routes
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/company', companyRoutes);
app.use('/api/role', roleRoutes);

export default app