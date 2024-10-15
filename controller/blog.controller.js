const createBlog = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Image upload failed" });
    }

    const {
      metaTitle,
      metaDescription,
      metaKeywords,
      blogTitle,
      blogDescription,
      blogContent,
    } = req.body;

    const newBlog = new Blog({
      metaTitle,
      metaDescription,
      metaKeywords,
      blogTitle,
      blogDescription,
      blogContent,
      image: req.file.path,
    });

    await newBlog.save();
    res
      .status(201)
      .json({ message: "Blog created successfully", blog: newBlog });
  } catch (error) {
    console.error("Error creating blog:", error);
    res
      .status(500)
      .json({ message: "Error creating blog", error: error.message });
  }
};

const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res
      .status(500)
      .json({ message: "Error fetching blogs", error: error.message });
  }
};

const getSingleBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.json(blog);
  } catch (error) {
    console.error("Error fetching blog:", error);
    res
      .status(500)
      .json({ message: "Error fetching blog", error: error.message });
  }
};

const updateBlog = async (req, res) => {
  try {
    const {
      metaTitle,
      metaDescription,
      metaKeywords,
      blogTitle,
      blogDescription,
      blogContent,
      status,
    } = req.body;

    const updateData = {
      metaTitle,
      metaDescription,
      metaKeywords,
      blogTitle,
      blogDescription,
      blogContent,
      status: status === "true", // Convert string to boolean
    };

    if (req.file) {
      updateData.image = req.file.path;
    }

    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );
    if (!updatedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.json({ message: "Blog updated successfully", blog: updatedBlog });
  } catch (error) {
    console.error("Error updating blog:", error);
    res
      .status(500)
      .json({ message: "Error updating blog", error: error.message });
  }
};
const deleteBlog = async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    if (!deletedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.error("Error deleting blog:", error);
    res
      .status(500)
      .json({ message: "Error deleting blog", error: error.message });
  }
};

export { createBlog, deleteBlog, updateBlog, getBlogs, getSingleBlog };
