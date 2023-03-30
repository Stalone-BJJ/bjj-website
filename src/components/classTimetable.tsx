export const ClassTimetable = () => {
  const tableStyles = "w-9/12 table-fixed";
  const theadStyles = "";
  const trStyles = "h-16";
  const thStyles = "py-6 border bg-slate-300";
  const tdStyles = "py-4 text-center border text-sm";

  return (
    <div className="flex justify-center">
      <table className={tableStyles}>
        <thead className={theadStyles}>
          <tr className={trStyles}>
            <th scope="col" className={thStyles}>
              Monday
            </th>
            <th scope="col" className={thStyles}>
              Tuesday
            </th>
            <th scope="col" className={thStyles}>
              Wednesday
            </th>
            <th scope="col" className={thStyles}>
              Thursday
            </th>
            <th scope="col" className={thStyles}>
              Friday
            </th>
            <th scope="col" className={thStyles}>
              Saturday
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className={trStyles}>
            <td className={tdStyles}></td>
            <td className={tdStyles + " bg-cyan-200"}>
              06:00 - 07:00<br></br>EARLY BIRDS<br></br>ALL LEVELS GI
            </td>
            <td className={tdStyles + " bg-cyan-200"}>
              06:00 - 07:00<br></br>EARLY BIRDS<br></br>ALL LEVELS GI
            </td>
            <td className={tdStyles + " bg-cyan-200"}>
              06:00 - 07:00<br></br>EARLY BIRDS<br></br>ALL LEVELS GI
            </td>
            <td className={tdStyles}></td>
            <td className={tdStyles}></td>
          </tr>
          <tr className={trStyles}>
            <td className={tdStyles + " bg-cyan-200"}>
              10:00 - 11:00<br></br>ALL LEVELS GI
            </td>
            <td className={tdStyles}></td>
            <td className={tdStyles}></td>
            <td className={tdStyles}></td>
            <td className={tdStyles + " bg-cyan-200"}>
              10:00 - 11:00<br></br>ALL LEVELS GI
            </td>
            <td className={tdStyles}></td>
          </tr>
          <tr className={trStyles}>
            <td className={tdStyles + " bg-violet-300"}>
              11:00 - 12:00<br></br>COMPETITION<br></br>SPARRING GI
            </td>
            <td className={tdStyles}></td>
            <td className={tdStyles}></td>
            <td className={tdStyles}></td>
            <td className={tdStyles + " bg-violet-300"}>
              11:00 - 12:00<br></br>COMPETITION<br></br>SPARRING GI
            </td>
            <td className={tdStyles + " bg-lime-300"}>
              12:00 - 12:50<br></br>KIDS GI
            </td>
          </tr>
          <tr className={trStyles}>
            <td className={tdStyles + " bg-lime-300"}>
              17:00 - 17:45<br></br>KIDS GI
            </td>
            <td className={tdStyles}></td>
            <td className={tdStyles + " bg-lime-300"}>
              17:00 - 17:45<br></br>KIDS GI
            </td>
            <td className={tdStyles}></td>
            <td className={tdStyles}></td>
            <td className={tdStyles + " bg-cyan-200"}>
              13:00 - 14:00<br></br>ALL LEVELS GI
            </td>
          </tr>
          <tr className={trStyles}>
            <td className={tdStyles + " bg-cyan-200"}>
              18:00 - 19:00<br></br>FUNDAMENTALS<br></br>GI
            </td>
            <td className={tdStyles + " bg-violet-300"}>
              18:00 -19:00<br></br>ADVANCED GI
            </td>
            <td className={tdStyles + " bg-cyan-200"}>
              18:00 - 19:00<br></br>FUNDAMENTALS<br></br>NO-GI
            </td>
            <td className={tdStyles + " bg-violet-300"}>
              18:00 -19:00<br></br>ADVANCED<br></br>NO-GI
            </td>
            <td className={tdStyles + " bg-cyan-200"}>
              17:30 - 18:30<br></br>WOMANS&apos;S<br></br>CLASS
            </td>
            <td className={tdStyles}></td>
          </tr>
          <tr className={trStyles}>
            <td className={tdStyles + " bg-violet-300"}>
              19:00 - 20:00<br></br>ADVANCED GI
            </td>
            <td className={tdStyles + " bg-violet-300"}>
              19:00 - 20:00<br></br>LIVE TRAINING<br></br>GI
            </td>
            <td className={tdStyles + " bg-violet-300"}>
              19:00 - 20:00<br></br>COMPETITION<br></br>TRAINING
            </td>
            <td className={tdStyles + " bg-violet-300"}>
              19:00 - 20:00<br></br>LIVE TRAINING<br></br>NO-GI
            </td>
            <td className={tdStyles + " bg-cyan-200"}>
              18:30 - 19:30<br></br>ALL LEVELS GI
            </td>
            <td className={tdStyles}></td>
          </tr>
          <tr className={trStyles}>
            <td className={tdStyles + " bg-violet-300"}>
              20:00 - 21:00<br></br>LIVE TRAINING<br></br>GI
            </td>
            <td className={tdStyles + " bg-cyan-200"}>
              19:30 - 20:30<br></br>FUNDAMENTALS<br></br>GI
            </td>
            <td className={tdStyles}></td>
            <td className={tdStyles + " bg-cyan-200"}>
              19:30 - 20:30<br></br>ALL LEVELS<br></br>GI
            </td>
            <td className={tdStyles + " bg-cyan-200"}>
              19:30 - 20:30<br></br>OPEN MAT
            </td>
            <td className={tdStyles}></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
