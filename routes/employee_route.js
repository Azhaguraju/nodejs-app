const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employee_controller");

router.get("/getallemployees", employeeController.findAll);
router.post("/createmployee", employeeController.create);
router.get("/:id", employeeController.findOne);
router.put("/:id", employeeController.UpdateUser);
router.delete("/:id", employeeController.delete);

module.exports = router;
