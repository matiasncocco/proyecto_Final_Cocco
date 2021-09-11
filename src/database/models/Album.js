module.exports = (sequelize, DataTypes) => {
    let alias = 'Album';
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
         duracion: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
    };

     let config = {
        underscored: true,
        tableName: 'albumes',
        timestamps: false,
        paranoid: true,
        charset: 'utf8',
        dialectOptions: {
            collate: 'utf8mb4_unicode:ci'
        }
    };
     let Album = sequelize.define(
        alias,
        cols,
        config
    );
    Album.associate = (model) => {
        Album.hasMany(model.Cancion, {
            as: 'canciones', // Plural
            foreignKey: 'album_id' // éste ID existe en una de las tablas
        });
    };
    return Album;
};

