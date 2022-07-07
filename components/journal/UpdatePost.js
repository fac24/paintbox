import { useRef, useState } from "react";
import { useRouter } from "next/router";

import { supabase } from "../../utils/supabaseClient";

function UpdatePost(props) {
  const [formVisibility, setFormVisibility] = useState(false);
  const router = useRouter();

  const moodInput = useRef();
  const descriptionInput = useRef();
  const visibilityInput = useRef();

  function showForm() {
    setFormVisibility(!formVisibility);
  }

  async function submitHandler(event) {
    event.preventDefault();

    const enteredMood = moodInput.current.value.toLowerCase();
    const enteredDescription = descriptionInput.current.value;
    const checkedVisibility = visibilityInput.current.checked;

    const { data, error } = await supabase
      .from("arts")
      .update({
        mood: enteredMood,
        caption: enteredDescription,
        public: checkedVisibility,
      })
      .match({ id: props.id });
    setFormVisibility(!formVisibility);

    router.push("/journal");
  }

  return (
    <div>
      <button onClick={showForm}>Edit</button>
      {formVisibility ? (
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="mood">Change the mood:</label>
            <input type="text" id="mood" name="mood" ref={moodInput} required />
          </div>

          <div>
            <label htmlFor="description">
              Change the description of the feelings:
            </label>
            <textarea
              rows="5"
              id="description"
              name="description"
              ref={descriptionInput}
              required
            />
          </div>

          <div>
            <p>Change visibility</p>
            <input
              type="checkbox"
              id="visibility"
              name="visibility"
              value="true"
              ref={visibilityInput}
            />
            <label htmlFor="visibility">Public</label>
          </div>

          <button>Submit</button>
        </form>
      ) : null}
    </div>
  );
}

export default UpdatePost;
