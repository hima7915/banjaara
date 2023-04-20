import { Sequelize } from "sequelize";
import db from "../config/Database.js";
 
const { DataTypes } = Sequelize;
 
const tags = db.define('tags',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    tag:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    freezeTableName:true
});
 
(async () => {
    await db.sync();
})();
 
export default tags;