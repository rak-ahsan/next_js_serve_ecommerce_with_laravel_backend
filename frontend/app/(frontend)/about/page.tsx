"use client";

import { useState } from "react";

const About = () => {
  const [test, setTest] = useState(false);
  return (
    <><div className="text" onClick={() => setTest(!test)}>
      page
      {test && <p onClick={()=>alert('ok')}>ok</p>}

    </div><div>
        <p>no css</p>
      </div></>
  );
};

export default About;
