require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const { inicializarBaseDeDatos } = require("./db/conexion");
const authRoutes = require("./routes/auth.routes");
const boletosRoutes = require("./routes/boletos.routes");
const compradoresRoutes = require("./routes/compradores.routes");
const { rutaNoEncontrada } = require("./middlewares/errores.middleware");

const app = express();
const PUERTO = process.env.PORT || 3000;

app.use(express.json());

app.use(helmet());

app.use(cors({
    origin: ["http://localhost:3000", "http://127.0.0.1:5500"],
}));

app.use("/auth", authRoutes);
app.use("/boletos", boletosRoutes);
app.use("/compradores", compradoresRoutes);

app.get("/", (req, res) => {
    res.json({ mensaje: "EventHive API — en auditoría 🕵️" });
});

app.use(rutaNoEncontrada);

async function iniciarServidor() {
    await inicializarBaseDeDatos();

    app.listen(PUERTO, () => {
        console.log(`🚀 EventHive corriendo en http://localhost:${PUERTO}`);
    });
}

iniciarServidor();