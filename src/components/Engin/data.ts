export interface CardData {
    title: string;
    description1: string;
    prixJournalier: string;
  }
  

export interface Cards {
    [option: string]: CardData[]; // Index signature for string-based indexing
}

export const options: { value: string; label: string }[] = [
  { value: "all", label: "Tout afficher" }, // "All" option
  { value: "option1", label: "Type 1" },
  { value: "option2", label: "Type 2" },
  { value: "option3", label: "Type 3" },
  { value: "option4", label: "Type 4" },
  { value: "option5", label: "Type 5" },
  { value: "option6", label: "Type 6" },
  { value: "option7", label: "Type 7" },
  { value: "option8", label: "Type 8" },
  { value: "option9", label: "Type 9" },
  { value: "option10", label: "Type 10" },
  { value: "option11", label: "Type 11" },
  { value: "option12", label: "Type 12" },
];

export const cards: Cards = {
    option1: [
      {
        prixJournalier: "25 000 AR",
        title: "Tracteur",
        description1: "1500 Kg-130 Ch",
      },
      {
        prixJournalier: "25 000 AR",
        title: "Mini-tracteur",
        description1: "Description1 de la carte 2 Option 1",
      },
    ],
    option2: [
      {
        prixJournalier: "25 000 AR",
        title: "Card 1 Option 2",
        description1: "Description1 de la carte 1 Option 2",
      },
      {
        prixJournalier: "25 000 AR",
        title: "Card 2 Option 2",
        description1: "Description1 de la carte 2 Option 2",
      },
    ],
    option3: [
      {
        prixJournalier: "25 000 AR",
        title: "Card 1 Option 3",
        description1: "Description1 de la carte 1 Option 3",
      },
      {
        prixJournalier: "25 000 AR",
        title: "Card 2 Option 3",
        description1: "Description1 de la carte 2 Option 3",
      },
    ],
    option4: [
      {
        prixJournalier: "25 000 AR",
        title: "Card 1 Option 4",
        description1: "Description1 de la carte 1 Option 3",
      },
      {
        prixJournalier: "25 000 AR",
        title: "Card 2 Option 4",
        description1: "Description1 de la carte 2 Option 3",
      },
    ],
    option5: [
      {
        prixJournalier: "25 000 AR",
        title: "Card 1 Option 5",
        description1: "Description1 de la carte 1 Option 3",
      },
      {
        prixJournalier: "25 000 AR",
        title: "Card 2 Option 5",
        description1: "Description1 de la carte 2 Option 3",
      },
    ],
    option6: [
      {
        prixJournalier: "25 000 AR",
        title: "Card 1 Option 6",
        description1: "Description1 de la carte 1 Option 3",
      },
      {
        prixJournalier: "25 000 AR",
        title: "Card 2 Option 6",
        description1: "Description1 de la carte 2 Option 3",
      },
    ],
    option7: [
      {
        prixJournalier: "25 000 AR",
        title: "Card 1 Option 7",
        description1: "Description1 de la carte 1 Option 3",
      },
      {
        prixJournalier: "25 000 AR",
        title: "Card 2 Option 7",
        description1: "Description1 de la carte 2 Option 3",
      },
    ],
    option8: [
      {
        prixJournalier: "25 000 AR",
        title: "Card 1 Option 8",
        description1: "Description1 de la carte 1 Option 3",
      },
      {
        prixJournalier: "25 000 AR",
        title: "Card 2 Option 8",
        description1: "Description1 de la carte 2 Option 3",
      },
    ],
    option9: [
      {
        prixJournalier: "25 000 AR",
        title: "Card 1 Option 9",
        description1: "Description1 de la carte 1 Option 3",
      },
      {
        prixJournalier: "25 000 AR",
        title: "Card 2 Option 9",
        description1: "Description1 de la carte 2 Option 3",
      },
    ],
    option10: [
      {
        prixJournalier: "25 000 AR",
        title: "Card 1 Option 10",
        description1: "Description1 de la carte 1 Option 3",
      },
      {
        prixJournalier: "25 000 AR",
        title: "Card 2 Option 10",
        description1: "Description1 de la carte 2 Option 3",
      },
    ],
    option11: [
      {
        prixJournalier: "25 000 AR",
        title: "Card 1 Option 11",
        description1: "Description1 de la carte 1 Option 3",
      },
      {
        prixJournalier: "25 000 AR",
        title: "Card 2 Option 11",
        description1: "Description1 de la carte 2 Option 3",
      },
    ],
    option12: [
      {
        prixJournalier: "25 000 AR",
        title: "Card 1 Option 12",
        description1: "Description1 de la carte 1 Option 3",
      },
      {
        prixJournalier: "25 000 AR",
        title: "Card 2 Option 12",
        description1: "Description1 de la carte 2 Option 3",
      },
    ],
  };