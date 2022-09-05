import { Request } from "../ts/interfaсes";

export const Utils = {
  parseRequestURL: () => {
    const url = window.location.hash.slice(1).toLowerCase() || '/';
    
    const arrPartUrl: string[] = url.split('/');
    
    const request: Request = {
      resource: null,
      id: null,
      verb: null,
    };

    request.resource = arrPartUrl[1];
    request.id = arrPartUrl[2];
    request.verb = arrPartUrl[3];

    return request;
  }
};

