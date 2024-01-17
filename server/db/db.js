import { Sequelize, Model, DataTypes } from "sequelize";
import util from "util";
import url from "url";

import dotenv from "dotenv";
dotenv.config();
const { CONNECTION_STRING } = process.env

const sequelize = new Sequelize(CONNECTION_STRING);

class User extends Model {d
  [util.inspect.custom](){
    return this.toJSON()
  }
};

User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  modelName: "user",
  sequelize
});

if(process.argv[1] === url.fileURLToPath(import.meta.url)){
  console.log("Syncing database!");
  await db.sync({force: true});
  console.log("Finished syncing database!");
  await db.close();
}