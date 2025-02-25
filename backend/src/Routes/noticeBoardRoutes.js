const express = require("express");
const router = express.Router();
const noticeBoardController = require("../Controllers/noticeBoardController");

router.get("/", noticeBoardController.getAllNotices);
router.get("/:noticeId", noticeBoardController.getNoticeById);
router.post("/", noticeBoardController.createNotice);
router.put("/:noticeId", noticeBoardController.updateNotice);
router.delete("/:noticeId", noticeBoardController.deleteNotice);

module.exports = router;
