import { AfterViewInit, Component, ElementRef, OnInit } from "@angular/core";
import { ButtonColor, ButtonConfig } from "./button.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = "dom-operation-sample";
  buttonConfig: ButtonConfig[] = [
    {
      color: ButtonColor.primary,
      label: "primary",
    },
    {
      label: "secondary",
    },
  ];

  constructor(private el: ElementRef) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.test();
  }

  private test() {
    const appButtons = this.el.nativeElement.querySelectorAll("app-button");
    console.log(
      "%cCheck!",
      "font-size: 100px; color: blue; font-weight: bold",
      appButtons
    );

    appButtons.forEach((appButton: Node) => {
      console.log("appButton", appButton);

      // if (!appButton.buttonConfig?.color) {
      //   appButton.removeAttribute("color");
      // }
    });
    // this.buttonConfig.forEach((item) => {});
  }
}
