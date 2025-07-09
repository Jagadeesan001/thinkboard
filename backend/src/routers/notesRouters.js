import express from "express"
import {getnotes,createnotes,updatenotes,deletenotes} from "../apis/notesApi.js"

const router=express.Router()

router.get("/",getnotes)
router.post("/",createnotes)
router.put("/:id",updatenotes)
router.delete("/:id",deletenotes)

export default router