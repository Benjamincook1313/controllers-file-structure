import express from "express"
import viteExpress from "vite-express";

import authCtrl from "./controllers/authCtrl.js"
import clientCtrl from "./controllers/clientCtrl.js"

const app = express()

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const { getAuthData, addAuthData, updateAuthData, deleteAuthData } = authCtrl;
// AUTH ENDPOINTS
app.get("/", getAuthData);
app.post("/user", addAuthData);
app.put("/user/:id", updateAuthData);
app.delete("/user/:id", deleteAuthData);

const { getClientData, addClientData, updateClientData, deleteClientData } = clientCtrl;
// CLIENT ENDPOINTS
app.get("/", getClientData);
app.post("/user", addClientData);
app.put("/user/:id", updateClientData);
app.delete("/user/:id", deleteClientData);

viteExpress.listen(app, 3000, () => console.log('Server listening on port 3000'));