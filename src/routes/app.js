
const express = require('express');
const {
  getHomePage,
  getApp1,
  postCreateUser,
  getCreatePage,
  getupdatePage
  } 
= require('../controllers/homeController')
const router = express.Router()


// chuyền cái router ở bên homecontroller
// Tham số thứ 2 : getHomePage chỉ là tên gọi để nó điều hướng sang file homecontroller để chạy code và express nó chuyền theo 2 tham só req và res rồi trả về giá trị cần tìm
router.get('/home', getHomePage);

router.get('/App1', getApp1);

// sau dấu ":" server sẽ hiểu mình sẽ chuyền động một cái tham số nào đó 
router.get('/update/:id', getupdatePage);

router.get('/create', getCreatePage);

router.post('/create_user', postCreateUser);



module.exports = router; // Xuất ra 1 biến router