import { Component, OnInit } from "@angular/core";

@Component({
  selector: "content-website",
  templateUrl: "./content-website.component.html",
  styleUrls: ["./content-website.component.css"],
})
export class ContentWebsiteComponent implements OnInit {
  public items = [];

  private image: any = "https://i.pinimg.com/474x/b6/85/42/b68542ded82a1f0a43f0fa7ced5504b9.jpg";
  constructor() { }

  ngOnInit() {
    for (let index = 0; index < 20; index++) {
      this.items.push({ src: this.image });
    }
  }
}
