import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.jupiter.reader',
  appName: 'JupiterLn',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins:{
    SplashScreen:{
      androidScaleType: "CENTER_CROP",
      splashFullScreen: true,
      backgroundColor: "#002131",
      launchShowDuration: 3000,


  }}
};

export default config;
