import {
  WiDaySunny,
  WiNightClear,
  WiDayCloudy,
  WiNightPartlyCloudy,
  WiCloudy,
  WiNightCloudy,
  WiDaySunnyOvercast,
  WiDayFog,
  WiNightFog,
  WiDayShowers,
  WiNightShowers,
  WiDaySnow,
  WiNightSnow,
  WiDayRain,
  WiNightRain,
  WiDaySleet,
  WiNightSleet,
  WiDayThunderstorm,
  WiNightThunderstorm,
  WiAlien,
} from "react-icons/wi";

function getIcon(code, isDay = "yes", size = 32) {
  let icon;

  if (isDay === "yes") {
    switch (code) {
      case 113:
        icon = <WiDaySunny size={size} />;
        break;
      case 116:
        icon = <WiDayCloudy size={size} />;
        break;
      case 119:
        icon = <WiCloudy size={size} />;
        break;
      case 122:
        icon = <WiDaySunnyOvercast size={size} />;
        break;
      case 179:
      case 227:
      case 230:
        icon = <WiDaySnow size={size} />;
        break;
      case 182:
        icon = <WiDaySleet size={size} />;
        break;
      case 200:
        icon = <WiDayThunderstorm size={size} />;
        break;
      case 143:
      case 248:
      case 260:
        icon = <WiDayFog size={size} />;
        break;
      case 185:
      case 263:
      case 266:
      case 281:
      case 284:
        icon = <WiDayShowers size={size} />;
        break;
      case 176:
      case 293:
      case 296:
      case 299:
      case 302:
      case 305:
      case 308:
      case 311:
        icon = <WiDayRain size={size} />;
        break;
      default:
        icon = <WiAlien size={size} />;
    }
  } else {
    switch (code) {
      case 113:
        icon = <WiNightClear size={size} />;
        break;
      case 116:
        icon = <WiNightPartlyCloudy size={size} />;
        break;
      case 119:
      case 122:
        icon = <WiNightCloudy size={size} />;
        break;
      case 179:
      case 227:
      case 230:
        icon = <WiNightSnow size={size} />;
        break;
      case 182:
        icon = <WiNightSleet size={size} />;
        break;
      case 200:
        icon = <WiNightThunderstorm size={size} />;
        break;
      case 143:
      case 248:
      case 260:
        icon = <WiNightFog size={size} />;
        break;
      case 185:
      case 263:
      case 266:
      case 281:
      case 284:
        icon = <WiNightShowers size={size} />;
        break;
      case 176:
      case 293:
      case 296:
      case 299:
      case 302:
      case 305:
      case 308:
      case 311:
        icon = <WiNightRain size={size} />;
        break;
      default:
        icon = <WiAlien size={size} />;
    }
  }

  return icon;
}

export default getIcon;
