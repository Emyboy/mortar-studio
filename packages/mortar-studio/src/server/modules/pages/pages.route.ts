import { Router } from 'express';
import {Routes} from "../../../types/route.types.js";
import PageController from "./pages.controller.js";
import validationMiddleware from "../../middlewares/request.middleware.js";
import { CreatePageSchema } from '@repo/common/schema/page'

class IndexRoute implements Routes {
    public path = '/pages';
    public router = Router();
    public pageController = new PageController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        //@ts-ignore
        this.router.post(`${this.path}`, validationMiddleware(CreatePageSchema, 'body'), this.pageController.createPage);
        //@ts-ignore
        this.router.get(`${this.path}`, this.pageController.getAllPages);
    }
}

export default IndexRoute;