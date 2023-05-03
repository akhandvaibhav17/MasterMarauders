const { default: mongoose } = require("mongoose");
const mongoos = require("mongoose");
mongoose.connect("mongodb+srv://akhandvaibhav17:0e2hQAktQ2i68bSP@cluster0.uvfrofw.mongodb.net/?retryWrites=true&w=majority", {}).then(() => {
    console.log(`connection successful`);
}).catch((e) => {
    console.log(`no connection`);
})