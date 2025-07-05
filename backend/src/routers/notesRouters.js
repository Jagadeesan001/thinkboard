import express from "express"
import {getnotes,createnotes,updatenotes,deletenotes} from "../apis/notesApi.js"

const router=express.Router()

router.get("/",getnotes)
router.post("/",createnotes)
router.put("/put",updatenotes)
router.delete("/del",deletenotes)

export default router