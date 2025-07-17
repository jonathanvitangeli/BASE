import express from "express";
import vueloRoutes from "./src/routes/vueloRoutes.js";

const app = express();
app.use(express.json());
app.use("/api", vueloRoutes);

app.listen(3000, () => console.log("Servidor corriendo en puerto 3000"));
