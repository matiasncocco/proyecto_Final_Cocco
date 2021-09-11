module.exports = (sequelize, DataTypes) => {
    let alias = 'Artistas';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
         },
         nombre: {
            type: DataTypes.STRING(255),
            allowNull: false
         },
         apellido: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
    };

     let config = {
        underscored: true,
        tableName: 'artistas',
        timestamps: false,
        paranoid: true,
        charset: 'utf8',
        dialectOptions: {
            collate: 'utf8mb4_unicode:ci'
        }
    };
     let Artista = sequelize.define(
        alias,
        cols,
        config
    );
    Artista.associate = (model) => {
        Artista.hasMany(model.Cancion, {
            as: 'canciones', // Plural
            foreignKey: 'artista_id' // éste ID existe en una de las tablas
        });
    };
    return Artista;
};

