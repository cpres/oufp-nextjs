export interface VDayProps {
  name: string;
  volunteerdays: Array<any>;
}
// interface Keyable {
//   [key: string]: any;
// }
type DayKey = 'title' | 'startDatetime';

// interface VDay {
//   title: string;
//   startDatetime: Date;
// }
function VolunteerDays({ name, volunteerdays }: VDayProps) {
  // console.log(volunteerdays);
  return (
    <div className="text-center">
      <h1 className="text-2xl">Upcoming {name} Volunteer Days</h1>
      {volunteerdays.length ? (
        <>
          {volunteerdays.map((vday: Record<DayKey, string>, idx) => (
            <div key={idx}>
              <span className="underline text-lg">{vday.title}</span>
              <span>
                {' '}
                - {new Date(vday.startDatetime).toDateString()} @ 9:30am
              </span>
            </div>
          ))}
        </>
      ) : (
        <p className="text-lg">Every 3rd Sunday!</p>
      )}
    </div>
  );
}

/*
- getStaticProps
- getStaticPaths
*/

export default VolunteerDays;
