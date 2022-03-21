import Sequelize  from "sequelize";
import db from "../config/db.js"

export const Listas = db.define('listas', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    ListName: {
        type: Sequelize.STRING
    }
});