(App Functionality and Features)

This is a React Native app is designed to allow users to read the latest news articles from various sources. The app has the following features:

1- Login Screen:  - Users can create an account or log in to an existing one using their email and password.
                  - Users have to create an account with a valid email and password.
                  - Used Formik and Yup to create a validation schema in the registration and login.

2- Authentication: - The app uses Firebase authentication to authenticate users using tokens and securely store them on the device.
                   - Users remain logged in even if they close the app or restart their device.
                   - The access token for every user is saved to his device by async-storage, so he doesn't have to login again everytime.

3- Public API: The app uses the News API to retrieve the latest news articles from various sources. The API key is obtained by creating an account on News API.

4- Display News Articles: The app displays the latest news articles in a scrollable list. Each article includes the title, author, description, and an image.

5- Article Details: Users can select an article to view the full details, including the content, source, and a link to the original article.

6- Search Feature: The app also includes a search feature that allows users to search for articles by keyword.


(Running the app locally) 

(*) Prerequisites
- Node.js and npm installed on your machine.
- Expo CLI installed globally.
- An iOS or Android emulator, or a physical device to run the app on.


(*) Instructions
- Download the project files and unzip them or clone the repo.
- Open a terminal and navigate to the project directory.
- Run the following command to install the required dependencies: (npm install)
- Run the following command to start the app: (npx expo start)
-This will start the Expo development server and open a new browser tab. From here, you can choose to run the app in an emulator, or on a physical device:

    - To run the app on an emulator, click the "Run on Android device/emulator" or "Run on iOS simulator" button on the left side of the screen. This will open the          
        emulator and install the app on it.

    - To run the app on a physical device, download the Expo app on your device from the app store. Then, scan the QR code that appears in the browser tab with the 
      Expo app. This will install the app on your device and open it.
