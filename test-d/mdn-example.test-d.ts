import * as tsd from "tsd";

import Manifest from "..";

tsd.expectAssignable<Manifest>({
  browser_specific_settings: {
    gecko: {
      id: "addon@example.com",
      strict_min_version: "42.0",
    },
  },

  background: {
    scripts: ["jquery.js", "my-background.js"],
  },

  browser_action: {
    default_icon: {
      "19": "button/geo-19.png",
      "38": "button/geo-38.png",
    },
    default_title: "Whereami?",
    default_popup: "popup/geo.html",
  },

  commands: {
    "toggle-feature": {
      suggested_key: {
        default: "Ctrl+Shift+Y",
        linux: "Ctrl+Shift+U",
      },
      description: "Send a 'toggle-feature' event",
    },
  },

  content_security_policy: "script-src 'self' https://example.com; object-src 'self'",

  content_scripts: [
    {
      exclude_matches: ["*://developer.mozilla.org/*"],
      matches: ["*://*.mozilla.org/*"],
      js: ["borderify.js"],
    },
  ],

  default_locale: "en",

  description: "...",

  icons: {
    "48": "icon.png",
    "96": "icon@2x.png",
  },

  key: "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqaEp1xRxEpWIQCUlbH0cbhT3WXrg3gleGO+N80EbTB0ROiXGXBun3NpHv5ZjQ1CazZbZ+2WndpkWmaxaDUemlt6oOmd7xL0csdfXbd5GcTOC9fp0FX8XJO/PQnvB+PPCpy13w/iELGp8KHvHQ8eA6K33ZgpxdzO/RTCin+p0rt0sZq070r8yIobZSbc+vl0r8B3OLQ5TH+31NNp0dlgDQDtB+d9dyz/XBEO3KWjFknHAJs1nkUzqVSoNVdHAZhov39sG9xBXPIuvdkVGOkI1UcKLkdk5tJibFuWD0T0MVA0pnfBMxDXkEQCink4DgyXn9wjUNZiLjSGalwq25lydlwIDAQAB",

  manifest_version: 2,

  name: "...",

  page_action: {
    default_icon: {
      "19": "button/geo-19.png",
      "38": "button/geo-38.png",
    },
    default_title: "Whereami?",
    default_popup: "popup/geo.html",
  },

  permissions: ["webNavigation"],

  version: "0.1",

  user_scripts: {
    api_script: "apiscript.js",
  },

  web_accessible_resources: ["images/my-image.png"],
});
