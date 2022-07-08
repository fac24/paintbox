import { useState } from "react";
import styled from "styled-components";

function FilterNav(props) {
  const mostCount = props.moods.sort((a, b) => (a.count < b.count ? 1 : -1));
  const top10Moods = mostCount.slice(0, 10);
  console.log(mostCount);

  return (
    <form>
      <FilterFieldSet>
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
      </FilterFieldSet>
    </form>
  );
}

export default FilterNav;

const FilterFieldSet = styled.fieldset`
  position: relative;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5%;
  max-width: 40rem;
  border-radius: 5px;
  border: 5px solid var(--deep-soothing-ocean);
  text-align: center;
  background-color: var(--lilly-lilac);
  cursor: pointer;
`;
