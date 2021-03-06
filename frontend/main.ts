import { DefaultApi, Configuration } from "../generated/client";
const client = new DefaultApi(new Configuration({
  basePath: `http://localhost:8080`,
  baseOptions: {
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  },
}));

window.addEventListener('load', async () => {
  const res = await client.getUser({ id: 'dummy-id' });
  const resElem = document.querySelector('.res');
  resElem && (resElem.textContent = JSON.stringify(res.data, null, '  '));
})
