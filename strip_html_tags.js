remove_tags = (str) =>{

      if ((str===null) || (str==='')){
      
        return false;
      
      }else{
      
        str = str.toString();
        return str.replace( /(<([^>]+)>)/ig, '');
     }
}
