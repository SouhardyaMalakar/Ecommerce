const express =require('express');
const env = require('dotenv');

const mongoose = require('mongoose');
const app =express();
const path =require("path");
const cors =require("cors");

//routes 
const authRoutes =require('./routes/auth');
const adminRoutes =require('./routes/admin/auth');
const categoryRoutes =require('./routes/category');
const productRoutes =require('./routes/product');
const cartRoutes =require('./routes/cart');
env.config();
app.use(express.json());



//mongodb+srv://revox216:00000000@cluster0.u6dcx.mongodb.net/?retryWrites=true&w=majority
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.u6dcx.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true,
    }
)
.then(()=>{
    console.log('Database conncted');
});

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'uploads')))
app.use('/api', authRoutes);
app.use('/api', categoryRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api', productRoutes);
app.use('/api', cartRoutes);



app.listen(process.env.PORT,()=>{
    console.log(`server is running onport ${process.env.PORT}`);
})