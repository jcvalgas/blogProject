
import express  from "express";
import path from "path"
import { routes } from "./src/routes/routes.js";

let __dirname = path.resolve(path.dirname('')); 
const port = process.env.PORT || 3000
const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

app.listen(port, function() {
  console.log(port);
});
