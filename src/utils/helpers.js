// import { APPS } from "./constants";

export function getSubdomain() {
    const loc = window.location.hostname;
    console.log(loc);
    const locationParts = loc.split('.')

    var sliceTill = -2

    const isLocalhost = locationParts[locationParts.length - 1] === 'localhost'
    if (isLocalhost) sliceTill = -1

    return locationParts.slice(0, sliceTill).join("")

}
