import { ICreateSettingsDTO } from "@modules/settings/dtos/ICreateSettingsDTO";
import { Setting } from "@modules/settings/infra/typeorm/entities/Setting";

interface ISettingsRepository {
  create(data: ICreateSettingsDTO): Promise<Setting>;
}

export { ISettingsRepository }
