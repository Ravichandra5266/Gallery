import { Component } from "react";
import "./index.css";
import GalleryItem from "../GalleryItem";

const imagesList = [
  {
    id: 0,
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-thumbnail-img.png",
    imageAltText: "nature mountain with pond",
    thumbnailAltText: "nature mountain with pond thumbnail",
  },
  {
    id: 1,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/nature-sunset-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-sunset-thumbnail-img.png",
    imageAltText: "nature sunset",
    thumbnailAltText: "nature sunset thumbnail",
  },
  {
    id: 2,
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-thumbnail-img.png",
    imageAltText: "nature mountain with ocean",
    thumbnailAltText: "nature mountain with ocean thumbnail",
  },
  {
    id: 3,
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-thumbnail-img.png",
    imageAltText: "nature mountain with forest",
    thumbnailAltText: "nature mountain with forest thumbnail",
  },
  {
    id: 4,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/nature-leaves-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-leaves-thumbnail-img.png",
    imageAltText: "nature leaves",
    thumbnailAltText: "nature leaves thumbnail",
  },
  {
    id: 5,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/nature-tree-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-tree-thumbnail-img.png",
    imageAltText: "nature tree",
    thumbnailAltText: "nature tree thumbnail",
  },
  {
    id: 6,
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-waterfall-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-waterfall-thumbnail-img.png",
    imageAltText: "nature waterfall",
    thumbnailAltText: "nature waterfall thumbnail",
  },
  {
    id: 7,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/nature-river-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-river-thumbnail-img.png",
    imageAltText: "nature river",
    thumbnailAltText: "nature river thumbnail",
  },
];

class GalleryApp extends Component {
  state = {
    imageDetails: imagesList[0],
  };
  onChangeImage = (id) => {
    this.setState({
      imageDetails: imagesList[id],
    });
  };
  render() {
    const { imageDetails } = this.state;
    const { imageUrl, imageAltText, id } = imageDetails;
    console.log(imageDetails);
    return (
      <div className="container">
        <img src={imageUrl} alt={imageAltText} className="banner-img" />
        <h1>{imageAltText}</h1>
        <ul>
          {imagesList.map((each) => {
            return (
              <GalleryItem
                each={each}
                key={each.id}
                activeBtn={each.id === id}
                onChangeImage={this.onChangeImage}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
export default GalleryApp;
