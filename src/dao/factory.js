import dotenv from 'dotenv'
import UserDaoMongo from './mongo/userDAO.js'
import ProductDaoMongo from './mongo/productDAO.js'
import CartDaoMongo from './mongo/cartDAO.js'
import UserDaoFile from './file/userFileDao.js'
import ProductDaoFile from './file/productFileDao.js'
import CartDaoFile from './file/cartFileDao.js'

dotenv.config()

const daoTypes = () =>  {
    const daoType = process.env.DAO_TYPE
    console.log('DAO_TYPE:', daoType)
    if (daoType === 'file') {
        return {
            user: new UserDaoFile(),
            product: new ProductDaoFile(),
            cart: new CartDaoFile()
        }
    } else {
        return {
            user: new UserDaoMongo(),
            product: new ProductDaoMongo(),
            cart: new CartDaoMongo()
        }
    }
}

export default daoTypes
