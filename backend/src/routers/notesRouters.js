import express from "express"
import {getnotes,createnotes,updatenotes,deletenotes, getnotesbyID} from "../apis/notesApi.js"

const router=express.Router()

router.get("/",getnotes)
router.get("/:id",getnotesbyID)
router.post("/",createnotes)
router.put("/:id",updatenotes)
router.delete("/:id",deletenotes)

export default router