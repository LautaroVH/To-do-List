import {buena} from "../models/MyLists.js"

const pageWelcome = (req, res) => {
    res.render("Welcome", {
        page: "Home page"
    });
}

const pageMyLists = async (req, res, next) => {
  //  consult data base (listaAlma = base de datos almas)
  const listaAlma = await buena.findAll();

    try {
    console.log(buena.lista);

    } catch (err) {
    console.log(err);
    }
    res.render("mylists1", {
        page: "My lists",
        listaAlma
    })
    next();
}
const pageMyListsNewLists =  (req, res) => {
    res.render("mylists-newlist", {
        page: "My lists |  New list"
       
    })
}

const pageNewList =  (req, res) => {
    res.render("newlist", {
        page: "New list"
    })
}

const pageAddList =  (req, res) => {
    res.render("addlist", {
        page: "Add list"
    })
}



export {
    pageWelcome,
    pageMyLists,
    pageNewList,
    pageAddList,
    pageMyListsNewLists
}
