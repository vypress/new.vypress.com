export function byLang(o){
    const lang = "en";
    if(Array.isArray(o)) {
      if(o[lang]) {
        return o[lang];
      }
  
      return o[0];
    }
  
    return o;
  }