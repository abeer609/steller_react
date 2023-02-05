export default function ContactForm() {
  return (
    <form>
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          required
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          required
        />
      </div>
      <div className="form-group">
        <textarea
          name="contact-message"
          id=""
          cols="30"
          rows="5"
          className="form-control"
          placeholder="Message"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary btn-block rounded w-lg">
        Send Message
      </button>
    </form>
  );
}
