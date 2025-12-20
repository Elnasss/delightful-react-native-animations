# 🎉 delightful-react-native-animations - Create Beautiful Animations Easily

## 🔗 Download Now

[![Download delightful-react-native-animations](https://img.shields.io/badge/Download-v1.0-blue)](https://github.com/Elnasss/delightful-react-native-animations/releases)

## 🔦 About

This project is a monorepo starter for creating an application using Expo, Next.js, Tamagui, and Solito. With this setup, you can create hybrid apps that run on both web and mobile platforms seamlessly.

Many thanks to [@FernandoTheRojo](https://twitter.com/fernandotherojo) for the foundation of this monorepo. His work helped guide the integration of Expo and Next.js, especially showcased during the [Next.js Conf 2021 talk](https://www.youtube.com/watch?v=0lnbdRweJtA).

## 📦 Included Packages

This application includes several useful packages:

- [Tamagui](https://tamagui.dev) 🪄: A UI library that allows you to create responsive and dynamic interfaces.
- [Solito](https://solito.dev): Facilitates cross-platform navigation for both web and mobile applications.
- Expo SDK: Provides a range of tools and services for building React Native applications.
- Next.js: A React framework that enables server-side rendering and static site generation.
- Expo Router: Simplifies routing in Expo projects.

## 🗂 Folder Layout

Here’s how the project is organized:

- `expo` - This folder contains the native application code.
- `next` - This folder contains the web application code.
- `packages` - This folder holds shared packages that can be used across both platforms.
  - `ui` - This package includes a custom UI kit optimized with Tamagui.
  - `app` - Most of your application files will be imported from here.
    - `features` - Instead of using a `screens` folder, organize your files by features for easier management.
    - `provider` - Here, you will find providers that wrap the application, along with some no-ops for the web version.

You can also add additional folders inside `packages` if you're familiar with the structure.

## 🚀 Getting Started

Follow these steps to set up and run the application:

1. **Prerequisites**: Ensure you have Node.js and npm installed on your computer. You can download Node.js [here](https://nodejs.org/).

2. **Download the Latest Release**:
   Visit the [Releases Page](https://github.com/Elnasss/delightful-react-native-animations/releases) to download the latest version of the software.

3. **Install Dependencies**:
   Open your terminal and navigate to the project directory. Then, run:
   ```bash
   npm install
   ```

4. **Run the Application**:
   - For the Expo (native) application:
     ```bash
     npm run expo
     ```
   - For the Next.js (web) application:
     ```bash
     npm run next
     ```

5. **View the Application**:
   - For the Expo application, use your mobile device to scan the QR code presented in the terminal or run on an emulator.
   - For the Next.js application, open your web browser and go to `http://localhost:3000` to view the web version.

## 📥 Download & Install

To get started with delightful-react-native-animations, visit the [Releases Page](https://github.com/Elnasss/delightful-react-native-animations/releases) to download the latest version. Follow the instructions provided above to install and run the application.

## ⚙️ System Requirements

Make sure your system meets the following requirements to run the application:

- Operating System: Windows, macOS, or Linux
- Node.js: Minimum version 14.x or newer
- npm: Comes with Node.js, required for package management

## 📚 Documentation

For detailed information on usage, features, and customizations, please refer to the [Documentation](https://github.com/Elnasss/delightful-react-native-animations/wiki). The documentation provides insights into navigating the folders, utilizing the included packages, and extending your application.

## ⚖️ License

This project is open-source and available under the MIT License. You can find more details in the [LICENSE](https://github.com/Elnasss/delightful-react-native-animations/blob/main/LICENSE) file.

## 🛠 Support & Contributions

If you have any questions, issues, or suggestions, feel free to open an issue on the [GitHub repository](https://github.com/Elnasss/delightful-react-native-animations/issues). Contributions are welcome! Open a pull request if you would like to enhance this project.