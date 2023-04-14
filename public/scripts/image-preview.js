const imagePickerElement = document.querySelector(
  "#image-upload-control input"
);
const imagePreviewElement = document.querySelector("#image-upload-control img");

function updateImgaePreview() {
  const files = imagePickerElement.files;

  if (!files || files.lenght === 0) {
    imagePreviewElement.style.display = "none";
    return;
  }

  const pickedFile = files[0];

  imagePreviewElement.src = URL.createObjectURL(pickedFile);
  imagePreviewElement.style.display = "block";
}

imagePickerElement.addEventListener("change", updateImgaePreview);
