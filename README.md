# React Native Cake Ordering App

### Independent Capstone Project for CSCI 370: Mobile Application Development

This React Native application is designed to streamline the process of ordering delicious cakes. Below is an overview of the app's functionality and features:

## Features
1. Home Screen
    * Upon opening the app, user are greeted with a home screen featuring a description of the bakery, an image of the product, and a prominent "Order Now" button.
2. Gallery Screen
    * A gallery screen showcases a variety of cakes available for order.
    * Users can browse through images using pop-up modals to help them make their decision.
3. Order Form
    * The "Order Now" button or "Order" tab at the bottom navigated users through a 4-page order form.
    *   Page 1: Personal Information and Delivery Details (Date, Time)
    *   Page 2: Cake Size and Flavor Preferences
    *   Page 3: Payment Information and Address
    *   Page 4: Order Summary and Confirmation
4. Completed Orders Screen
    * The screen displays "No current orders" until an order is successfully placed.
    * Once an order is successfully placed, users can view their completed orders on a dedicated screen.
    * Orders are displayed with details such as delivery information, cake details, and contact information.
5. Navigation
    * The app utilizes React Navigation for seamless navigation between screens, ensuring a smooth user experience.
    * The app utilizes Tab Navigation at the bottom of the screen to give the user a clear understanding of where they are within the app.
    * The order form uses Stack Navigation to keep track of where within the order form the user is and allow the ability to move backwards in the order screen if necessary.
6. User Experience
    * The interface is designed to be intuitive and user-friendly, guiding users through the order process step-by-step.
    * Error handling and validation ensure that users provide necessary information and receive feedback on their orders.


## Getting Started
To run the Cake Ordering App locally or deploy it:
1. Prerequisites
   * Ensure you have Node.js installed.
   * Install Expo CLI globally: `npm install -g expo-cli`
2. Installation
   * Clone the repository: `git clone <repository_url>`
   * Navigate to the project directory: `cd cakeOrderingApp`
   * Install dependencies: `npm install`
3. Running the App
   * Start the development server: `expo start`
   * Follow Expo's instructions to open the app on an emulator or scan the QR code with the Expo Go app on your mobile device.
4. Deployment
   * To deploy the app for production, follow Expo's deployment guidelines.




This README provides a brief overview of the Cake Ordering App. For detailed documentation and code, please refer to the project repositroy. Enjoy ordering your favorite cakes hassle-free with our app!
