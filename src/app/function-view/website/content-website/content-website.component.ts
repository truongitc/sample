import { Component, OnInit } from "@angular/core";

@Component({
  selector: "content-website",
  templateUrl: "./content-website.component.html",
  styleUrls: ["./content-website.component.css"],
})
export class ContentWebsiteComponent implements OnInit {
  public items = [];

  private image1: any =
    "https://i.pinimg.com/474x/b6/85/42/b68542ded82a1f0a43f0fa7ced5504b9.jpg";
  private image2: any =
    "https://i.pinimg.com/564x/26/52/cc/2652cc9d35855516cab2b54e7d6b7338.jpg";
  private image3: any =
    "https://i.pinimg.com/564x/8d/c0/c9/8dc0c9ca7e8ff96ccb49b58577b09b06.jpg";
  private image4: any =
    "https://i.pinimg.com/564x/21/9e/c8/219ec84bd6bfb1019bf2089906b0941e.jpg";
  private image5: any =
    "https://i.pinimg.com/564x/63/5a/b6/635ab6ed2759ea33321d0c4d8bac971e.jpg";
  private image6: any =
    "https://i.pinimg.com/564x/80/e4/19/80e41968e10fd627ecec2d73132a35dc.jpg";
  constructor() {}

  ngOnInit() {
    for (let index = 0; index < 20; index++) {
      this.items.push(
        { src: this.image1 },
        { src: this.image2 },
        { src: this.image3 },
        { src: this.image4 },
        { src: this.image5 },
        { src: this.image6 }
      );
    }
  }
}