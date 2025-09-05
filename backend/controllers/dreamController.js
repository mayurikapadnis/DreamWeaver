import Dream from "../models/dreamModel.js";

// @desc    Save a new dream
// @route   POST /api/dreams
export const saveDream = async (req, res) => {
  try {
    const { title, description, text } = req.body;

    // Allow "text" as alias for description
    const dream = await Dream.create({
      title: title || "Untitled Dream",
      description: description || text,
    });

    res.status(201).json({
      success: true,
      message: "Dream saved successfully",
      dream,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error saving dream",
      error: error.message,
    });
  }
};

// @desc    Get all dreams
// @route   GET /api/dreams
export const getDreams = async (req, res) => {
  try {
    const dreams = await Dream.find().sort({ createdAt: -1 });
    res.json({ success: true, dreams });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update a dream
// @route   PUT /api/dreams/:id
export const updateDream = async (req, res) => {
  try {
    const dream = await Dream.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!dream) {
      return res.status(404).json({ success: false, message: "Dream not found" });
    }

    res.json({ success: true, message: "Dream updated", dream });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Delete a dream
// @route   DELETE /api/dreams/:id
export const deleteDream = async (req, res) => {
  try {
    const dream = await Dream.findByIdAndDelete(req.params.id);

    if (!dream) {
      return res.status(404).json({ success: false, message: "Dream not found" });
    }

    res.json({ success: true, message: "Dream deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
