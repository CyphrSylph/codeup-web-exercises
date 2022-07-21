// import {showNotification} from "../messaging.js";
// import {getUser} from "../auth.js";

// const BASE_URI = `${BACKEND_HOST}/api/s3/download`;

const imgPaths = [
    'assets/jalopy1.jpeg',
    'assets/jalopy2.jpeg',
    'assets/jalopy3.jpeg',
]
let currentImgIndex= 1;

export default function homeHTMLFunction(props) {
    return `
        <header>
            <!-- 2. REPLACE THE h1 TEXT WITH "Hello Jalopy!" AND CENTER IT -->
            <h1 style="text-align: center">Hello Jalopy!</h1>
        </header>
        <main>
            <div>
                <!-- 4. ADD THE IMAGE jalopy1.jpeg ABOVE THE p -->
                <img src="assets/jalopy1.jpeg" id="jalopy1" alt="Jalopy">
                <!-- 7. CHANGE THE p TEXT TO "Welcome to my Jalopy application!" -->
                <p>
                    Welcome to my Jalopy application!
                </p>  
                <!-- 8. ADD A BUTTON UNDER THE p WITH AN ID OF img-button -->
                <button type="button" id="img-button">J-SWITCH</button>
            </div>
        </main>
    `;
}

/* 1. COMPLETELY REMOVE ALL CODE FROM HomeEvents() */
/* 9. Add an event listener for the button so that each time the button is clicked,
the image src cycles through the images jalopy1.jpeg, jalopy2.jpeg, and jalopy3.jpeg.
Therefore, the first time the button is clicked, the image should show jalopy2.jpeg.
When the image is showing jalopy3.jpeg and the button is clicked again, the image should show jalopy1.jpeg.
*/
export function homeJSFunction() {
    const button = document.querySelector('#img-button');
    button.addEventListener('click', function (e) {
        const img = document.querySelector('#jalopy1');
        img.setAttribute('src', imgPaths[currentImgIndex]);
        currentImgIndex++;
        if(currentImgIndex === 3) {
            currentImgIndex = 0;
        }
    });
}