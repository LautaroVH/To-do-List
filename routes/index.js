import express from 'express';
import { pageAddList, pageMyLists, pageMyListsNewLists, pageNewList, pageWelcome } from "../controllers/pagesControllers.js"
import {
    Listname
    
} from "../controllers/savedListsController.js"


const router = express.Router();

router.get("/", pageWelcome);

router.get("/mylists-newlist", pageMyListsNewLists);

router.get("/mylists1", pageMyLists);

router.post("/mylists1", Listname);

router.get("/newlist", pageNewList);
router.get("/newlist", pageNewList);

router.get("/addlist", pageAddList);



export default router;