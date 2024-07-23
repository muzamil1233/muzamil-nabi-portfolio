import React from 'react'

const Testimonials = () => {
  return (
    <div id = "testimonials">
      <h2>Testimonials</h2>
      <section>

        <TestimonialCard  name = {"Muzamil "} 
        feedback = {" your Teaching skills are so good. "}/>

   <TestimonialCard  name = {"Muzamil "} 
        feedback = {" your portfolio is also good . "}/>

<TestimonialCard  name = {"Muazim "} 
        feedback = {" thanks for suggesting this portfolia for me "}/>
      </section>
    </div>
  );
};





const TestimonialCard =({name, feedback})=>(
    <article>
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user" />
        <h4>{name}</h4>
        <p>{feedback}</p>
    </article>
)
    export default Testimonials

