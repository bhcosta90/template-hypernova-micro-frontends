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
  port: process.env.PORT || 3030,

  createApplication() {
    const app = express();
    app.use(express.static(path.join(process.cwd(), 'dist')));
    return app;
  },
});
