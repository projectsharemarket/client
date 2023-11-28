import axios from 'axios';

//const client = axios.create();
const client = axios.create({
  baseURL: 'https://port-0-server-cn1vmr2clp99vkac.sel5.cloudtype.app/',
});

client.defaults.headers.common['Authorization'] = 'Bearer 33e86ac48e993d06bb3afd382863457e6bca79daf983ec4ba783e75999b1f4a000e686223b87f05659f7f85e0d369a596d32d2df6f76c41fca708c23a7c15488';

export default client;
