import express from 'express';

const routes = express.Router();

routes.get('/cars', (request, response) => {
  response.send("route get cars");
});

routes.post('/cars', (request, response) => {
  response.send('route post cars');
})

export default routes;