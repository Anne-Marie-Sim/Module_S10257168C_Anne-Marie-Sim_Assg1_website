function toggleImage() {
    var imageContainer = document.getElementById("imageContainer");
    var currentImage = imageContainer.querySelector("img");
    var images = ["https://www.dibpic.com/uploads/posts/2023-10/1696448063_y5ijc2u1bg5da_600.jpg", "https://www.img2link.com/images/2023/12/01/c01212f7ec9e9a4b59814f9c39844333.png", "https://www.img2link.com/images/2023/12/01/af4635c75b5cb977f3d2012767b8acab.png"];
    var currentIndex = images.indexOf(currentImage.src);
    var nextIndex = (currentIndex + 1) % images.length;
    currentImage.src = images[nextIndex];
}
