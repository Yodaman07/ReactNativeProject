# ReactNativeProject
A small test project to get myself familiar with React Native

# Platforms
MacOS (Supported and Working)

Andriod (Untested)

Web (Untested)


![example workflow](https://github.com/Yodaman07/ReactNativeProject/actions/workflows/codeql.yml/badge.svg)

# Helpful Commands

```bash
# specify an ios simulator
# the react-native@latest part makes sure the cli is up to date
npx react-native@latest run-ios --simulator="INSERT IPHONE NAME"

#basic ios
npx react-native run-ios

# runs metro server for debugging/running in ios or android
npm start

# checks the environment is configured
npx react-native doctor

# finds outdated npm packages
npm outdated

# regularly and forcefully updates npm packages
npm update

npm update --force

# get available simulators
xcrun simctl list devices

# goes into the ios directory
cd ios

pod repo update
# or
pod update
# both will update the podfile.lock of what packages are needed (to my knowledge)

pod install
# updates/installs all necessary pods from the podfile.lock

pod install --repo-update
# runs both tasks at the same time

```

# Libraries
## ReactNavigation
[Documentation](https://reactnavigation.org/) 

[Official Installation Instructions](https://reactnavigation.org/docs/getting-started)

Quick Start:
Install the necessary libraries with these commands:

```bash

npm install @react-navigation/native

npm install @react-navigation/bottom-tabs

npm install react-native-safe-area-context react-native-screens

npx pod-install ios

```


## ReactNativeFirebase
[Documentation](https://rnfirebase.io/)

Quick Start:
Here are the necessary commands to install ReactNativeFirebase

`npm install --save @react-native-firebase/app`



Installed with the guide on the website (some of the methods to set up are incorrect, so I would recommend following [this](https://stackoverflow.com/questions/73416469/after-installing-react-native-firebase-app-its-build-will-failed-in-react-nativ) guide as well )



