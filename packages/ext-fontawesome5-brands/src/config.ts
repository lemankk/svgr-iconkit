import { IconsIconSVGetSVG, IconsMapType } from "@svgr-iconkit/core";
import * as AllIcons from "@fortawesome/free-brands-svg-icons";
export const familyName: string = "FontAwesome5-Brands";

export const map: IconsMapType<string> = {};

export const icons: IconSVG[] = Object.keys(AllIcons)

  .filter((name) => name.startsWith("fa") && name.length > 3)
  .map((name) => {
    const { iconName = "", icon: config = [] } = (AllIcons as any)[name];
    const [width, height, _, _charCode, path] = config || [
      100,
      100,
      [],
      "",
      "",
    ];

    const iconConfig: IconSVG = {
      name: iconName,
      width,
      height,
      data: [{ tagName: "path", attrs: { d: path } }],
    };

    map[iconName] = iconConfig;

    return iconConfig;
  });

// types
export type IconNames =
  | "500px"
  | "accessible-icon"
  | "accusoft"
  | "acquisitions-incorporated"
  | "adn"
  | "adversal"
  | "affiliatetheme"
  | "airbnb"
  | "algolia"
  | "alipay"
  | "amazon-pay"
  | "amazon"
  | "amilia"
  | "android"
  | "angellist"
  | "angrycreative"
  | "angular"
  | "app-store-ios"
  | "app-store"
  | "apper"
  | "apple-pay"
  | "apple"
  | "artstation"
  | "asymmetrik"
  | "atlassian"
  | "audible"
  | "autoprefixer"
  | "avianex"
  | "aviato"
  | "aws"
  | "bandcamp"
  | "battle-net"
  | "behance-square"
  | "behance"
  | "bimobject"
  | "bitbucket"
  | "bitcoin"
  | "bity"
  | "black-tie"
  | "blackberry"
  | "blogger-b"
  | "blogger"
  | "bluetooth-b"
  | "bluetooth"
  | "bootstrap"
  | "btc"
  | "buffer"
  | "buromobelexperte"
  | "buy-n-large"
  | "buysellads"
  | "canadian-maple-leaf"
  | "cc-amazon-pay"
  | "cc-amex"
  | "cc-apple-pay"
  | "cc-diners-club"
  | "cc-discover"
  | "cc-jcb"
  | "cc-mastercard"
  | "cc-paypal"
  | "cc-stripe"
  | "cc-visa"
  | "centercode"
  | "centos"
  | "chrome"
  | "chromecast"
  | "cloudflare"
  | "cloudscale"
  | "cloudsmith"
  | "cloudversify"
  | "codepen"
  | "codiepie"
  | "confluence"
  | "connectdevelop"
  | "contao"
  | "cotton-bureau"
  | "cpanel"
  | "creative-commons-by"
  | "creative-commons-nc-eu"
  | "creative-commons-nc-jp"
  | "creative-commons-nc"
  | "creative-commons-nd"
  | "creative-commons-pd-alt"
  | "creative-commons-pd"
  | "creative-commons-remix"
  | "creative-commons-sa"
  | "creative-commons-sampling-plus"
  | "creative-commons-sampling"
  | "creative-commons-share"
  | "creative-commons-zero"
  | "creative-commons"
  | "critical-role"
  | "css3-alt"
  | "css3"
  | "cuttlefish"
  | "d-and-d-beyond"
  | "d-and-d"
  | "dailymotion"
  | "dashcube"
  | "deezer"
  | "delicious"
  | "deploydog"
  | "deskpro"
  | "dev"
  | "deviantart"
  | "dhl"
  | "diaspora"
  | "digg"
  | "digital-ocean"
  | "discord"
  | "discourse"
  | "dochub"
  | "docker"
  | "draft2digital"
  | "dribbble-square"
  | "dribbble"
  | "dropbox"
  | "drupal"
  | "dyalog"
  | "earlybirds"
  | "ebay"
  | "edge-legacy"
  | "edge"
  | "elementor"
  | "ello"
  | "ember"
  | "empire"
  | "envira"
  | "erlang"
  | "ethereum"
  | "etsy"
  | "evernote"
  | "expeditedssl"
  | "facebook-f"
  | "facebook-messenger"
  | "facebook-square"
  | "facebook"
  | "fantasy-flight-games"
  | "fedex"
  | "fedora"
  | "figma"
  | "firefox-browser"
  | "firefox"
  | "first-order-alt"
  | "first-order"
  | "firstdraft"
  | "flickr"
  | "flipboard"
  | "fly"
  | "font-awesome-alt"
  | "font-awesome-flag"
  | "font-awesome-logo-full"
  | "font-awesome"
  | "fonticons-fi"
  | "fonticons"
  | "fort-awesome-alt"
  | "fort-awesome"
  | "forumbee"
  | "foursquare"
  | "free-code-camp"
  | "freebsd"
  | "fulcrum"
  | "galactic-republic"
  | "galactic-senate"
  | "get-pocket"
  | "gg-circle"
  | "gg"
  | "git-alt"
  | "git-square"
  | "git"
  | "github-alt"
  | "github-square"
  | "github"
  | "gitkraken"
  | "gitlab"
  | "gitter"
  | "glide-g"
  | "glide"
  | "gofore"
  | "goodreads-g"
  | "goodreads"
  | "google-drive"
  | "google-pay"
  | "google-play"
  | "google-plus-g"
  | "google-plus-square"
  | "google-plus"
  | "google-wallet"
  | "google"
  | "gratipay"
  | "grav"
  | "gripfire"
  | "grunt"
  | "guilded"
  | "gulp"
  | "hacker-news-square"
  | "hacker-news"
  | "hackerrank"
  | "hips"
  | "hire-a-helper"
  | "hive"
  | "hooli"
  | "hornbill"
  | "hotjar"
  | "houzz"
  | "html5"
  | "hubspot"
  | "ideal"
  | "imdb"
  | "innosoft"
  | "instagram-square"
  | "instagram"
  | "instalod"
  | "intercom"
  | "internet-explorer"
  | "invision"
  | "ioxhost"
  | "itch-io"
  | "itunes-note"
  | "itunes"
  | "java"
  | "jedi-order"
  | "jenkins"
  | "jira"
  | "joget"
  | "joomla"
  | "js-square"
  | "js"
  | "jsfiddle"
  | "kaggle"
  | "keybase"
  | "keycdn"
  | "kickstarter-k"
  | "kickstarter"
  | "korvue"
  | "laravel"
  | "lastfm-square"
  | "lastfm"
  | "leanpub"
  | "less"
  | "line"
  | "linkedin-in"
  | "linkedin"
  | "linode"
  | "linux"
  | "lyft"
  | "magento"
  | "mailchimp"
  | "mandalorian"
  | "markdown"
  | "mastodon"
  | "maxcdn"
  | "mdb"
  | "medapps"
  | "medium-m"
  | "medium"
  | "medrt"
  | "meetup"
  | "megaport"
  | "mendeley"
  | "microblog"
  | "microsoft"
  | "mix"
  | "mixcloud"
  | "mixer"
  | "mizuni"
  | "modx"
  | "monero"
  | "napster"
  | "neos"
  | "nimblr"
  | "node-js"
  | "node"
  | "npm"
  | "ns8"
  | "nutritionix"
  | "octopus-deploy"
  | "odnoklassniki-square"
  | "odnoklassniki"
  | "old-republic"
  | "opencart"
  | "openid"
  | "opera"
  | "optin-monster"
  | "orcid"
  | "osi"
  | "page4"
  | "pagelines"
  | "palfed"
  | "patreon"
  | "paypal"
  | "penny-arcade"
  | "perbyte"
  | "periscope"
  | "phabricator"
  | "phoenix-framework"
  | "phoenix-squadron"
  | "php"
  | "pied-piper-alt"
  | "pied-piper-hat"
  | "pied-piper-pp"
  | "pied-piper-square"
  | "pied-piper"
  | "pinterest-p"
  | "pinterest-square"
  | "pinterest"
  | "playstation"
  | "product-hunt"
  | "pushed"
  | "python"
  | "qq"
  | "quinscape"
  | "quora"
  | "r-project"
  | "raspberry-pi"
  | "ravelry"
  | "react"
  | "reacteurope"
  | "readme"
  | "rebel"
  | "red-river"
  | "reddit-alien"
  | "reddit-square"
  | "reddit"
  | "redhat"
  | "renren"
  | "replyd"
  | "researchgate"
  | "resolving"
  | "rev"
  | "rocketchat"
  | "rockrms"
  | "rust"
  | "safari"
  | "salesforce"
  | "sass"
  | "schlix"
  | "scribd"
  | "searchengin"
  | "sellcast"
  | "sellsy"
  | "servicestack"
  | "shirtsinbulk"
  | "shopify"
  | "shopware"
  | "simplybuilt"
  | "sistrix"
  | "sith"
  | "sketch"
  | "skyatlas"
  | "skype"
  | "slack-hash"
  | "slack"
  | "slideshare"
  | "snapchat-ghost"
  | "snapchat-square"
  | "snapchat"
  | "soundcloud"
  | "sourcetree"
  | "speakap"
  | "speaker-deck"
  | "spotify"
  | "squarespace"
  | "stack-exchange"
  | "stack-overflow"
  | "stackpath"
  | "staylinked"
  | "steam-square"
  | "steam-symbol"
  | "steam"
  | "sticker-mule"
  | "strava"
  | "stripe-s"
  | "stripe"
  | "studiovinari"
  | "stumbleupon-circle"
  | "stumbleupon"
  | "superpowers"
  | "supple"
  | "suse"
  | "swift"
  | "symfony"
  | "teamspeak"
  | "telegram-plane"
  | "telegram"
  | "tencent-weibo"
  | "the-red-yeti"
  | "themeco"
  | "themeisle"
  | "think-peaks"
  | "tiktok"
  | "trade-federation"
  | "trello"
  | "tripadvisor"
  | "tumblr-square"
  | "tumblr"
  | "twitch"
  | "twitter-square"
  | "twitter"
  | "typo3"
  | "uber"
  | "ubuntu"
  | "uikit"
  | "umbraco"
  | "uncharted"
  | "uniregistry"
  | "unity"
  | "unsplash"
  | "untappd"
  | "ups"
  | "usb"
  | "usps"
  | "ussunnah"
  | "vaadin"
  | "viacoin"
  | "viadeo-square"
  | "viadeo"
  | "viber"
  | "vimeo-square"
  | "vimeo-v"
  | "vimeo"
  | "vine"
  | "vk"
  | "vnv"
  | "vuejs"
  | "watchman-monitoring"
  | "waze"
  | "weebly"
  | "weibo"
  | "weixin"
  | "whatsapp-square"
  | "whatsapp"
  | "whmcs"
  | "wikipedia-w"
  | "windows"
  | "wix"
  | "wizards-of-the-coast"
  | "wodu"
  | "wolf-pack-battalion"
  | "wordpress-simple"
  | "wordpress"
  | "wpbeginner"
  | "wpexplorer"
  | "wpforms"
  | "wpressr"
  | "xbox"
  | "xing-square"
  | "xing"
  | "y-combinator"
  | "yahoo"
  | "yammer"
  | "yandex-international"
  | "yandex"
  | "yarn"
  | "yelp"
  | "yoast"
  | "youtube-square"
  | "youtube"
  | "zhihu";
