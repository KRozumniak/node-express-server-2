import infoRoutes from '../info/Routes';
import userRouter from '../user/Routes';
import baseRouter from '../base/Routes';

export default function routes(app) {
  app.use('/userRegister', infoRoutes);
  app.use('/user', userRouter);
  app.use('/base', baseRouter);
}
