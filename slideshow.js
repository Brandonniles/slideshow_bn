slideshow = {
  photoList: ['frog.jpg', 'eagle.jpg', 'tiger.jpg'],
  currentPhotoIndex: 0,
  nextPhoto: function() {
    for (this.currentPhotoIndex = 0; this.currentPhotoIndex < this.photoList.length; this.currentPhotoIndex++) {
      console.log(this.photoList[this.currentPhotoIndex]);
    }
    console.log("End of slideshow");
  },

  prevPhoto: function() {
    for (this.currentPhotoIndex = this.photoList.length - 1; this.currentPhotoIndex >= 0; this.currentPhotoIndex--) {
      console.log(this.photoList[this.currentPhotoIndex]);
    }
    console.log("End of slideshow");
  },

  getCurrentPhoto: function() {
    for (this.currentPhotoIndex = 0; this.currentPhotoIndex < this.photoList.length; this.currentPhotoIndex++) {
      console.log(this.photoList[this.currentPhotoIndex]);
    }
  }
  
};