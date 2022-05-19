const cloudinaryUrl = "https://api.cloudinary.com/v1_1/dtelw4yz8/image/upload";

export async function UploadImage({ file }) {
    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", "canary");
    formData.append("folder", "Canary");

    return fetch(cloudinaryUrl, {
        method: "POST",
        body: formData,
    }).then((response) => response.json());
}
