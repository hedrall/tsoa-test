// @ts-ignore
import SwaggerUI from 'swagger-ui';
import 'swagger-ui/dist/swagger-ui.css';

const spec = require('../../generated/open-api.json');

SwaggerUI({
  dom_id: '#root',
  spec,
});
