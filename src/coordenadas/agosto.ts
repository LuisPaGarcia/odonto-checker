type TurnoModelType = {
  query: string;
  turno: string;
  name?: string;
};

type ProtesisType = TurnoModelType[];
type PeriodonciaType = TurnoModelType[];
type DiagnosticoType = TurnoModelType[];
type RestaurativaType = TurnoModelType[];

type DiaTurnosType = {
  protesis?: ProtesisType;
  periodoncia?: PeriodonciaType;
  diagnostico?: DiagnosticoType;
  restaurativa?: RestaurativaType;
};

const lunes23: DiaTurnosType = {
  protesis: [
    {
      turno: "8:30 - 10:15",
      query: "body > div > table > tbody > tr:nth-child(9) > td:nth-child(4)",
    },
    {
      turno: "8:30 - 10:15",
      query: "body > div > table > tbody > tr:nth-child(12) > td:nth-child(4)",
    },
    {
      turno: "8:30 - 10:15",
      query: "body > div > table > tbody > tr:nth-child(13) > td:nth-child(4)",
    },
    {
      turno: "8:30 - 10:15",
      query: "body > div > table > tbody > tr:nth-child(15) > td:nth-child(4)",
    },
    {
      turno: "8:30 - 10:15",
      query: "body > div > table > tbody > tr:nth-child(18) > td:nth-child(4)",
    },
    {
      turno: "10:45 - 12:30",
      query: "body > div > table > tbody > tr:nth-child(9) > td:nth-child(8)",
    },
    {
      turno: "10:45 - 12:30",
      query: "body > div > table > tbody > tr:nth-child(12) > td:nth-child(8)",
    },
    {
      turno: "10:45 - 12:30",
      query: "body > div > table > tbody > tr:nth-child(13) > td:nth-child(8)",
    },
    {
      turno: "10:45 - 12:30",
      query: "body > div > table > tbody > tr:nth-child(15) > td:nth-child(8)",
    },
    {
      turno: "10:45 - 12:30",
      query: "body > div > table > tbody > tr:nth-child(18) > td:nth-child(8)",
    },
    {
      turno: "1:00 - 2:45",
      query: "body > div > table > tbody > tr:nth-child(9) > td:nth-child(12)",
    },
    {
      turno: "1:00 - 2:45",
      query: "body > div > table > tbody > tr:nth-child(12) > td:nth-child(12)",
    },
    {
      turno: "1:00 - 2:45",
      query: "body > div > table > tbody > tr:nth-child(13) > td:nth-child(12)",
    },
    {
      turno: "1:00 - 2:45",
      query: "body > div > table > tbody > tr:nth-child(15) > td:nth-child(12)",
    },
    {
      turno: "1:00 - 2:45",
      query: "body > div > table > tbody > tr:nth-child(18) > td:nth-child(12)",
    },
    {
      turno: "3:15 - 5:30",
      query: "body > div > table > tbody > tr:nth-child(9) > td:nth-child(16)",
    },
    {
      turno: "3:15 - 5:30",
      query: "body > div > table > tbody > tr:nth-child(12) > td:nth-child(16)",
    },
    {
      turno: "3:15 - 5:30",
      query: "body > div > table > tbody > tr:nth-child(13) > td:nth-child(16)",
    },
    {
      turno: "3:15 - 5:30",
      query: "body > div > table > tbody > tr:nth-child(15) > td:nth-child(16)",
    },
    {
      turno: "3:15 - 5:30",
      query: "body > div > table > tbody > tr:nth-child(18) > td:nth-child(16)",
    },
  ],
  periodoncia: [
    {
      query: "body > div > table > tbody > tr:nth-child(38) > td:nth-child(12)",
      turno: "1:00 - 2:45",
    },
    {
      query: "body > div > table > tbody > tr:nth-child(40) > td:nth-child(12)",
      turno: "1:00 - 2:45",
    },
    {
      query: "body > div > table > tbody > tr:nth-child(42) > td:nth-child(12)",
      turno: "1:00 - 2:45",
    },
    {
      query: "body > div > table > tbody > tr:nth-child(44) > td:nth-child(12)",
      turno: "1:00 - 2:45",
    },
    {
      query: "body > div > table > tbody > tr:nth-child(46) > td:nth-child(12)",
      turno: "1:00 - 2:45",
    },
    {
      query: "body > div > table > tbody > tr:nth-child(48) > td:nth-child(12)",
      turno: "1:00 - 2:45",
    },
    {
      query: "body > div > table > tbody > tr:nth-child(38) > td:nth-child(16)",
      turno: "3:15 - 5:30",
    },
    {
      query: "body > div > table > tbody > tr:nth-child(40) > td:nth-child(16)",
      turno: "3:15 - 5:30",
    },
    {
      query: "body > div > table > tbody > tr:nth-child(42) > td:nth-child(16)",
      turno: "3:15 - 5:30",
    },
    {
      query: "body > div > table > tbody > tr:nth-child(44) > td:nth-child(16)",
      turno: "3:15 - 5:30",
    },
    {
      query: "body > div > table > tbody > tr:nth-child(46) > td:nth-child(16)",
      turno: "3:15 - 5:30",
    },
    {
      query: "body > div > table > tbody > tr:nth-child(48) > td:nth-child(16)",
      turno: "3:15 - 5:30",
    },
  ],
  diagnostico: [
    {
      query: "body > div > table > tbody > tr:nth-child(52) > td:nth-child(12)",
      turno: "1:00 - 2:45",
    },
    {
      query: "body > div > table > tbody > tr:nth-child(54) > td:nth-child(12)",
      turno: "1:00 - 2:45",
    },
    {
      query: "body > div > table > tbody > tr:nth-child(56) > td:nth-child(12)",
      turno: "1:00 - 2:45",
    },
    {
      query: "body > div > table > tbody > tr:nth-child(58) > td:nth-child(12)",
      turno: "1:00 - 2:45",
    },
    {
      query: "body > div > table > tbody > tr:nth-child(60) > td:nth-child(12)",
      turno: "1:00 - 2:45",
    },
    {
      query: "body > div > table > tbody > tr:nth-child(62) > td:nth-child(12)",
      turno: "1:00 - 2:45",
    },
    {
      query: "body > div > table > tbody > tr:nth-child(52) > td:nth-child(16)",
      turno: "3:15 - 5:30",
    },
    {
      query: "body > div > table > tbody > tr:nth-child(54) > td:nth-child(16)",
      turno: "3:15 - 5:30",
    },
    {
      query: "body > div > table > tbody > tr:nth-child(56) > td:nth-child(16)",
      turno: "3:15 - 5:30",
    },
    {
      query: "body > div > table > tbody > tr:nth-child(58) > td:nth-child(16)",
      turno: "3:15 - 5:30",
    },
    {
      query: "body > div > table > tbody > tr:nth-child(60) > td:nth-child(16)",
      turno: "3:15 - 5:30",
    },
    {
      query: "body > div > table > tbody > tr:nth-child(62) > td:nth-child(16)",
      turno: "3:15 - 5:30",
    },
  ],
  restaurativa: [
    {
      query: "body > div > table > tbody > tr:nth-child(66) > td:nth-child(4)",
      turno: "8:30 - 10:15",
    },
    {
      query: "body > div > table > tbody > tr:nth-child(68) > td:nth-child(4)",
      turno: "8:30 - 10:15",
    },
    {
      query: "body > div > table > tbody > tr:nth-child(70) > td:nth-child(4)",
      turno: "8:30 - 10:15",
    },
    {
      query: "body > div > table > tbody > tr:nth-child(74) > td:nth-child(4)",
      turno: "8:30 - 10:15",
    },
    {
      query: "body > div > table > tbody > tr:nth-child(66) > td:nth-child(8)",
      turno: "10:45 - 12:30",
    },
    {
      query: "body > div > table > tbody > tr:nth-child(68) > td:nth-child(8)",
      turno: "10:45 - 12:30",
    },
    {
      query: "body > div > table > tbody > tr:nth-child(70) > td:nth-child(8)",
      turno: "10:45 - 12:30",
    },
    {
      query: "body > div > table > tbody > tr:nth-child(74) > td:nth-child(8)",
      turno: "10:45 - 12:30",
    },
    {
      query: "body > div > table > tbody > tr:nth-child(66) > td:nth-child(12)",
      turno: "1:00 - 2:45",
    },
    {
      query: "body > div > table > tbody > tr:nth-child(68) > td:nth-child(12)",
      turno: "1:00 - 2:45",
    },
    {
      query: "body > div > table > tbody > tr:nth-child(70) > td:nth-child(12)",
      turno: "1:00 - 2:45",
    },
    {
      query: "body > div > table > tbody > tr:nth-child(74) > td:nth-child(12)",
      turno: "1:00 - 2:45",
    },
    {
      query: "body > div > table > tbody > tr:nth-child(66) > td:nth-child(16)",
      turno: "3:15 - 5:30",
    },
    {
      query: "body > div > table > tbody > tr:nth-child(68) > td:nth-child(16)",
      turno: "3:15 - 5:30",
    },
    {
      query: "body > div > table > tbody > tr:nth-child(70) > td:nth-child(16)",
      turno: "3:15 - 5:30",
    },
    {
      query: "body > div > table > tbody > tr:nth-child(74) > td:nth-child(16)",
      turno: "3:15 - 5:30",
    },
  ],
};

const parseProtesis = (day: DiaTurnosType): TurnoModelType[] | undefined => {
  return day?.protesis
    ?.map((turno: TurnoModelType) => ({
      name: (document.querySelector(turno.query) as HTMLElement).innerText,
      ...turno,
    }))
    .filter((obj) => obj.name === "");
};

const martes24 = {};
