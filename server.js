require('dotenv').config();
const path = require('path')
const express = require('express') 
const configViewEngine = require('./src/config/viewEngine');
const webRouter = require('./src/routes/app');
const connection = require('./src/config/Database');

//template enginessssssssss
// const handlebars = require('express-handlebars');


const app = express()
// định nghĩa port
const port = process.env.PORT||8000;
const hostname = process.env.HOST_NAME;

// lấy dữ liệ người dùng nhâp vào rôi gửi lên server
app.use(express.json()); // for json
app.use(express.urlencoded({extended: true})); // for form data

// template engine
// app.engine('handlebars', handlebars());
// app.set('view engine', 'handlebars');
// app.set('views', path.join(__dirname, 'views'));

//config template engine
configViewEngine(app);

// chuyển các router sang  file app.js (khai báo router)
app.use('/', webRouter); // Tham số thứ nhất chính là đường link mà nó quản lý (sau này có nhiều đường link VD: quản lú người dùng , sản phẩm..)
// muốn truy cập đến các router thì phải thông quan tk /app VD: 127.0.0.1:8000/app/camdev


// từ nodejs trọc xuống data để lấy dữ liệu lên 


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
