import React, { useState } from "react";
import ToggleSwitch from "./ToggleSwitch";

export default function StoryRunningRecord() {
  let [newsletter, setNewsletter] = useState(false);
  let [daily, setDaily] = useState(false);
  let [weekly, setWeekly] = useState(false);
  let [monthly, setMonthly] = useState(false);

  const onNewsletterChange = (checked) => {
    setNewsletter(checked);
    if (!checked) {
      setDaily(false);
      setWeekly(false);
      setMonthly(false);
    }
  };

  return (
    <div>
      <div>
        <ToggleSwitch
          id="newsletter"
          checked={newsletter}
          onChange={onNewsletterChange}
        />
      
      </div>
    
      
    </div>
  );
}