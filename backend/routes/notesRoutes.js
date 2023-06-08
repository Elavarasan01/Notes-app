const express=require("express");
const router=express.Router();
const {getAllNotes,createNotes,deleteNotes }=require("../controller/notesController")

router.get("/",getAllNotes)
router.post("/",createNotes)
router.delete("/:id",deleteNotes)

module.exports=router;