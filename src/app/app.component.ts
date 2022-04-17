import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from "@angular/core";
import { ButtonColor, ButtonConfig } from "./button.model";
import { ButtonComponent } from "./button/button.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = "dom-operation-sample";
  ButtonColor = ButtonColor;
  buttonConfig: ButtonConfig[] = [
    {
      color: ButtonColor.primary,
      label: "primary",
    },
    {
      color: ButtonColor.secondary,
      label: "secondary",
    },
  ];

  @ViewChildren(ButtonComponent) items: QueryList<ButtonComponent>;

  constructor(private el: ElementRef) {
    this.items = new QueryList();
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.test();
  }

  private test() {
    const appButtons = this.el.nativeElement.querySelectorAll("button");
    console.log(
      "%cCheck!",
      "font-size: 100px; color: blue; font-weight: bold",
      appButtons
    );

    console.log("items", this.items);

    // this.items.forEach((item) => {
    //   if (!item.buttonConfig?.color) {
    //     item..removeAttribute("color");
    //   }
    // });

    // console.log("buttonComponent", this.buttonComponent);

    // this.buttonComponent.nativ;

    appButtons.forEach((appButton: Node) => {
      console.log("appButton", appButton);

      // if (!appButton.buttonConfig?.color) {
      //   // appButton.ATTRIB
      //   // appButton.removeAttribute("color");
      // }
    });
    // this.buttonConfig.forEach((item) => {});
  }
}
