import usermodel from "../models/user.js";

// Create user
const create = async (req, res) => {
  try {
    const { name, fathername, email, phone } = req.body;
    console.log({ name, fathername, email, phone })
    const Newuser = await usermodel.create({
      name,
      fathername,
      email,
      phone,
    });

    res.status(200).json({ success: true, message: "User Created Successfully.", Newuser });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Read users
const get = async (req, res) => {
  try {
    const users = await usermodel.find();
    if (!users) {
      return res.status(404).json({ success: false, message: "No users found" });
    }

    res.status(200).json({ success: true, users });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Update user
const Updated = async (req, res) => {
  console.log(req.params.id)
  try {
    const userId = req.params.id;
    
    const { name, fathername, email, phone } = req.body; // Get the update data from the request body
    console.log({ name, fathername, email, phone });

    const updateuser = await usermodel.findByIdAndUpdate(userId,{ name, fathername, email, phone }, { new: true });
    if (!updateuser) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    res.status(200).json({ success: true, message: "User updated successfully", updateuser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Delete user
const Deleted = async (req, res) => {
  try {
    const userId = req.params.id;
    const deletuser = await usermodel.findOneAndDelete({_id:userId});
    if (!deletuser) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    res.status(200).json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export { create, get, Updated, Deleted};
