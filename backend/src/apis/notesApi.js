import Note from "../models/Note.js";

export const getnotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.status(200).json(notes);
  } catch (error) {
    console.log("error in get API : ", error);
    res.status(500).json({ message: "internal server error" });
  }
};

export const getnotesbyID = async (req,res) => {
  try {
    const noteID= await Note.findById(req.params.id)
    res.json({noteID})
  } catch (error) {
    console.log("error in get API using ID : ", error);
    res.status(500).json({ message: "internal server error" });
  }
}

export const createnotes = async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content });
    const savedNote = await note.save();
    res.status(201).json(savedNote);
  } catch (error) {
    console.log("error in create API : ", error);
    res.status(500).json({ message: "internal server error in create api" });
  }
};

export const updatenotes = async (req, res) => {
  try {
    const { title, content } = req.body;
    const noteupdate = await Note.findByIdAndUpdate(req.params.id, {title,content},{new:true});
    if (!updatenotes){
      return res.json({message:"id not found"})
    }
    res.json(noteupdate);
  } catch (error) {
    console.log("error in update API : ", error);
    res.status(500).json({ message: "internal server error in update api" });
  }
};
export const deletenotes = async (req, res) => {
  try {
    const notedelete= await Note.findByIdAndDelete(req.params.id)
    if (!notedelete){
      return res.json({message:"id not found"})
    }
    res.json(notedelete)
  } catch (error) {
    console.log("error in delete API : ", error);
    res.status(500).json({ message: "internal server error in delete api" });
  }
};
