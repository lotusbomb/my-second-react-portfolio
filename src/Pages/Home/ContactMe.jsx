export default function ContactMe () {
    return (
      <section className="contact-section" id="Contact">
        <div>
          <p className="sub-title">Get in Touch</p>
          <h2>Contact Me</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
            neque?
          </p>
        </div>
        <form action="" className="contact-form-container">
          <div className="container">
            <label htmlFor="first-name" className="contact-label">
              <span className="text-md">First Name</span>
              <input
                type="text"
                className="contact-input text-md"
                id="first-name" required name="first-name"
              />
            </label>
            <label htmlFor="last-name" className="contact-label">
              <span className="text-md">Last Name</span>
              <input
                type="email"
                className="contact-input text-md"
                name="last-name"
                required
                id="email"
              />
            </label>
            <label htmlFor="phone-number" className="contact-label">
              <span className="text-md">Phone number</span>
              <input
                type="number"
                className="contact-input text-md"
                name="phone-number"
                required
                id="phone-number"
              />
            </label>
          </div>
          <label htmlFor="choose-topic" className="contact-label">
            <span className="text-md">Choose a topic</span>
            <select id="choose-topic" className="contact-input text-md">
              <option>Select One...</option>
              <option>Item 1</option>
              <option>Item 2</option>
              <option>Item 3</option>
            </select>
          </label>
          <label htmlFor="message" className="contact-label">
            <span className="text-md">Message</span>
            <textarea
              className="contact-input text-md"
              id="message"
              rows="8"
              placeholder="Type your message..."
            />
          </label>
          <label htmlFor="checkbox" className="checkbox-label">
            <input type="checkbox" required name="checkbox" id="checkbox" />
            <span className="text-sm">I accept the terms</span>
          </label>
          <div>
            <button className="btn btn-primary contact-form-btn"> Submit
            </button>
          </div>
        </form>
      </section>
    );
}