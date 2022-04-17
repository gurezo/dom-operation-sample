export enum ButtonColor {
  primary = "primary",
  secondary = "seconrady",
}

export interface ButtonConfig {
  color: ButtonColor | undefined;
  label: string;
}
