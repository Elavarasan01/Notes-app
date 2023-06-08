const Notes=require("../model/notesModel");

const getAllNotes=async(req,res)=>{
  const notes=await Notes.find({})
  res.send(notes)
}

const createNotes=async(req,res)=>{
    const {title,text,color,date}=req.body;
    
    const notes =new Notes ({
        title,
        text,
        color,
        date
    })

   await notes.save();
    res.send(200,"notes created")
}

const deleteNotes=async(req,res)=>{
    const note=Notes.findById(req.params.id);
    await Notes.deleteOne(note)
    res.send(200,"deleted this note")
}

module.exports={
    getAllNotes,
    createNotes,
    deleteNotes
}