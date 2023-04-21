import { Sequelize } from "sequelize";
import db from "../config/Database.js";
 
const { DataTypes } = Sequelize;
 
const blogs = db.define('blogs',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    user_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    location:{
        type: DataTypes.STRING,
        allowNull: true
    },
    budget:{
        type: DataTypes.INTEGER,
        allowNull: true
    },
    days:{
        type: DataTypes.INTEGER,
        allowNull: true
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    blog:{
        type: DataTypes.TEXT,
        allowNull: false,
    },
    tags:{
        type: DataTypes.INTEGER
    },
    privacy:{
        type: DataTypes.BOOLEAN,
        defaultValue: 0
    }
}
// ,{
//     freezeTableName:true
// }
);
 
(async () => {
    await db.sync({alter:true});
})();
 
export default blogs;