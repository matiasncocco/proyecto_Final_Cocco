module.exports = (sequelize, DataTypes) => {
    let alias = 'Cancion';
    let columns = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        titulo: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true
        },
        duracion: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true
        },
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    };
    let config = {
        underscored: true,
        tableName: 'canciones',
        timestamps: true,
        paranoid: true,
        charset: 'utf8',
        dialectOptions: {
            collate: 'utf8mb4_unicode:ci'
        }
    };
    let Cancion = sequelize.define(
        alias,
        columns,
        config
    );
    Cancion.associate = (model) => {
        Cancion.belongsToMany(model.Platform, {
            as: 'platforms',
            through: 'platform_Cancion',
            foreignKey: 'Cancion_id_platform',
            otherKey: 'platform_id',
            timestamps: true
        });
        Cancion.belongsToMany(model.Status, {
            as: 'status',
            through: 'status_Cancion',
            foreignKey: 'Cancion_id_status',
            otherKey: 'status_id',
            timestamps: true
        });
        Cancion.belongsToMany(model.Category, {
            as: 'categories',
            through: 'category_Cancion',
            foreignKey: 'Cancion_id_category',
            otherKey: 'category_id',
            timestamps: true
        });
        Cancion.belongsToMany(model.User, {
            as: 'users',
            through: 'user_Cancion',
            foreignKey: 'Cancion_id_user',
            otherKey: 'user_id',
            timestamps: true
        });
    };
    return Cancion;
};