import Nav from "./Nav";
import Header from "./header";
import Services from "./Services";
import About from "./About";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import Hire from "./Hire";
import Contact from "./Contact";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <Nav />
      <Header name={"Abeer Hasan"} work={"Django Developer"} />
      <About
        name={"Abeer Hasan"}
        work={"Django Developer"}
        bio={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        avatar={
          "https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        }
      />
      <Services
        info={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis"
        }
      />
      <Skills />
      <Portfolio />
      <Testimonials />

      <Hire />

      <Contact>
        <ContactForm />
      </Contact>
      <Footer />
    </>
  );
}
