module.exports = (sequelize, DataTypes) => {
    let alias = 'Genero';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
         },
         name: {
            type: DataTypes.STRING(255),
            allowNull: false
         }
        
    };

     let config = {
        underscored: true,
        tableName: 'generos',
        timestamps: false,
        paranoid: true,
        charset: 'utf8',
        dialectOptions: {
            collate: 'utf8mb4_unicode:ci'
        }
    };
     let Genero = sequelize.define(
        alias,
        cols,
        config
    );
    Genero.associate = (model) => {
        Genero.hasMany(model.Cancion, {
            as: 'canciones', // Plural
            foreignKey: 'genero_id' // éste ID existe en una de las tablas
        });
    };
    return Genero;
};

