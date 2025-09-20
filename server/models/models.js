const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  email: {type: DataTypes.STRING, unique: true, allowNull: false},
  password: {type: DataTypes.STRING, allowNull: false},
  firstName: {type: DataTypes.STRING, allowNull: false},
  lastName: {type: DataTypes.STRING, allowNull: false},
  role: {type: DataTypes.STRING, defaultValue: 'USER'},
  isNewUser: {type: DataTypes.BOOLEAN, defaultValue: true}
})

const Basket = sequelize.define('basket', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
})

const BasketItem = sequelize.define('basket_item', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  quantity: {type: DataTypes.INTEGER, defaultValue: 1, allowNull: false}
})

const Product = sequelize.define('product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {type: DataTypes.STRING, allowNull: false},
  price: {type: DataTypes.DECIMAL(10, 2), allowNull: false},
  description: {type: DataTypes.TEXT},
  discountPercent: {type: DataTypes.INTEGER, defaultValue: 0},
  rating: {type: DataTypes.DECIMAL(3, 2), defaultValue: 0},
  reviewCount: {type: DataTypes.INTEGER, defaultValue: 0},
  gender: {type: DataTypes.ENUM('male', 'female', 'unisex'), allowNull: false},
  img: {type: DataTypes.STRING, allowNull: false},
  details: {type: DataTypes.JSONB}
})

const Type = sequelize.define('type', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const Brand = sequelize.define('brand', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Color = sequelize.define('color', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {type: DataTypes.STRING, allowNull: false},
  hexCode: {type: DataTypes.STRING, allowNull: false}
})

const Size = sequelize.define('size', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {type: DataTypes.ENUM('XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'), allowNull: false}
})

const Style = sequelize.define('style', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const ProductVariant = sequelize.define('product_variant', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  quantity: {type: DataTypes.INTEGER, defaultValue: 0, allowNull: false},
  additionalPrice: {type: DataTypes.DECIMAL(10, 2), defaultValue: 0},
  sku: {type: DataTypes.STRING, unique: true}
})

const Rating = sequelize.define('rating', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  rating: {type: DataTypes.INTEGER, allowNull: false, validate: {min: 1, max: 5}}
})

const Review = sequelize.define('review', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  rating: {type: DataTypes.INTEGER, allowNull: false, validate: {min: 1, max: 5}},
  comment: {type: DataTypes.TEXT, allowNull: false}
})

const ProductStyle = sequelize.define('product_style', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
})

const PromoCode = sequelize.define('promo_code', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  code: {type: DataTypes.STRING, unique: true, allowNull: false},
  discount: {type: DataTypes.INTEGER, allowNull: false},
  usageLimit: {type: DataTypes.INTEGER},
  usedCount: {type: DataTypes.INTEGER, defaultValue: 0},
  userUsageLimit: {type: DataTypes.INTEGER, defaultValue: 1},
  startDate: {type: DataTypes.DATE, allowNull: false},
  endDate: {type: DataTypes.DATE, allowNull: false},
  isActive: {type: DataTypes.BOOLEAN, defaultValue: true},
  description: {type: DataTypes.STRING}
})

const PromoCodeUsage = sequelize.define('promo_code_usage', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  usedAt: {type: DataTypes.DATE, defaultValue: DataTypes.NOW}
})

const ProductsCategory = sequelize.define('product_list', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  productIds: {
    type: DataTypes.JSONB,
    defaultValue: []
  }
})


User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

User.hasMany(Review)
Review.belongsTo(User)

Basket.hasMany(BasketItem)
BasketItem.belongsTo(Basket)

Type.hasMany(Product)
Product.belongsTo(Type)

Brand.hasMany(Product)
Product.belongsTo(Brand)

Product.hasMany(Rating)
Rating.belongsTo(Product)

Product.hasMany(Review)
Review.belongsTo(Product)

Product.hasMany(ProductVariant)
ProductVariant.belongsTo(Product)

Color.hasMany(ProductVariant)
ProductVariant.belongsTo(Color)

Size.hasMany(ProductVariant)
ProductVariant.belongsTo(Size)

ProductVariant.hasMany(BasketItem)
BasketItem.belongsTo(ProductVariant)

Product.belongsToMany(Style, {through: ProductStyle})
Style.belongsToMany(Product, {through: ProductStyle})

User.belongsToMany(PromoCode, {through: PromoCodeUsage})
PromoCode.belongsToMany(User, {through: PromoCodeUsage})


module.exports = {
  User,
  Basket,
  BasketItem,
  Product,
  ProductVariant,
  Type,
  Brand,
  Color,
  Size,
  Style,
  Rating,
  Review,
  ProductStyle,
  PromoCode,
  PromoCodeUsage,
  ProductsCategory
}