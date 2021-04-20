import { Setting } from "@modules/settings/infra/typeorm/entities/Setting"
import { EntityRepository, getRepository, Repository } from "typeorm"
import { ISettingsRepository } from "@modules/settings/repositories/ISettingsRepository"
import { ICreateSettingsDTO } from "@modules/settings/dtos/ICreateSettingsDTO"

@EntityRepository(Setting)
class SettingsRepository implements ISettingsRepository  {
  repository: Repository<Setting>

  constructor(){
    this.repository = getRepository(Setting);
  }

  async create({username, chat}: ICreateSettingsDTO): Promise<Setting> {
    const setting = this.repository.create({
      username,
      chat,
    });

    await this.repository.save(setting);

    return setting;
  }

}

export { SettingsRepository }
