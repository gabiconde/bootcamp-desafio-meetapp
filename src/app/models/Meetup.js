import { Model, Sequelize } from 'sequelize';

class Meetup extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        date: Sequelize.DATE,
        maxSubscriptions: Sequelize.INTEGER,
        canceled_at: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    this.hasMany(models.Subscription, {
      foreignKey: 'meetup_id',
      as: 'subscription',
    });
  }
}

export default Meetup;
