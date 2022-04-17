import { Component, Input, OnInit } from "@angular/core";
import { ButtonColor, ButtonConfig } from "../button.model";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
  host: {
    "[class.primary]": "color === primary",
    "[class.secondrary]": "color === secondrary",
  },
})
export class ButtonComponent implements OnInit {
  @Input() buttonConfig: ButtonConfig = { color: undefined, label: "" };
  @Input() color: ButtonColor | undefined = undefined;

  constructor() {}

  ngOnInit(): void {}
}
