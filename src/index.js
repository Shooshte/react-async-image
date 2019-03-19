import React, { Component } from "react";
import "./index.css";

export default class Image extends Component {
  state = {
    hasPlaceholderError: false,
    hasImageError: false,
    isLoadingPlaceholder: true,
    isLoading: true
  };

  onLoadPlaceholder = () => {
    this.setState({
      isLoadingPlaceholder: false
    });
  };

  onLoadImage = () => {
    this.setState({
      isLoading: false
    });
  };

  onPlaceholderError = () => {
    this.setState({
      hasPlaceholderError: true
    });
  };

  onImageError = () => {
    this.setState({
      hasError: true
    });
  };

  render() {
    const {
      isLoadingPlaceholder,
      isLoading,
      hasImageError,
      hasPlaceholderError
    } = this.state;
    const {
      width,
      height,
      placeholderImage,
      actualImage,
      placeholderColor
    } = this.props;

    return (
      <div
        style={{
          width: width,
          height: height,
          backgroundColor: placeholderColor
        }}
      >
        {!hasPlaceholderError && (
          <img
            className={
              isLoadingPlaceholder
                ? "transparent"
                : isLoading
                ? "fade-in placeholder"
                : "transparent"
            }
            style={{
              width: width,
              height: height,
              position: "absolute"
            }}
            src={placeholderImage}
            onLoad={this.onLoadPlaceholder}
            onError={this.onPlaceholderError}
          />
        )}
        {!hasImageError && (
          <img
            className={isLoading ? "transparent" : "fade-in"}
            style={{
              width: width,
              height: height,
              position: "absolute"
            }}
            src={actualImage}
            onLoad={this.onLoadImage}
            onError={this.onImageError}
          />
        )}
      </div>
    );
  }
}
