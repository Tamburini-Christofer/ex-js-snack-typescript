let dataApi: unknown;

if (dataApi === null) {
  console.log("Il dato è vuoto");
} else if (Array.isArray(dataApi)) {
  console.log(dataApi.length);
} else if (dataApi instanceof Promise) {
    dataApi.then((messaggio) => console.log(messaggio) )
} 

else if (typeof dataApi === "string") {
  console.log(dataApi.toUpperCase());
} else if (typeof dataApi === "number") {
  console.log(dataApi * 2);
} else if (typeof dataApi === "boolean") {
  console.log(dataApi ? "Sì" : "No");
} else {
  console.log("Tipo non supportato");
}

type Dipendente =  {
    nome: string,
    cognome: string,
    annoNascita: number,
    sesso: "m" | "f",
    anniDiServizio: number[],
    readonly emailAziendale: string,
    contratto: "intedetermianto" | "determianto" | "freelance";
}

type Developer = Dipendente & {
    livelloEsperienza: "Junior" | "Mid" | "Senior",
    linguaggi?: string[],
    certificazioni: string[]
}

type ProjectManager = Dipendente & {
    teamSize: number | null,
    budgetGestito?: number
    stakeholderPrincipali: string[]
}

type Team = {
    nomeTeam: string,
    progettoAttuale: string | null,
    budget: number,
    membri: [ProjectManager, Developer, ...Developer[]]
}