const express = require("express");
const router = express();
const {
  post_data,
  get_Data,
  get_data_by_id,
  delete_data_by_id,
  update_data,
} = require("../controllers/userController");

router.post("/post_data", post_data);
router.get("/test", get_Data);
router.get("/test/:id", get_data_by_id);
router.put("/update_data/:id", update_data);
router.delete("/delete/:id", delete_data_by_id);

module.exports = router;
