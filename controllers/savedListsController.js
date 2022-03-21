
import {buena} from "../models/MyLists.js"

const Listname = async (req, res) => {
    console.log(req.body);

    try {
        await buena.create({
            Listname
        });
        res.redirect("/mylists1")
    } catch (error) {
        console.log(error)
    }
}
export {
    Listname
}