const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// Unsplash API
const count = 10;
const apiKey = 'jKteGLJOnheD7cwHZoGDdJgMgv9FFQuxE0QxZFM00eo';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Helper Function to Set Attributes on DOM Elements
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

// Create Elements For Links & Photos, Add to DOM
function displayPhotos() {
  // Run function for each object in photosArray
  photosArray.forEach((photo) => {
    // Create <a> to link to Unsplash
    const item = document.createElement('a');
    setAttributes(item, {
      href: photo.links.html,
      target: '_blank',
    });
    // Create <img> for photo
    const img = document.createElement('img');
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });
    // Put <img> inside <a>, then put both inside imageContainer Element
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

// Original way to set attributes
// img.setAttribute('href', photo.links.html)
// img.setAttribute('target', '_blank')
// img.setAttribute('src', photo.urls.regular)
// img.setAttribute('alt', photo.alt_description)
// img.setAttribute('title', photo.alt_description)



// Get photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    console.log(photosArray);
    displayPhotos();
  } catch (error) {
    // Catch Error Here
    console.log('no data returned', error);
  }
}

// Check to see if scrolling near bottom of page, Load More Photos
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) {
    getPhotos();
    console.log('load more');
    
  }
  console.log('scrolled');
  // only want to trigger scroll once at the end of page
});

// On Load
getPhotos();


// request fields
// alt_description: "gray textile on white textile"
// blur_hash: "LTI53t~pxut79a4.M{ofoJt7bHRk"
// categories: []
// color: "#8c7373"
// created_at: "2020-11-15T11:59:39-05:00"
// current_user_collections: []
// description: "Sweet dream"
// downloads: 3386

// links: {self: "https://api.unsplash.com/photos/3Ny38KziL7Y", html: "https://unsplash.com/photos/3Ny38KziL7Y",…}
// download: "https://unsplash.com/photos/3Ny38KziL7Y/download?ixid=MnwzMjc0Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIxOTMyODQ"
// download_location: "https://api.unsplash.com/photos/3Ny38KziL7Y/download?ixid=MnwzMjc0Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIxOTMyODQ"
// html: "https://unsplash.com/photos/3Ny38KziL7Y"
// self: "https://api.unsplash.com/photos/3Ny38KziL7Y"

// urls: {,…}
// full: "https://images.unsplash.com/photo-1650052448183-8c80c275ab8b?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMjc0Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIxOTM0Njk&ixlib=rb-1.2.1&q=85"
// raw: "https://images.unsplash.com/photo-1650052448183-8c80c275ab8b?ixid=MnwzMjc0Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIxOTM0Njk&ixlib=rb-1.2.1"
// regular: "https://images.unsplash.com/photo-1650052448183-8c80c275ab8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc0Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIxOTM0Njk&ixlib=rb-1.2.1&q=80&w=1080"
// small: "https://images.unsplash.com/photo-1650052448183-8c80c275ab8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc0Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIxOTM0Njk&ixlib=rb-1.2.1&q=80&w=400"
// small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1650052448183-8c80c275ab8b"
// thumb: "https://images.unsplash.com/photo-1650052448183-8c80c275ab8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjc0Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIxOTM0Njk&ixlib=rb-1.2.1&q=80&w=200"
