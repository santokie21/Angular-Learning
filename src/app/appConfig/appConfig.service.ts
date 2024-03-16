import { InjectionToken } from "@angular/core";
import { environment } from "../../environments/environment";
import { AppConfig } from "./appConfig.interface";

export const appServiceConfig = new InjectionToken<AppConfig>('appServiceConfig');

export const appConfig: AppConfig = {
  apiEndPoint: environment.apiEndPoint,
};
