if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return a[e]||(i=new Promise((async i=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},i=(i,a)=>{Promise.all(i.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(i)};self.define=(i,s,t)=>{a[i]||(a[i]=Promise.resolve().then((()=>{let a={};const r={uri:location.origin+i.slice(1)};return Promise.all(s.map((i=>{switch(i){case"exports":return a;case"module":return r;default:return e(i)}}))).then((e=>{const i=t(...e);return a.default||(a.default=i),a}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/framework-64eb7138163e04c228e4.js",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/chunks/main-1b0f1fd287f08bad6012.js",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/chunks/pages/_app-287410bc3759bc77a56d.js",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/chunks/pages/_error-94ed2348718d59e1af9b.js",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/chunks/pages/index-ed461f15cc4c8d64c0e4.js",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/chunks/pages/starting-3387419559dd0299cebc.js",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/chunks/webpack-04202ec59993f30e098a.js",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/css/1753be629f3955e3f52a.css",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/css/47305371a8ca9fa4971a.css",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/css/f20aee609cf06a4d1e39.css",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/dsRwEDi3jGSfQO-HrqoL2/_buildManifest.js",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/dsRwEDi3jGSfQO-HrqoL2/_ssgManifest.js",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/images/community-2d988b0d099607665ecb4ac5203c3cc0.png",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/images/enterprise-5d898e89a89b5fa5712fed437696e4c5.png",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/images/githubLogo-008c061d1f2516cda1e5703fd50f5582.png",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/RedHatDisplay-Bold.24515e9b56a0ccb45480745371340bf3.woff",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/RedHatDisplay-Bold.723874f47b7995027c3b694710daf3ad.eot",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/RedHatDisplay-Medium.3023e2f376de504d668dc6475951ee44.eot",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/RedHatDisplay-Medium.732b5ddbe8d56f5462b65b1d3dd8c623.woff",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/RedHatDisplay-Regular.77929aa7a8bd4b6672291e36a2dbba50.woff",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/RedHatDisplay-Regular.d49398e959e1af4cecdde62240870ea8.eot",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/RedHatText-Medium.47a03d213b0b35080e32a228d03a9b7b.woff",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/RedHatText-Medium.6130c5df0f4986af98b7fba4ba4bcb51.eot",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/RedHatText-Regular.4f3a0124fea180a47d7a1df04fcbaff3.eot",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/RedHatText-Regular.81aade5a7b362566b19989503d7db8e6.woff",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-bold-italic.89a09f63411d174b18eaf96cf12e6b45.woff2",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-bold-italic.e716d42b789e4e3778722783563a6000.eot",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-bold-italic.e7bea4af7086ce0144fcfd9bac2b4db8.woff",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-bold-italic.f8525e8f2934024270c05645c3165e26.ttf",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-bold.4363e0967fae81c7b2e998af94e63a6b.eot",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-bold.8aae586c8c4d72be50c1c63bfc5e9a0c.woff",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-bold.b6f1c5d0f6f5656cd4da7912b738d103.ttf",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-bold.cf06a52fa81e76cc6b012dda91c73a0a.woff2",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-extrabold-italic.190776b0696119b93c713b03022c2aea.woff2",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-extrabold-italic.800277ea3e98b616b60fd7d58b68c5de.woff",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-extrabold-italic.cb9cea9527d93dd0c49b2cd100e5ad06.ttf",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-extrabold-italic.d8b3d123ad39e5f0d1cb287c715749a2.eot",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-extrabold.3cd11726d843ff40c40b787e1713d88d.woff",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-extrabold.8584d6d2426caac44a12cbdcffb3242f.woff2",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-extrabold.b827a4430acb1d15184f243015b88783.eot",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-extrabold.e12873666d74f0ad16dc7961a39b2c25.ttf",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-extralight-italic.269ca6c83388f975ccfa735f3fdd202a.woff2",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-extralight-italic.73ab4e0a0342b521248dabad12abed12.ttf",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-extralight-italic.bc0502ffc24dc33b8c5ab9b2e9f975aa.woff",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-extralight-italic.ed58ea35cdc962672ed10e55edb38d99.eot",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-extralight.4fa1de252bbe1c58624329414c3e0185.eot",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-extralight.60cc25d4be2d99536ede155e87e70497.woff2",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-extralight.bd43f64ce4046b35e472987d2b9e54af.ttf",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-extralight.c0276d79b017a9c2476b21c0b455e799.woff",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-heavy-italic.093a799496f66d24a5516094eef29a1e.eot",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-heavy-italic.23fc486b36786bafb3d3f98ed9112b16.woff",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-heavy-italic.57649dc00d7d7f3e83030c8155d11fce.ttf",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-heavy-italic.95fdf61ffc45f12737c2d8486cd01cc7.woff2",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-heavy.11855d3f3f99709dfac5b4602a2a40df.woff2",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-heavy.b5204399f16e72d2a60db653a5c9b1a2.ttf",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-heavy.d88b666483405a79d23a37c08dfd0dae.eot",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-heavy.e9d4a1e9285e4454ef7ede0bde9d91c8.woff",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-italic.35d01efdc213d0af0d00076e16120b03.woff",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-italic.86ba5ba47b776c463f383530d611bb88.eot",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-italic.ab4371a522c3fce8ad2deb09c8441f03.woff2",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-italic.feb05e55fca18e8e964beeeb233b3ed4.ttf",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-light-italic.0a4b379b6ff0ec5eacdead5e4b6f7d81.ttf",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-light-italic.34d0b88404c4cacdb933488301bfd2d2.eot",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-light-italic.59058fe454d37a189fb9f60dc97d4911.woff2",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-light-italic.ac78b4f2e64edfb5859ad0a12204d8bc.woff",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-light.176868e8875b80fac8dc087ebf7ab4df.eot",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-light.1c45e67be7e91ed0a6258f40069cabe2.ttf",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-light.549231141115a61fa57d85de91606632.woff",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-light.675eb11fb9e055cea6a4fd14456b988a.woff2",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-mono-bold.4515cb6498e51adec9d83a943a26eaac.eot",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-mono-bold.69bf841bb989a00109720150d8579072.woff2",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-mono-bold.7799d9401910e36d7bb25fe666ff8f82.woff",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-mono-bold.95cea96f95f5e7335023df997f1da395.ttf",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-mono-light.0be5ef4bb345cde8d81213bcfec90faf.eot",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-mono-light.99464515aba730eab16cd5afc359342e.woff2",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-mono-light.bfe9360ac1bb3b5fd3ea3833a105fcee.ttf",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-mono-light.d6b6f0c7a2af826d139da6f980d3a399.woff",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-mono-regular.053c8708cdba2dac36e7648de0f6c293.eot",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-mono-regular.64fbabef5af5f881f4ccb89da65478a0.ttf",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-mono-regular.7150021df2ae6bcf6c175dcea3598a26.woff2",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-mono-regular.db4223ab0faaec898da7e21ef4a4171a.woff",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-mono-semibold.4bc0afcdb6ba85a4c1fafedb3e7f2ba8.ttf",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-mono-semibold.54b2e33870ba270ba774f1c800d25d18.woff2",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-mono-semibold.7d5ee241230ae4dfcd25d0afc67425d0.eot",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-mono-semibold.88ade95ac9a035be71684bc35ae7538f.woff",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-regular.14f8b4c85aa91125dbb76c93392291d1.eot",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-regular.246cf166b6945bf1c584952a414d820d.woff2",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-regular.5e77435167651c698aaa0c8cafb1f8dd.ttf",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-regular.817d3df17057373e2c4645b790bb7c49.woff",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-semibold-italic.323f30b3399fdc516b30cad3835a8635.woff2",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-semibold-italic.750945a4e9323d09a528605517fb2944.ttf",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-semibold-italic.755f9be7c2de8991f989605b817685ea.eot",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-semibold-italic.8d723ad7cfca2dfffacbf2984ab800f8.woff",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-semibold.1353c4d0aedbc7afbc83d34a8fd5b2f4.eot",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-semibold.164a0ab4c909b911c99b5a333ed399c9.woff",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-semibold.61142d93d0198cb3c1608a39fd7d2cbe.woff2",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-semibold.61cde7438158d1e8f397eb45872b3ebf.ttf",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-thin-italic.3278ae4a3a97d92b639c68528ff29738.woff2",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-thin-italic.4a8547976f936fc4a6e2fa9e7531edad.eot",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-thin-italic.4e7303418fcbe51f818f488053e2154a.ttf",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-thin-italic.ac4ae66cc059959cf8b7b85c7eb13260.woff",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-thin.06037ca2cf8525d353a1ce4183a8cb95.woff2",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-thin.0a38e7ad901439687fdea46359592e13.ttf",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-thin.1904b4e1c18b4fc19778b6a2a57edc6e.woff",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/overpass-thin.8337c6c044fba48ede0b1ea0d98072c7.eot",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/pfbg_2000.3b693db01ef2135e3f14fd3604f355aa.jpg",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/pfbg_576.b64efab6836e719c0e314a6193789170.jpg",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/pfbg_576@2x.08322afb8640616a622814aa8f714b84.jpg",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/pfbg_768.56faebeaec23b1c7d7d387f000025996.jpg",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/pfbg_768@2x.eea28e73c0df6dbbb1ff0ffde38c6c0e.jpg",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/pfbg_992@2x.30e8d31f821a144fe52cf00417648038.jpg",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/pficon.2b49b761774b43b671f4c2f71c83a707.ttf",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/pficon.3d1587a07135392f3adb87fbf5fd554a.woff2",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/pficon.7ff59a15affc340fcf507f3a6c93d629.eot",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/pficon.8a4f6e5dded87b5185ccbc85df3fa821.svg",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/_next/static/media/pficon.f30ba6d4dfc97da0432ced4e9594b703.woff",revision:"dsRwEDi3jGSfQO-HrqoL2"},{url:"/images/cogs.png",revision:"69b05fb685b7a824f21df101d9b9b763"},{url:"/images/community.png",revision:"bf342250cb5960c2497872f77e6510d2"},{url:"/images/devfileLogo.svg",revision:"130dcd05a052b81b5d19e157675cb4f5"},{url:"/images/devfileWhiteText.svg",revision:"c4fef41fc5c681e25526fabe37369d9e"},{url:"/images/enterprise.png",revision:"36c68f5f3426a046afca6749fd579055"},{url:"/images/githubLogo.png",revision:"80087662d61fa8b4f3ec166e85664089"},{url:"/images/icons/favicon.ico",revision:"2566337e16b3bb246c7b10b424461243"},{url:"/images/icons/pwa-192x192.png",revision:"57459f9c0ff56c9e06dc1df9ba2dacac"},{url:"/images/icons/pwa-512x512.png",revision:"a3dcc8a347ff8e499d380cc181ed6585"},{url:"/manifest.json",revision:"a537e9fdebedf8861dc02c6158d93638"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:a,state:s})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const i=e.pathname;return!i.startsWith("/api/auth/")&&!!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600,purgeOnQuotaError:!0})]}),"GET")}));
