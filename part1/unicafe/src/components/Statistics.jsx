const Statistics = ({ good, neutral, bad, all, average }) => {
  console.log({ good, neutral, bad, all, average });
  return (
    <div>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {(good / all) * 100}%</p>
    </div>
  );
}

export default Statistics;
