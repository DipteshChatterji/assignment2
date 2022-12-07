module.exports = (sequelize, Sequelize) => {
    const Transaction = sequelize.define("Paymentinfo", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      mid:{
        type:Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        // allowNull: false,
      },
      status:{
        type:Sequelize.STRING,
        allowNull:false
      },
      
      starting_date: {
        type:Sequelize.STRING
        
      },
      ending_date: {
        type: Sequelize.STRING
        
      }
      
    });
  
    return Transaction;
  };