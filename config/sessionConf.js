const session = require("express-session");
const MemcachedStore = require("connect-memcached")(session);

const getSessionConfg = (isProduction) => {
  const memoryStore = new session.MemoryStore();
  const cacheStore = new MemcachedStore({
    hosts: [
      process.env.MEMCACHED_URL
        ? process.env.MEMCACHED_URL
        : "http://localhost:11211",
    ],
    secret: "123, easy as ABC. ABC, easy as 123", // Optionally use transparent encryption for memcache session data
    ttl: process.env.TTL ? process.env.TTL : 300,
    maxExpiration: 300,
  });
  const SESSION_CONF = {
    secret: "this is my super super secret, secret!! shhhh",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
    store: memoryStore,
    maxExpiration: 90000,
  };
  if (isProduction) {
    console.log(
      `will set sessionstore to memcache ${process.env.MEMCACHED_URL}`
    );
    SESSION_CONF.store = cacheStore;
  }
  // set session managment
  if (process.env.HTTPS_COOKIES === true) {
    SESSION_CONF.cookie.secure = true; // serve secure cookies, i.e. only over https, only for production
  }
  return SESSION_CONF;
};

const getCacheStore = () => {
  return new MemcachedStore({
    hosts: [
      process.env.MEMCACHED_URL
        ? process.env.MEMCACHED_URL
        : "http://localhost:11211",
    ],
    secret: "123, easy as ABC. ABC, easy as 123", // Optionally use transparent encryption for memcache session data
    ttl: process.env.TTL ? process.env.TTL : 300,
    maxExpiration: 300,
  });
};

exports.getSessionConfg = getSessionConfg;
exports.getCacheStore = getCacheStore;
