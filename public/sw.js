self.addEventListener('fetch', function(e) {
    // ここは空でもOK
  })

// ファイブラリのインポート
importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js')

// ファイルのキャッシュ
workbox.precaching.precacheAndRoute([
  {
    url: '/index.html',
    revision: '12346'
  },
  {
    url: '/app.css',
    revision: '12346'
  },
  { 
　url: '/app.js',
    revision: '12346'
  },
])