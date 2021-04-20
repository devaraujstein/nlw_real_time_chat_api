import { Request, Response } from "express";
import { SettingsRepository } from "../repositories/SettingsRepository";
import { getCustomRepository } from "typeorm";

class SettingsController {
  async create(request: Request, response: Response): Promise<Response>{
    const {username, chat} = request.body;

    const settingsRepository = getCustomRepository(SettingsRepository);

    const setting = settingsRepository.create({
      username,
      chat,
    });

    await settingsRepository.save(setting);

    return response.status(201).json(setting);
  }
}

export { SettingsController }
