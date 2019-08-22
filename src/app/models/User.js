import { Model, Sequelize} from  'sequelize'

import bcrypt from 'bcrypt';

class User extends Model {

    static init(sequelize){
      super.init({
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        speaker: Sequelize.BOOLEAN,
      },{
        sequelize,
      });

    }

    checkPassword(password){
      return password === this.password_hash
      //bcrypt
    }
}

export default User;
