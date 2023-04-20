import { Sequelize } from "sequelize";
 
const db = new Sequelize('banjaara', 'root', 'popeye.l', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;