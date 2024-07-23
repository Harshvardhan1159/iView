const { bucket } = require('./firebaseConfig');

const uploadFileOnFireBase = async (filePath, fileName) => {
  try {    
    const file = bucket.file(fileName);
    const stream = require('fs').createReadStream(filePath);

    await file.save(stream);

    const [url] = await file.getSignedUrl({
      action: 'read',
      expires: '03-09-2491', // Set an expiration date (optional)
    });

    console.log('File uploaded successfully:', url);
    return url;
  } catch (error) {
    console.error('Error uploading file:', error);
  }
};

module.exports={uploadFileOnFireBase};

// // Example usage:
// const filePath = './path/to/your/file.jpg';
// const fileName = 'my-image.jpg';

// uploadFileOnFireBase(filePath, fileName)
//   .then(url => {
//     // Use the generated URL to display the image, etc.
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });
