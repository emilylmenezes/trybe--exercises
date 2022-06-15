function trinaguloCentralizado() {
    const n = 5;
  
    let linha = "";
  
    for (let i = 0; i < n; i++) {
      for (let c = 0; c < n; c++) {
        if (c >= n - 1 - i) {
          linha += " *";
        } else {
          linha += " ";
        }
      }
  
      linha += "\n";
    }
  
    return linha;
  }
  
  console.log(trinaguloCentralizado());