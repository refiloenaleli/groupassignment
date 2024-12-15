const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/yourDatabaseName', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connected to MongoDB!"))
.catch(err => console.error("Error connecting to MongoDB:", err));

const User = mongoose.model('User', new mongoose.Schema({
    name: String,
    email: String
}));

const testUser = new User({ name: "Makhala", email: "matsoso.com" });
testUser.save().then(() => console.log("User saved to DB!")).catch(err => console.error(err));
