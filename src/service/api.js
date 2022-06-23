import Axios from "axios";
  const defaultAxios = Axios.create({
    headers:{"X-Requested-With":"XMLHttpRequest","sec-ch-ua":"" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"","sec-ch-ua-mobile":"?0","sec-ch-ua-platform":""Windows"","Sec-Fetch-Site":"same-origin","User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36","X-CSRF-Token":"ngXVknFkXaVIUWIzywd+bUPeubQQ6OMhSQlYYXbOQvk=","Cookie":"_BEAMER_USER_ID_FmNWbLVp23294=62f49a5e-e6be-494f-930b-179f40d151a9; _BEAMER_FIRST_VISIT_FmNWbLVp23294=2022-06-22T10:07:55.020Z; zarget_user_id=28b0d2dd-6c34-4161-a234-6c1963f8ba90; 28b0d2dd-6c34-4161-a234-6c1963f8ba90=1; _freshsales_session=BAh7B0kiD3Nlc3Npb25faWQGOgZFVEkiJTM5MGRmOTU0YTI5ZjRkNDQ0Yzc5ZGY0MGQ0OTBkMjhjBjsAVEkiEF9jc3JmX3Rva2VuBjsARkkiMW5nWFZrbkZrWGFWSVVXSXp5d2QrYlVQZXViUVE2T01oU1FsWVlYYk9Rdms9BjsARg%3D%3D--825a3a8e6107777259ed173150b147dbaacdafc0; _x_m=x_a; _fw_crm_v=6db31c8d-f610-45c4-abbc-9d65982825c6; _BEAMER_LAST_POST_SHOWN_FmNWbLVp23294=null; _BEAMER_DATE_FmNWbLVp23294=2022-06-22T10:59:25.864Z; 28b0d2dd-6c34-4161-a234-6c1963f8ba90=1; capability_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzY29wZSI6InNjb3BlOmNsaWVudDppbmNvbWluZz9jbGllbnROYW1lPTEwODY1OCBzY29wZTpjbGllbnQ6b3V0Z29pbmc_YXBwU2lkPUFQYWE0MTVmY2RkZTU4MzQ1ZjMzOGQwMzczZGY5YWE1ZTcmY2xpZW50TmFtZT0xMDg2NTgiLCJpc3MiOiJBQzliZGU4MmE3MjA0NDg1ZDUyNjE2YzQzOGM3MGRjOTA4IiwiZXhwIjoxNjU2MDAyODQyfQ.Xky_6MOupqIP4Wn2HWnsSbdnfbJDzY-i7_uC5y1pcrg; _d=ZDE1NWQzNTctMDc3Ni00MGUwLWFhM2UtNjZhMjRhMTM3OTc0; _hp2_id.870388005=%7B%22userId%22%3A%226613280778045038%22%2C%22pageviewId%22%3A%227905279654712775%22%2C%22sessionId%22%3A%228504909593492977%22%2C%22identity%22%3A%22459662297025678332%22%2C%22trackerVersion%22%3A%224.0%22%2C%22identityField%22%3Anull%2C%22isIdentified%22%3A1%7D; _hp2_ses_props.1325449719=%7B%22r%22%3A%22https%3A%2F%2Fdhiwise-459662296123098611.myfreshworks.com%2F%22%2C%22ts%22%3A1655976433312%2C%22d%22%3A%22dhiwise-459662296123098611.myfreshworks.com%22%2C%22h%22%3A%22%2Fcrm%2Fsales%2Fproducts%2Fview%2F70003419030%22%2C%22q%22%3A%22%3Fper_page%3D25%26sort_type%3Ddesc%22%7D; _BEAMER_FILTER_BY_URL_FmNWbLVp23294=true; _session_id=emh2YUZmQjJGbDNWNEtjWHdqd29tMVI1cjZVWVlleVRwUjZhbmlsbER2NnZaKzZnQ1ZXenNSRm8wMG1vU3VMc1pJWDVyb2g1Y1pVaGV5WGlMWksrQ2hMU2pLazlvYmhqdlhyMWhFRHhLNzlXNkpSRUY1WUdiS2xwNUpqV3BmSHVQOHY0WTNxcUUwdmxOUXVZOE5iOVNBPT0tLUxnQi9oekduRHo5QzFoTEhGWVpFQ1E9PQ%3D%3D--703372a3822533390691b2c8dde231238129af14; XSRF-TOKEN=f5f1624f-3edf-4dcc-8870-f31ce016311d.JDWg/0HuZ0akHpAQidBsUjTsbzvexene48Ru8dyekuk=; _hp2_id.1325449719=%7B%22userId%22%3A%22712357654324296%22%2C%22pageviewId%22%3A%223211132453725252%22%2C%22sessionId%22%3A%222386611892311021%22%2C%22identity%22%3A%22459662297025678332%22%2C%22trackerVersion%22%3A%224.0%22%2C%22identityField%22%3Anull%2C%22isIdentified%22%3A1%2C%22oldIdentity%22%3Anull%7D","Referer":"https://dhiwise-459662296123098611.myfreshworks.com/crm/sales/calendar/tasks","Sec-Fetch-Dest":"empty","Sec-Fetch-Mode":"cors","Accept-Language":"en-US,en;q=0.9","Cache-Control":"no-store, no-cache, must-revalidate","Connection":"keep-alive","Authorization":"Token token=fg88hUkUczuzGL8gxyXJAA","Content-Type":"application/json","Accept":"application/json, text/javascript, */*; q=0.01",}
  })
  defaultAxios.interceptors.response.use(
    (res) => {
       return res.data;
    },
    (err) => {
       return Promise.reject(err);
    }
    );
    
    export const getTasksfilteropenincludetargetable2Cowner2Cusers2Ccreater2Cupdater2CtasktypeopenModalpage1perpage251655976962483 =({data={},headers={},params={}, path = {}}={})=>{ return defaultAxios({
      url: `https://dhiwise-459662296123098611.myfreshworks.com/crm/sales/tasks?filter=open&include=targetable%2Cowner%2Cusers%2Ccreater%2Cupdater%2Ctask_type&openModal=&page=1&per_page=25&_=1655976962483`,
      method: "get",
      params:{"filter":"open","include":"targetable%2Cowner%2Cusers%2Ccreater%2Cupdater%2Ctask_type","page":"1","per_page":"25","_":"1655976962483",...params},
      headers,
      data,
    });} 
    
    