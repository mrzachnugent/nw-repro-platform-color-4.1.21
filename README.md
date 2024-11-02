# Default `platformSelect` not working on web for v4.1.21

In the `tailwind.config.js` file, in the `withOpacity` function, the `platformSelect` function is used to select the correct color with the correct opacity value based on the platform. This function is not working on the web platform for v4.1.21.

> **Note:** This is not an issue in v4.0.36. You can checkout the `working-with-4.0.36` branch to see the correct behavior.

### Reproduction

1. Clone this repository `git clone https://github.com/mrzachnugent/nw-repro-platform-color-4.1.21.git`
2. Run `npm install`
3. Run `npm run web`
4. Once the web app is running, toggle the theme to dark mode and notice that the color of the texts and separator do not change.

> **Note:** The issue is not present in the native platforms. You can run `npm run android` or `npm run ios` to see the correct behavior.
