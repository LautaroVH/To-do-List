import Sequelize  from "sequelize";
import db from "../config/db.js"

export const buena = db.define('almas', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    lista: {
        type: Sequelize.STRING
    },
    fecha: {
        type: Sequelize.DATE
    },
});