import Note from "../models/Note.js";

export const getnotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    console.log("error in get API : ", error);
    res.status(500).json({ message: "internal server error" });
  }
};
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
export const updatenotes = (req, res) => {
  res.json({ message: "update data" });
};
export const deletenotes = (req, res) => {
  res.json({ message: "delete data" });a
};
