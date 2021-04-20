import { ICreateSettingsDTO } from "@modules/settings/dtos/ICreateSettingsDTO";
import { Setting } from "@modules/settings/infra/typeorm/entities/Setting";
import { ISettingsRepository } from "@modules/settings/repositories/ISettingsRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateSettingUseCase {
  constructor(
    @inject("SettingsRepository")
    private settingsRepository: ISettingsRepository
  ){};
  async execute({username, chat}: ICreateSettingsDTO): Promise<Setting> {
    return await this.settingsRepository.create({username, chat});
  };
}

export { CreateSettingUseCase }
