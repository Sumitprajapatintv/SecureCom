import expres from "express";
const app = expres();
const PORT = 3000;
app.get("/", (req, res) => {
    res.send("Hello From Server");
});
app.listen(PORT, () => {
    console.log(`App is Listing on PORT ${PORT}`);
});
