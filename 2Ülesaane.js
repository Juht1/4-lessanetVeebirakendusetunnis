const Nimed = ["mari maasikas", "jaan jõesaar", "kristiina kukk", "margus mustikas", "jaak järve", "kadi kask", "Toomas Tamm", "Kadi Meri", "Leena Laas", "Madis Mets", "Hannes Hõbe", "Anu Allikas", "Kristjan Käär", "Eva Esimene", "Jüri Jõgi", "Liis Lepik", "Kalle Kask", "Tiina Teder", "Kaidi Koppel", "tiina Toom"];

  const capitalizeEsimeneTäht = (word) => {
    const EsimeneTäht = word.charAt(0).toUpperCase();
    const rest = word.slice(1).toLowerCase();
    return EsimeneTäht + rest;
  };
  
  const capitalizedNimed = Nimed.map((name) => {
    const words = name.split(" ");
    const capitalizedWords = words.map(capitalizeEsimeneTäht);
    return capitalizedWords.join(" ");
  });
  
  console.log(capitalizedNimed);
  
  const emailAddresses = capitalizedNimed.map((name) => {
    const lastName = name.split(" ")[1].toLowerCase();
    return `${lastName}@tthk.ee`;
  });
  
  console.log(emailAddresses);

  const NimeOtsing = (name) => {
    const fullName = capitalizedNimed.find((fullName) =>
      fullName.toLowerCase().includes(name.toLowerCase())
    );
    if (fullName) {
      console.log(fullName);
    } else {
      console.log("Nimed");
    }
  }  // me ei tea kuidas õigesti teha, ei ole suutnud teha seda rohkem paremini
