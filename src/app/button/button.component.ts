import { Component, Input, OnInit } from "@angular/core";
import { ButtonConfig } from "../button.model";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
})
export class ButtonComponent implements OnInit {
  @Input() buttonConfig: ButtonConfig = { label: "" };

  constructor() {}

  ngOnInit(): void {}
}
