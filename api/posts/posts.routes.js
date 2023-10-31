const express = require("express");
const router = express.Router();
const {
  postsGet,
  postsUpdate,
  postsDelete,
  postsCreate,
  fetchPost,
} = require("./posts.controllers");
const upload = require("../../middleware/multer");

router.param("postId", async (req, res, next, postId) => {
  const post = await fetchPost(postId, next);
  req.post = post;
  next();
});

router.get("/", postsGet);
router.post("/", upload.single("image"), postsCreate);

router.delete("/:postId", postsDelete);

router.put("/:postId", postsUpdate);

module.exports = router;
