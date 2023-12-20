import { Router } from "express";
import * as controller from "./controller.js";
import Auth from "./Auth.js";

const router=Router();

router.route("/adduser").post(controller.addUser);
router.route("/adminlogin").post(controller.adminlogin);
router.route("/getemail/:phone").get(controller.forgotEmail);
router.route("/forgotepwd/:phone").patch(controller.staffFrgtPwd);
router.route("/addcategory").post(controller.addCategory);
router.route("/getcategory").get(controller.getCategory);
router.route("/getcategorydetails/:id").post(controller.getcategoryfulldata);
router.route("/editcategorydetails/:id").patch(controller.editCategorydetails);
router.route("/deletecategory/:id").delete(controller.deleteCategory);


export default router;