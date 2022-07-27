import { useEffect, useMemo, useState } from "react";

export interface Gentleman {
  id: number;
  name: string;
  description: string;
  status: string;
  alternativeText: string;
  selected: boolean;
}

// export const getInitial = {
//   let (name: string) = "";
//   ( name ) => {
//     const nameParts = name.split("");

//     const initial = () =>
//       nameParts[0].length < 4
//         ? nameParts[1].charAt[0].toUpperCase()
//         : nameParts[0].charAt[0].toUpperCase();

//     return initial;
//   },
// }

// example:

// export const App = (): JSX.Element => {
//   const [gentlemen, setGentlemen] = useState<Gentleman[]>([]);

//   const removeGentleman = (id: number) => {
//     setGentlemen(gentlemen.filter((gentleman) => gentleman.id !== id));
//   };

//   const loadGentlemen = (gentlemen: Gentleman[]) => {
//     setGentlemen([...gentlemen]);
//   };
//   useEffect(() => {
//     loadGentlemen(gentlemen);
//   }, [gentlemen]);
//   useEffect(() => {
//     console.log("hello kitty");
//   }, []);
// };
