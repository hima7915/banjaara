import { Sequelize } from "sequelize";
import db from "../config/Database.js";
 
const { DataTypes } = Sequelize;
 
const Userinfo = db.define('user_info',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    about:{
        type: DataTypes.STRING(1024),
        allowNull: true,
    },
    profile_pic:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    cover_pic:{
        type: DataTypes.STRING,
        allowNull: true,
    }
},{
    freezeTableName:true
});
 
(async () => {
    await db.sync();
})();
 
export default Userinfo;