import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';

export interface SettingsStateInterface {
  isSubmmiting: boolean;
  validationErrors: BackendErrorsInterface | null;
}
