import app from './app';
import { startConnection } from './database';

startConnection();
app.listen(3001);
console.log('Server running on port 3001');