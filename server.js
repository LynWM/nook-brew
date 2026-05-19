import jsonServer from 'json-server';
import cors from 'cors';

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const PORT = process.env.PORT || 3001;

server.use(cors({ origin: 'https://nook-brew.vercel.app/' }));
server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
  console.log(`JSON Server running on port ${PORT}`);
});