import { useState } from "react";

function FilterNav(props) {
  const mostCount = props.moods.sort((a, b) => (a.count < b.count ? 1 : -1));
  const top10Moods = mostCount.slice(0, 10);
  console.log(mostCount);

  return (
    <form>
      <fieldset>
        <label htmlFor="moods">Filter by mood:</label>
        <select
          name="moods"
          id="moods"
          onChange={(event) => props.setMood(event.target.value)}
        >
          <option key="all" value="all">
            All
          </option>
          {top10Moods.map((mood) => (
            <option key={mood.id} value={mood.mood}>
              {mood.mood}
            </option>
          ))}
        </select>
      </fieldset>
    </form>
  );
}

export default FilterNav;
