const { default: mongoose } = require("mongoose");
const mongoos = require("mongoose");
mongoose.connect("mongodb://localhost:27017/masterMarauders", {}).then(() => {
    console.log(`connection successful`);
}).catch((e) => {
    console.log(`no connection`);
})