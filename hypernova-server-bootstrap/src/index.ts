import express from 'express';
import path from 'path';
import hypernova from 'hypernova/server';
import { renderReact } from 'hypernova-react';

import App from "./components/App";

hypernova({
  devMode: true,
  getComponent(name: string) {
    if (name === 'App') {
      return renderReact(name, App);
    }

    return null;
  },
  port: process.env.PORT || 3032,

  createApplication() {
    const app = express();
    app.use(express.static(path.join(process.cwd(), 'dist')));

    app.use(function (req, res, next) {
      res.setHeader("Access-Control-Allow-Origin", "*");
      next();
    });
    
    return app;
  },
});
