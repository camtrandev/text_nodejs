
const connection = require('../config/Database');
const {getAllUsers} = require('../services/CRUDService');

const getHomePage = async (req, res) => {
    
    let results = await getAllUsers();

    return res.render('home.ejs', {listUser: results})
    
}

const getApp1 = (req, res) => {
    res.render('check App1')
}

const getupdatePage = (req, res) => {
    res.render('edit.ejs')
}

const postCreateUser = async (req, res ) => {
    
    let email = req.body.email
    let name = req.body.Name
    let city = req.body.City

    // dùng call back funstion để gọi hàm trả về cho client
    // connection.query(  
    //     `INSERT INTO 
    //     Users (email, name, city) 
    //     VALUES (?, ?, ?)`,
    //     [email, name, city],
    //     function(err, results) {
    //       console.log(results);
    //       res.send('Create User succeed !');
    //     }
    //   );

     // dùng ây sing await code dễ đọc nhìn dễ hiểu
      let [results, fields] =  await connection.query(  
        `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`, [email, name, city],
      );

      console.log(">>>check  results:", results);
      res.send('Create User succeed !');

}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

//Trả về nhiều giá trị:
module.exports = {
    getHomePage, 
    getApp1,
    getCreatePage,
    postCreateUser,
    getupdatePage
}

