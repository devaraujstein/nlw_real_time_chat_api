import { Router } from 'express';
import { CreateSettingController } from '@modules/settings/useCases/createSetting/CreateSettingController';

const routes = Router();

const createSettingController = new CreateSettingController();

routes.post("/settings", createSettingController.handle);

export {routes};
